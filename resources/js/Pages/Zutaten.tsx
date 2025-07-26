import ThreeColumnLayout from '@/layouts/ThreeColumnLayout';
import { Head } from '@inertiajs/react';

export default function Zutaten() {
    return (
        <ThreeColumnLayout>
            <Head title="Zutaten" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">Zutaten</h2>
                <p>Zutaten Inhalt.</p>
            </div>
        </ThreeColumnLayout>
    );
}