import SidebarRightLayout from '@/Layouts/SidebarRightLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Cocktails" />
            <SidebarRightLayout title="Cocktails" subtitle="Toby's Rezeptbuch">
                <div>Cocktails Content</div>
            </SidebarRightLayout>
        </>
    );
}
