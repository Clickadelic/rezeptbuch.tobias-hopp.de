import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';

import { Button } from '@/Components/ui/button';

export default function Show({ dish }:any) {
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title={dish.name} sidebar={<DishesSidebar />}>
                <p>{dish.description}</p>
                <p>{dish.rating}</p>
                <Button asChild>
                    <Link href={route('dishes.index')}>← Zurück zur Übersicht</Link>
                </Button>
            </SidebarLeftLayout>
        </>
    );
}
