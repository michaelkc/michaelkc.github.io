const LIBRARY = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js";
const MODEL = "HuggingFaceTB/SmolVLM-256M-Instruct";
const REVISION = "7e3e67edbbed1bf9888184d9df282b700a323964";
const QWEN_LIBRARY = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js";
const QWEN_MODEL = "onnx-community/Qwen3.5-0.8B-ONNX-OPT";
const QWEN_REVISION = "9a4c21d8f724176b0a7edaaed36303044451886e";
const QWEN_RUNTIME = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.31.0-dev.20260914-8d85527a0/dist/";
const QWEN_DOWNLOAD_LIMIT = 700000000;
// Audited sizes at the pinned revisions. No higher-precision fallback is allowed.
const QWEN_FILES = {
    "chat_template.jinja": 7755,
    "config.json": 2849,
    "generation_config.json": 248,
    "preprocessor_config.json": 336,
    "processor_config.json": 1300,
    "tokenizer.json": 19226111,
    "tokenizer_config.json": 10069,
    "onnx/decoder_model_merged_q4f16.onnx": 697833,
    "onnx/decoder_model_merged_q4f16.onnx_data": 435777536,
    "onnx/embed_tokens_q4f16.onnx": 1064,
    "onnx/embed_tokens_q4f16.onnx_data": 147005440,
    "onnx/vision_encoder_q4f16.onnx": 213118,
    "onnx/vision_encoder_q4f16.onnx_data": 61919744,
};
const QWEN_TOTAL_BYTES = Object.values(QWEN_FILES).reduce((sum, size) => sum + size, 0) + 587917 + 26861777 + 53057;
let processor, model, activeRuntime, busy = false;
let qwenFetchConfigured = false;
const send = (type, data = {}) => self.postMessage({ type, ...data });

self.onmessage = async ({ data }) => {
    if (busy) return;
    busy = true;
    try {
        const isQwen = data.model === "qwen";
        const modelName = isQwen ? "Qwen3.5-0.8B" : "SmolVLM-256M";
        let qwenAdapter;
        if (isQwen) {
            if (QWEN_TOTAL_BYTES > QWEN_DOWNLOAD_LIMIT) throw new Error("Qwen exceeds the 700 MB download cap. Download stopped.");
            if (data.runtime === "wasm") throw new Error("This under-700 MB Qwen configuration requires WebGPU. Use SmolVLM for CPU mode.");
            qwenAdapter = await self.navigator.gpu?.requestAdapter();
            if (!qwenAdapter?.features.has("shader-f16")) {
                throw new Error("Qwen requires WebGPU with shader-f16. No model was downloaded. Try a recent Chrome or Edge with GPU acceleration, or use SmolVLM.");
            }
        }
        send("status", { text: "Loading the browser inference library..." });
        const { AutoProcessor, AutoModelForVision2Seq, Qwen3_5ForConditionalGeneration, TextStreamer, RawImage, env } = await import(isQwen ? QWEN_LIBRARY : LIBRARY);
        env.allowLocalModels = false;
        env.backends.onnx.wasm.numThreads = 1;
        env.backends.onnx.wasm.proxy = false;
        if (isQwen && !qwenFetchConfigured) {
            const fetchAsset = env.fetch;
            const modelPrefix = `https://huggingface.co/${QWEN_MODEL}/resolve/`;
            const pinnedPrefix = `${modelPrefix}${QWEN_REVISION}/`;
            env.fetch = (input, init) => {
                let url = String(input);
                if (url.startsWith(modelPrefix)) {
                    url = url.replace(`${modelPrefix}main/`, pinnedPrefix);
                    if (!url.startsWith(pinnedPrefix) || !Object.hasOwn(QWEN_FILES, url.slice(pinnedPrefix.length))) {
                        throw new Error("Qwen requested an unbudgeted model file. Download stopped to preserve the 700 MB cap.");
                    }
                } else if (/^https?:/.test(url) && url !== `${QWEN_RUNTIME}ort-wasm-simd-threaded.asyncify.wasm` && url !== `${QWEN_RUNTIME}ort-wasm-simd-threaded.asyncify.mjs`) {
                    throw new Error("Qwen requested an unbudgeted runtime file. Download stopped to preserve the 700 MB cap.");
                }
                return fetchAsset(url, init);
            };
            env.backends.onnx.wasm.wasmPaths = {
                wasm: `${QWEN_RUNTIME}ort-wasm-simd-threaded.asyncify.wasm`,
                mjs: `${QWEN_RUNTIME}ort-wasm-simd-threaded.asyncify.mjs`,
            };
            qwenFetchConfigured = true;
        }
        let runtime = data.runtime;
        if (runtime !== "wasm") {
            let adapter;
            try {
                adapter = qwenAdapter || await self.navigator.gpu?.requestAdapter();
            } catch {
                // Auto mode can still use the CPU when GPU initialization fails.
            }
            if (runtime === "webgpu" && !adapter) {
                throw new Error("No WebGPU adapter is available. Select CPU / compatibility, or enable GPU acceleration in a recent Chrome or Edge.");
            }
            runtime = adapter ? "webgpu" : "wasm";
        }
        if (!model || activeRuntime !== runtime) {
            if (model) await model.dispose();
            model = null;
            activeRuntime = runtime;
            send("runtime", { runtime });
            const progress_callback = (event) => {
                if (event.status === "progress") {
                    send("progress", { file: event.file, progress: event.progress, loaded: event.loaded, total: event.total });
                } else if (event.status === "initiate" || event.status === "done") {
                    send("status", { text: event.status === "done" ? "Preparing model files..." : `Loading ${event.file}...` });
                }
            };
            const modelId = isQwen ? QWEN_MODEL : MODEL;
            const revision = isQwen ? QWEN_REVISION : REVISION;
            processor ??= await AutoProcessor.from_pretrained(modelId, { revision, progress_callback });
            send("status", { text: `Loading ${modelName} on ${runtime === "webgpu" ? "GPU" : "CPU"}.${isQwen ? " Pinned download: 693 MB, below the 700 MB cap." : ""} First use can take a few minutes...` });
            const ModelClass = isQwen ? Qwen3_5ForConditionalGeneration : AutoModelForVision2Seq;
            model = await ModelClass.from_pretrained(modelId, {
                revision,
                device: runtime,
                dtype: isQwen ? "q4f16" : runtime === "webgpu"
                    ? { embed_tokens: "fp32", vision_encoder: "fp32", decoder_model_merged: "q4" }
                    : "q8",
                progress_callback,
            });
        }
        send("status", { text: "Reading the image..." });
        const image = await RawImage.fromURL(data.image);
        const messages = [{ role: "user", content: [{ type: "image" }, { type: "text", text: data.prompt }] }];
        const text = processor.apply_chat_template(messages, { add_generation_prompt: true, ...(isQwen ? { enable_thinking: false } : {}) });
        const inputs = isQwen
            ? await processor(text, image, { size: { longest_edge: 768 * 768, shortest_edge: 65536 } })
            : await processor(text, [image], { do_image_splitting: false });
        let output = "";
        const streamer = new TextStreamer(processor.tokenizer, {
            skip_prompt: true,
            skip_special_tokens: true,
            callback_function: (chunk) => {
                output += chunk;
                send("chunk", { text: output });
            },
        });
        send("status", { text: "Writing a description..." });
        const start = performance.now();
        await model.generate({
            ...inputs,
            max_new_tokens: data.maxTokens,
            do_sample: false,
            repetition_penalty: 1.1,
            streamer,
        });
        send("complete", { text: output.trim(), seconds: (performance.now() - start) / 1000, runtime });
    } catch (error) {
        send("error", { text: error.message || String(error) });
    } finally {
        busy = false;
    }
};
