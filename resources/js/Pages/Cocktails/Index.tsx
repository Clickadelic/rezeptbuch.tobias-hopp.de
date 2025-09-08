import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import MainSidebar from '@/components/sidebars/MainSidebar';

export default function CocktailsIndex({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Cocktails" />
            <SidebarLeftLayout title="Cocktails" sidebar={<MainSidebar />}>
                <div>Cocktails Content</div>
            </SidebarLeftLayout>
        </>
    );
}
