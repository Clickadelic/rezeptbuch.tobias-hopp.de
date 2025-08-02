import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Frontpage({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout title="Willkommen" subtitle="Toby's Rezeptbuch">
                Startseite Cards und Content
            </FullWidthLayout>
        </>
    );
}
