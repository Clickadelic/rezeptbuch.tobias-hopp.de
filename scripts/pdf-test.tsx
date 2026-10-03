import React from 'react';
import { writeFile } from 'node:fs/promises';

import { renderPdf } from './pdf/render-pdf.ts';
import { RecipePdf } from '../resources/js/components/pdf/recipe/recipe-pdf.tsx';

const pdf = await renderPdf(
    <RecipePdf
        recipe={{
            name: 'Spaghetti Carbonara',
            description:
                'Ein klassisches italienisches Pasta-Gericht mit Ei, Pecorino und Guanciale.',
            ingredients: [
                '400 g Spaghetti',
                '150 g Guanciale',
                '4 Eigelb',
                '100 g Pecorino Romano',
                'Salz',
                'Schwarzer Pfeffer',
            ],
            instructions: [
                'Spaghetti in Salzwasser al dente kochen.',
                'Guanciale in einer Pfanne knusprig braten.',
                'Eigelb und Pecorino zu einer cremigen Masse verrühren.',
                'Pasta abgießen und etwas Kochwasser auffangen.',
                'Pasta mit dem Guanciale vermischen und von der Hitze nehmen.',
                'Ei-Käse-Mischung unterheben und mit Kochwasser cremig rühren.',
                'Mit reichlich schwarzem Pfeffer servieren.',
            ],
        }}
    />,
);

await writeFile('takumi-test.pdf', pdf);

console.log('PDF erstellt.');
