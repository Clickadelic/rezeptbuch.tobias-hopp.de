import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import RightSidebar from '@/components/sidebars/RightSidebar';

export default function CocktailsIndex({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Cocktails" />
            <SidebarRightLayout title="Cocktails" sidebar={<RightSidebar />}>
                <div>Cocktails Content</div>
            </SidebarRightLayout>
        </>
    );
}
