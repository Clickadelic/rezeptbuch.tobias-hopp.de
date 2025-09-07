import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import MainSidebar from '@/components/sidebars/MainSidebar';

export default function CocktailsIndex({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Cocktails" />
            <SidebarRightLayout title="Cocktails" sidebar={<MainSidebar />}>
                <div>Cocktails Content</div>
            </SidebarRightLayout>
        </>
    );
}
