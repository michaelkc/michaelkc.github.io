const input = document.getElementById("input");
const output = document.getElementById("output");
const copyOutputBtn = document.getElementById("copy-output-btn");
const processingStatus = document.getElementById("processing-status");
const outputPreview = document.getElementById("output-preview");
const outputLengthStatus = document.getElementById("output-length-status");
const outputFormatSelect = document.getElementById("output-format");
const useUpngSelect = document.getElementById("use-upng");
const upngAggressivenessSelect = document.getElementById("upng-aggressiveness");

let rawDataUrl = "";

function mediaTypeOf(dataUrl) {
    const match = /^data:([^;,]+)[;,]/.exec(dataUrl);
    return match ? match[1] : "image/png";
}

function clankerMarkdown(dataUrl) {
    const mediaType = mediaTypeOf(dataUrl);
    const kind = mediaType === "image/png" ? "PNG" : mediaType;
    const article = /^[aeiou]/.test(kind) ? "an" : "a";
    return [
        "The user pasted an image from their clipboard. It is " + article + " " + kind + " file,",
        "Base64-encoded as a data URL. The data URL is the only line between the fences;",
        "use it verbatim wherever this image is needed.",
        "",
        "```dataurl",
        dataUrl,
        "```"
    ].join("\n");
}

function renderOutput() {
    output.value = outputFormatSelect.value === "clanker" && rawDataUrl
        ? clankerMarkdown(rawDataUrl)
        : rawDataUrl;
}

function updateOutputState(originalLengthBeforeUpng) {
    renderOutput();

    copyOutputBtn.disabled = rawDataUrl.length === 0;
    if (rawDataUrl.length > 0) {
        outputPreview.src = rawDataUrl;
        outputPreview.hidden = false;
    } else {
        outputPreview.removeAttribute("src");
        outputPreview.hidden = true;
    }

    if (typeof originalLengthBeforeUpng === "number") {
        outputLengthStatus.textContent = `Data URL length: ${rawDataUrl.length} (reduced from ${originalLengthBeforeUpng})`;
        return;
    }
    outputLengthStatus.textContent = `Data URL length: ${rawDataUrl.length}`;
}

function updateUpngControlsState() {
    upngAggressivenessSelect.disabled = useUpngSelect.value !== "yes";
}

function setProcessing(isProcessing) {
    processingStatus.setAttribute("aria-busy", String(isProcessing));
    processingStatus.textContent = isProcessing ? "Processing..." : "Ready";
}

function paletteSizeForAggressiveness(level) {
    if (level === "low") {
        return 256;
    }

    if (level === "high") {
        return 64;
    }

    return 128;
}

function uint8ArrayToBase64(uint8Array) {
    const chunkSize = 32768;
    let binary = "";

    for (let i = 0; i < uint8Array.length; i += chunkSize) {
        const chunk = uint8Array.subarray(i, i + chunkSize);
        binary += String.fromCharCode(...chunk);
    }

    return btoa(binary);
}

function updateOutputFromOriginalFile(file, originalLengthBeforeUpng) {
    const dataUrlReader = new FileReader();
    dataUrlReader.onload = () => {
        rawDataUrl = String(dataUrlReader.result || "");
        updateOutputState(originalLengthBeforeUpng);
        setProcessing(false);
    };
    dataUrlReader.onerror = () => {
        setProcessing(false);
        alert("Image read failed.");
    };
    dataUrlReader.readAsDataURL(file);
}

function optimizeWithUpngAndEncode(file) {
    const dataUrlReader = new FileReader();
    dataUrlReader.onload = () => {
        const originalDataUrl = String(dataUrlReader.result || "");
        const originalLength = originalDataUrl.length;
        const image = new Image();
        image.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const paletteSize = paletteSizeForAggressiveness(upngAggressivenessSelect.value);
                if (typeof pako === "undefined") {
                    throw new Error("pako is not loaded");
                }
                const encodedPng = UPNG.encode([imageData.data.buffer], canvas.width, canvas.height, paletteSize);
                const base64 = uint8ArrayToBase64(new Uint8Array(encodedPng));
                rawDataUrl = `data:image/png;base64,${base64}`;
                updateOutputState(originalLength);
                setProcessing(false);
            } catch (error) {
                alert("UPNG optimization failed. Using original image.");
                updateOutputFromOriginalFile(file, originalLength);
            }
        };
        image.onerror = () => {
            alert("Image decode failed. Using original image.");
            updateOutputFromOriginalFile(file, originalLength);
        };
        image.src = originalDataUrl;
    };
    dataUrlReader.onerror = () => {
        setProcessing(false);
        alert("Image read failed.");
    };
    dataUrlReader.readAsDataURL(file);
}

input.addEventListener("paste", (event) => {
    const items = event.clipboardData?.items || [];
    for (const item of items) {
        if (!item.type.startsWith("image/")) {
            continue;
        }

        event.preventDefault();
        setProcessing(true);
        const file = item.getAsFile();
        if (!file) {
            setProcessing(false);
            return;
        }

        const shouldUseUpng = useUpngSelect.value === "yes";
        if (shouldUseUpng) {
            optimizeWithUpngAndEncode(file);
        } else {
            updateOutputFromOriginalFile(file);
        }
        return;
    }
});

copyOutputBtn.addEventListener("click", async () => {
    if (!output.value) {
        return;
    }

    try {
        await navigator.clipboard.writeText(output.value);
        const originalText = copyOutputBtn.textContent;
        copyOutputBtn.textContent = "Copied!";
        setTimeout(() => {
            copyOutputBtn.textContent = originalText;
        }, 2000);
    } catch (error) {
        alert("Failed to copy to clipboard");
    }
});

useUpngSelect.addEventListener("change", updateUpngControlsState);
outputFormatSelect.addEventListener("change", renderOutput);

updateUpngControlsState();
updateOutputState();
setProcessing(false);
