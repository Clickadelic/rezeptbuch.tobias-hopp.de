import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" subtitle="Toby's Rezeptbuch">
                Liste mit Gerichten
            </SidebarLeftLayout>
        </>
    );
}
