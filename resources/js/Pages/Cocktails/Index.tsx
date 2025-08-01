import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Cocktails" />
            <FullWidthLayout>
                <h1>Cocktails</h1>
            </FullWidthLayout>
        </>
    );
}
