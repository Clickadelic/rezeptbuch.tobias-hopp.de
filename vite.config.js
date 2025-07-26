import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@pages': path.resolve(__dirname, 'resources/js/Pages'),
            '@images': path.resolve(__dirname, 'resources/images'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@lib': path.resolve(__dirname, 'resources/js/lib'),
            '@types': path.resolve(__dirname, 'resources/js/types'),
        },
    },
});
