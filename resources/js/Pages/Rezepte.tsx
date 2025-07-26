import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Rezepte() {
    return (
        <PublicLayout>
            <Head title="Rezepte" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">Rezepte</h2>
                <p>Rezepte Inhalt.</p>
            </div>
        </PublicLayout>
    );
}