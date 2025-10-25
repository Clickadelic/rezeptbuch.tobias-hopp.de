import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import axios from 'axios';

axios.defaults.withCredentials = true; // sendet Cookies (Session)
// TODO: Nochmal nachlesen
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Prepared Service Worker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//             .register('/service-worker.js')
//             .then((reg) => console.log('Service Worker registriert:', reg))
//             .catch((err) => console.error('Service Worker Fehler:', err));
//     });
// }

const appName = import.meta.env.VITE_APP_NAME || "Toby's Rezeptbuch";

// async function bootstrap() {
//     await axios.get('/sanctum/csrf-cookie');

    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup({ el, App, props }) {
            createRoot(el).render(<App {...props} />);
        },
        progress: { color: '#047857' },
    });
// }

// bootstrap();
