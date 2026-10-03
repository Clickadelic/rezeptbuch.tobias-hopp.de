import init, { render } from 'takumi-pdf/no-init';
import wasmUrl from 'takumi-pdf/wasm-url';
import type { ReactElement } from 'react';

let initialized = false;

async function initializeTakumi() {
    if (initialized) {
        return;
    }

    await init({ module_or_path: wasmUrl });
    initialized = true;
}

export async function renderPdf(node: React.ReactElement): Promise<Uint8Array> {
    await initializeTakumi();

    return render(node, {
        size: 'a4',
    });
}

export async function downloadPdf(node: React.ReactElement, filename: string) {
    const pdf = await renderPdf(node);

    const blob = new Blob([pdf as BlobPart], {
        type: 'application/pdf',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
}
