import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <h2 className="text-2xl my-4">Willkommen</h2>
        </PublicLayout>
    );
}
