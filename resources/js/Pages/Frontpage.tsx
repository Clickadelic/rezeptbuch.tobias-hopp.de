import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Frontpage({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout>
                <h2 className="font-normal text-slate-800 text-2xl my-3">Startseite</h2>
            </FullWidthLayout>
        </>
    );
}
