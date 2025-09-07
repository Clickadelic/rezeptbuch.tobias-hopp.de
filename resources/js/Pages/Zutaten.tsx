import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import LeftSidebar from '@/components/sidebars/LeftSidebar';
import RightSidebar from '@/components/sidebars/RightSidebar';

export default function Zutaten({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Zutaten" />
            <NoSidebarsLayout title="Zutaten">
                Liste und Philosophy bezüglich Zutaten.
            </NoSidebarsLayout>
        </>
    );
}
