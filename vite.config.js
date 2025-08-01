import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/App.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
            '@images': path.resolve(__dirname, 'resources/images'),
            '@lib': path.resolve(__dirname, 'resources/js/lib'),
        },
    },
});
