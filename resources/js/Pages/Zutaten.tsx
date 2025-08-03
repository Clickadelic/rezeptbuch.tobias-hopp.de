import TwoSidebarsLayout from '@/Layouts/TwoSidebarsLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';
import RightSidebar from '@/Components/reusables/sidebars/RightSidebar';

export default function Zutaten({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Zutaten" />
            <TwoSidebarsLayout title="Zutaten" leftSidebar={<LeftSidebar />} rightSidebar={<RightSidebar />}>
                Liste und Philosophy bezüglich Zutaten.
            </TwoSidebarsLayout>
        </>
    );
}