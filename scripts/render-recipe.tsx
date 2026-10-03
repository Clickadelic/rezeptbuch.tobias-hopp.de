import React from 'react';
import { writeFile } from 'node:fs/promises';

import { RecipePdf } from '../resources/js/components/pdf/recipe/recipe-pdf.tsx';
import { renderPdf } from './pdf/render-pdf.ts';
 
const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
    console.error('Usage: npx tsx scripts/render-recipe.tsx <input.json> <output.pdf>');
    process.exit(1);
}

const { readFile } = await import('node:fs/promises');

const recipe = JSON.parse(await readFile(inputPath, 'utf8'));

const pdf = await renderPdf(<RecipePdf recipe={recipe} />);

await writeFile(outputPath, pdf);

console.log(`PDF erstellt: ${outputPath}`);
