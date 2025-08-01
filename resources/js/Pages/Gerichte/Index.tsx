import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Gerichte" />
            <FullWidthLayout>
                <h1>Gerichte</h1>
            </FullWidthLayout>
        </>
    );
}
