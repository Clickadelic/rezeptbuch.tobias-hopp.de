import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';

export default function Gerichte() {
    const { dishes, auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<LeftSidebar />}>
                <ul className="grid grid-cols-5 gap-4">
                    {dishes.map((dish) => (
                        <li key={dish.id} className="bg-white rounded shadow p-4 hover:cursor-pointer">
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                        </li>
                    ))}
                </ul>
            </SidebarLeftLayout>
        </>
    );
}
