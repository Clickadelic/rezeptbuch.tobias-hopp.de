import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

// import BentoGrid from '@/Components/reusables/BentoGrid';

export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout title="Willkommen">
                asd
                {/* <BentoGrid /> */}
            </FullWidthLayout>
        </>
    );
}
