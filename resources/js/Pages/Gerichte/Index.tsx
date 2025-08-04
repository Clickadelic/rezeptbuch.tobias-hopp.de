import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';

export interface Dish {
    id: number;
    name: string;
    description?: string;
    // Füge weitere Felder hinzu, die in deiner DB-Tabelle existieren
}

export default function Gerichte({
    auth
}: PageProps<{ auth: { user: any } }>) {
    const { dishes } = usePage().props;
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<LeftSidebar />}>
                <ul>
                    {dishes.map((dish) => (
                        <li key={dish.id}>
                            {dish.name} – {dish.description}
                        </li>
                    ))}
                </ul>
            </SidebarLeftLayout>
        </>
    );
}
