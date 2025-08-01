import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Cocktails() {
    return (
        <PublicLayout>
            <Head title="Cocktails" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">Cocktails</h2>
                <p>Cocktails Inhalt.</p>
            </div>
        </PublicLayout>
    );
}