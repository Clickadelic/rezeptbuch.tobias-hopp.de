import SidebarRightLayout from '@/Layouts/SidebarRightLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import RightSidebar from '@/Components/reusables/sidebars/RightSidebar';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Cocktails" />
            <SidebarRightLayout title="Cocktails" sidebar={<RightSidebar />}>
                <div>Cocktails Content</div>
            </SidebarRightLayout>
        </>
    );
}
