import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';
export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<LeftSidebar />}>
                Liste mit Gerichten
            </SidebarLeftLayout>
        </>
    );
}
