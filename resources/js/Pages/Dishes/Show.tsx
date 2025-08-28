import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';

import { Button } from '@/Components/ui/button';

export default function Show({ dish }: any) {
    const deleteDish = () => {
        if (confirm('Wirklich löschen?')) {
            // @ts-ignore
            Inertia.delete(route('dishes.destroy', dish.id));
        }
    };
    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <h3 className="text-xl mb-3 leading-snug">{dish.name}</h3>
                <img src="https://img.chefkoch-cdn.de/rezepte/2172551348653384/bilder/505366/crop-640x360/haehnchen-chorizo-pfanne.jpg" className="rounded-xl" alt={dish.name} />
            </SidebarLeftLayout>
        </>
    );
}
