import type { ReactElement } from 'react';

import { render } from 'takumi-pdf';

export async function renderPdf(node: ReactElement): Promise<Uint8Array> {
    return render(node, {
        size: 'a4',
    });
}
