import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Frontpage({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout title="Willkommen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-200 p-4 rounded-lg">
                        <h2 className="text-2xl mb-2">Willkommen</h2>
                        <p className="text-lg">Willkommen auf Toby's Rezeptbuch!</p>
                        <p className="text-lg">Bald gibt's mehr!</p>
                    </div>
                </div>
                
            </FullWidthLayout>
        </>
    );
}
