import { Head, usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Show({ dish }: any) {
    
    const { props } = usePage();

    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <h3 className="text-xl mb-3 leading-snug">{dish.name}</h3>
                <div className="flex flex-row mb-4">
                    <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                </div>
                <img src={dish.image} alt={dish.name} title={dish.name} className="rounded-xl aspect-video border border-slate-200" />
            </SidebarLeftLayout>
        </>
    );
}
