import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import FullWidthLayout from '@/Layouts/FullWidthLayout';
export default function Welcome({
    auth
    // TODO: remove any
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout>
                <h1>Rezeptbuch Public Startseite</h1>
            </FullWidthLayout>
        </>
    );
}
