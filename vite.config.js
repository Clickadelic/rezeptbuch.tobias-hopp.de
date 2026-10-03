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
            '@': path.resolve(__dirname, 'resources/js'),
            '@images': path.resolve(__dirname, 'resources/images'),
            'ziggy-js': path.resolve(__dirname, 'vendor/tightenco/ziggy/dist/react'),
        },
    },
    server: {
        // Bind to all interfaces so the dev server is reachable from outside
        // the Docker container (host -> container port mapping), but keep
        // the HMR client connecting to localhost so the browser can reach it.
        host: '0.0.0.0',
        strictPort: true,
        hmr: {
            host: 'localhost',
        },
        watch: {
            // Bind-mounted volumes (esp. on Windows/macOS Docker Desktop) don't
            // always propagate native filesystem events, so fall back to polling.
            usePolling: true,
        },
    },
});
