const $ = (id) => document.getElementById(id);
const DEFAULT_PROMPT = $("prompt").defaultValue;
const MAX_FILE_BYTES = 50 * 1024 * 1024;
const MAX_IMAGE_EDGE = 1536;
const IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp", "image/gif", "image/avif", "image/bmp"]);
const IMAGE_HINT = "PNG, JPEG, WebP, GIF, AVIF or BMP / up to 50 MB";
let imageData = null;
let worker = null;
let workerGeneration = 0;
let busy = false;
let imageVersion = 0;
let preparingImage = false;
let copyTimer;
const editableControls = ["paste", "browse", "file", "prompt", "model", "runtime", "length", "auto"];
const modelName = () => $("model").value === "qwen" ? "Qwen3.5-0.8B" : "SmolVLM-256M";

function setStatus(text, label = "Working", error = false) {
    $("status").textContent = text;
    $("status-label").textContent = label;
    $("status-box").classList.toggle("error", error);
}

function updateControls() {
    editableControls.forEach((id) => { $(id).disabled = busy || preparingImage; });
    $("describe").disabled = busy || preparingImage || !imageData;
    $("clear").disabled = !imageData && !busy && !preparingImage;
    $("copy").disabled = !$("output").value;
    $("stop").hidden = !busy;
    $("describe").textContent = busy ? "Describing..." : "Describe image";
    $("status").setAttribute("aria-busy", String(busy || preparingImage));
    $("output").setAttribute("aria-busy", String(busy));
}

function disposeWorker() {
    workerGeneration++;
    worker?.terminate();
    worker = null;
}

function finish() {
    busy = false;
    $("progress").hidden = true;
    updateControls();
}

async function getWorker(generation) {
    if (worker) return worker;
    // A blob entry point inherits this page's CSP; a directly loaded worker would not.
    const workerUrl = new URL("./model-worker.js", import.meta.url);
    const response = await fetch(workerUrl);
    if (!response.ok) throw new Error("The model worker could not be loaded.");
    const source = await response.text();
    if (generation !== workerGeneration) return null;
    const url = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
    try {
        worker = new Worker(url, { type: "module" });
    } finally {
        URL.revokeObjectURL(url);
    }
    worker.onmessage = ({ data }) => {
        switch (data.type) {
            case "runtime":
                $("result-info").textContent = `${modelName()} / ${data.runtime === "webgpu" ? "GPU accelerated" : "CPU compatibility mode"}`;
                break;
            case "status":
                $("progress").hidden = true;
                setStatus(data.text);
                break;
            case "progress":
                $("progress").hidden = false;
                $("progress").value = data.progress || 0;
                setStatus(`Downloading ${data.file}: ${Math.round(data.progress || 0)}% (${(data.loaded / 1048576).toFixed(1)} MiB)`, "Downloading");
                break;
            case "chunk":
                $("output").value = data.text;
                $("output").scrollTop = $("output").scrollHeight;
                $("copy").disabled = !data.text;
                break;
            case "complete":
                $("output").value = data.text;
                $("result-info").textContent = `${modelName()} / ${data.runtime === "webgpu" ? "WebGPU" : "CPU"} / ${data.seconds.toFixed(1)}s generation`;
                setStatus(data.text ? "Description ready." : "The model returned no text. Try again with a shorter prompt.", data.text ? "Complete" : "No output", !data.text);
                finish();
                break;
            case "error":
                fail(data.text);
                break;
        }
    };
    worker.onerror = (event) => {
        event.preventDefault();
        fail(event.message || "The model worker could not start. Check your connection and allow scripts from jsDelivr and models from Hugging Face.");
    };
    return worker;
}

function fail(message) {
    disposeWorker();
    finish();
    setStatus(`${message} ${$("model").value === "qwen" ? "Use SmolVLM if Qwen is unsupported; no larger Qwen weights will be downloaded." : "If GPU mode failed, try CPU / compatibility."} For download errors, check your connection and retry.`, "Unable to describe", true);
}

async function describe() {
    if (!imageData || busy || preparingImage) return;
    busy = true;
    $("output").value = "";
    $("result-info").textContent = `${modelName()} / preparing`;
    setStatus("Starting local inference. Downloads are reused when the browser cache permits.");
    updateControls();
    const generation = workerGeneration;
    try {
        const activeWorker = await getWorker(generation);
        activeWorker?.postMessage({
            image: imageData,
            model: $("model").value,
            prompt: $("prompt").value.trim() || DEFAULT_PROMPT,
            runtime: $("runtime").value,
            maxTokens: Number($("length").value),
        });
    } catch (error) {
        if (generation === workerGeneration) fail(error.message);
    }
}

async function acceptImage(file) {
    if (busy || !file) return;
    if (!IMAGE_TYPES.has(file.type)) {
        setStatus("Choose a PNG, JPEG, WebP, GIF, AVIF or BMP image.", "Unsupported file", true);
        return;
    }
    if (file.size > MAX_FILE_BYTES) {
        setStatus("Choose an image smaller than 50 MB.", "Image too large", true);
        return;
    }
    const version = ++imageVersion;
    preparingImage = true;
    updateControls();
    const url = URL.createObjectURL(file);
    try {
        const image = new Image();
        image.src = url;
        await image.decode();
        if (version !== imageVersion) return;
        const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        imageData = canvas.toDataURL("image/png");
        $("preview").src = imageData;
        $("preview").hidden = false;
        $("empty").hidden = true;
        $("output").value = "";
        $("result-info").textContent = modelName();
        $("image-info").textContent = `${file.name || "Clipboard image"} / ${image.naturalWidth} \u00d7 ${image.naturalHeight}${scale < 1 ? ` / resized to ${canvas.width} \u00d7 ${canvas.height}` : ""}${file.type === "image/gif" ? " / first frame only" : ""}`;
        setStatus("Image ready.", "Ready");
    } catch {
        if (version === imageVersion) setStatus("This image could not be decoded. Try a different file or paste a screenshot.", "Invalid image", true);
    } finally {
        URL.revokeObjectURL(url);
        if (version === imageVersion) {
            preparingImage = false;
            updateControls();
        }
    }
    if (version === imageVersion && imageData && $("auto").checked && !$("status-box").classList.contains("error")) describe();
}

document.addEventListener("paste", (event) => {
    const item = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith("image/"));
    if (!item) return;
    event.preventDefault();
    if (busy) {
        setStatus("Stop the current description before pasting another image.", "Busy");
        return;
    }
    acceptImage(item.getAsFile());
});

$("paste").onclick = async () => {
    if (busy || preparingImage) return;
    try {
        if (!navigator.clipboard?.read) throw new Error("Clipboard image access is unavailable.");
        const items = await navigator.clipboard.read();
        for (const item of items) {
            const type = item.types.find((type) => IMAGE_TYPES.has(type));
            if (type) {
                await acceptImage(await item.getType(type));
                return;
            }
        }
        setStatus("No image found in the clipboard. Copy an image or screenshot, then paste again.", "Clipboard empty");
    } catch {
        setStatus("Use Ctrl+V (Windows/Linux) or Cmd+V (Mac) to paste an image, or choose a file.", "Paste with keyboard");
        $("dropzone").focus();
    }
};
$("browse").onclick = () => $("file").click();
$("file").onchange = (event) => {
    const file = event.target.files[0];
    event.target.value = "";
    acceptImage(file);
};
["dragenter", "dragover"].forEach((name) => {
    document.addEventListener(name, (event) => {
        event.preventDefault();
        if (!busy) $("dropzone").classList.add("drag-over");
    });
});
document.addEventListener("dragleave", (event) => {
    if (!event.relatedTarget) $("dropzone").classList.remove("drag-over");
});
document.addEventListener("drop", (event) => {
    event.preventDefault();
    $("dropzone").classList.remove("drag-over");
    if (busy) {
        setStatus("Stop the current description before dropping another image.", "Busy");
        return;
    }
    acceptImage(event.dataTransfer?.files[0]);
});
$("describe").onclick = describe;
$("model").onchange = () => {
    disposeWorker();
    const isQwen = $("model").value === "qwen";
    $("runtime").querySelector('[value="wasm"]').disabled = isQwen;
    if (isQwen && $("runtime").value === "wasm") $("runtime").value = "auto";
    $("output").value = "";
    $("result-info").textContent = modelName();
    $("model-info").textContent = isQwen
        ? "693 MB download including runtime. Requires WebGPU with shader-f16. No larger-weight fallback."
        : "About 550 MiB on GPU or 250 MiB on CPU. CPU mode is slower.";
    setStatus(`${modelName()} selected. Click Describe image when ready.`, "Model selected");
    updateControls();
};
$("stop").onclick = () => {
    disposeWorker();
    finish();
    setStatus("Stopped. Any partial description is kept. The model will reload from available cache next time.", "Stopped");
};
$("clear").onclick = () => {
    imageVersion++;
    preparingImage = false;
    if (busy) disposeWorker();
    imageData = null;
    $("preview").removeAttribute("src");
    $("preview").hidden = true;
    $("empty").hidden = false;
    $("output").value = "";
    $("image-info").textContent = IMAGE_HINT;
    $("result-info").textContent = modelName();
    finish();
    setStatus("Paste an image to begin. The model loads on first use.", "Ready");
};
$("copy").onclick = async () => {
    try {
        await navigator.clipboard.writeText($("output").value);
        $("copy").textContent = "Copied!";
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => { $("copy").textContent = "Copy"; }, 1800);
    } catch {
        $("output").focus();
        $("output").select();
        setStatus("Text selected. Press Ctrl+C or Cmd+C to copy.", "Copy manually");
    }
};
window.addEventListener("pagehide", disposeWorker);
