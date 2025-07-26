import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <PublicLayout>
            <Head title="Willkommen" />
            <p>Test für die Webseite. Hallo Welt!</p>
        </PublicLayout>
    );
}
