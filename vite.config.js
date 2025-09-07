import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'public'),
            '@': path.resolve(__dirname, './resources/js'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@images': path.resolve(__dirname, 'resources/images'),
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@hooks': path.resolve(__dirname, 'resources/js/hooks'),
            '@utils': path.resolve(__dirname, 'resources/js/utils'),
            '@lib': path.resolve(__dirname, 'resources/js/lib'),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy/dist/react'),
        },
    },
});
