import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout>
                <h1>Rezeptbuch Startseite</h1>
            </FullWidthLayout>
        </>
    );
}
