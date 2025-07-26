import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

export default function Gerichte() {
    return (
        <FullWidthLayout>
            <Head title="Gerichte" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">Gerichte</h2>
                <p>Gerichte Inhalt.</p>
            </div>
        </FullWidthLayout>
    );
}