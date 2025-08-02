import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout>
                <h1>Gerichte</h1>
                Liste mit Gerichten
            </SidebarLeftLayout>
        </>
    );
}
