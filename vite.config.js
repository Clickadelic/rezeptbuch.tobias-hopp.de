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
            '@components': path.resolve(__dirname, 'resources/js/Components'),
            '@images': path.resolve(__dirname, 'resources/images'),
            '@pages': path.resolve(__dirname, 'resources/js/Pages'),
            '@layouts': path.resolve(__dirname, 'resources/js/Layouts'),
            '@hooks': path.resolve(__dirname, 'resources/js/hooks'),
            '@utils': path.resolve(__dirname, 'resources/js/utils'),
            '@lib': path.resolve(__dirname, 'resources/js/lib'),
        },
    },
});
