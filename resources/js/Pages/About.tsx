import TwoColumnLayout from '@/layouts/TwoColumnLayout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <TwoColumnLayout>
            <Head title="About" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">About</h2>
                <p>About this project.</p>
            </div>
        </TwoColumnLayout>
    );
}
