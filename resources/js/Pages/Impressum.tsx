import TwoSidebarsLayout from '@/Layouts/TwoSidebarsLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';
import RightSidebar from '@/Components/reusables/sidebars/RightSidebar';

export default function Impressum({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Impressum" />
            <TwoSidebarsLayout title="Impressum" leftSidebar={<LeftSidebar />} rightSidebar={<RightSidebar />}>
                Diese Subdomain wird betrieben von Tobias Hopp.
                
            </TwoSidebarsLayout>
        </>
    );
}