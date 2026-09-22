const input = document.getElementById("input");
const output = document.getElementById("output");
const copyOutputBtn = document.getElementById("copy-output-btn");
const inputStatus = document.getElementById("input-status");

function tableCellText(cell) {
    const content = cell.cloneNode(true);
    content.querySelectorAll("br").forEach((lineBreak) => {
        lineBreak.replaceWith("\n");
    });

    return content.textContent
        .replace(/\s*\n\s*/g, "<br>")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\|/g, "\\|");
}

function tableRowCells(row) {
    const cells = [];
    for (const cell of row.cells) {
        const value = tableCellText(cell);
        const columnCount = Math.max(1, cell.colSpan);
        for (let index = 0; index < columnCount; index += 1) {
            cells.push(value);
        }
    }
    return cells;
}

function convertTableToMarkdown(html) {
    const documentFragment = new DOMParser().parseFromString(html, "text/html");
    const table = documentFragment.querySelector("table");
    if (!table) {
        throw new Error("Paste an HTML table, including its <table> tag.");
    }

    const rows = Array.from(table.rows).map((row) => ({
        cells: tableRowCells(row),
        hasHeader: Array.from(row.cells).some((cell) => cell.tagName === "TH")
    }));

    if (rows.length === 0) {
        throw new Error("The table does not contain any rows.");
    }

    const headerIndex = rows.findIndex((row) => row.hasHeader);
    const firstRowIndex = headerIndex === -1 ? 0 : headerIndex;
    const header = rows[firstRowIndex].cells;
    const columnCount = Math.max(...rows.map((row) => row.cells.length), header.length);
    const formatRow = (cells) => `| ${Array.from({ length: columnCount }, (_, index) => cells[index] || "").join(" | ")} |`;
    const bodyRows = rows.filter((_, index) => index !== firstRowIndex);

    return [
        formatRow(header),
        `| ${Array.from({ length: columnCount }, () => "---").join(" | ")} |`,
        ...bodyRows.map((row) => formatRow(row.cells))
    ].join("\n");
}

function updateOutput() {
    const html = input.value.trim();
    output.value = "";
    copyOutputBtn.disabled = true;
    inputStatus.textContent = "";

    if (!html) {
        return;
    }

    try {
        output.value = convertTableToMarkdown(html);
        copyOutputBtn.disabled = false;
    } catch (error) {
        inputStatus.textContent = error.message;
    }
}

input.addEventListener("input", updateOutput);

copyOutputBtn.addEventListener("click", async () => {
    if (!output.value) {
        return;
    }

    try {
        await navigator.clipboard.writeText(output.value);
        copyOutputBtn.textContent = "Copied!";
        setTimeout(() => {
            copyOutputBtn.textContent = "Copy";
        }, 2000);
    } catch (error) {
        inputStatus.textContent = "Failed to copy the Markdown table.";
    }
});
