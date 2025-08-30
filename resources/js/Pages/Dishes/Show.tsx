import { Head, usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { MdOutlineStarPurple500 } from "react-icons/md";

import { toHumanDate } from '@/lib/utils';

export default function Show({ dish }: any) {
    
    const { props } = usePage();

    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <h3 className="text-xl mb-3 leading-snug">{dish.name}</h3>
                <div className="flex flex-row mb-4">
                    <div className="flex flex-row">
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    </div>
                    <div className="flex flex-row space-x-2 ml-2">
                        <p className="text-slate-500">{props.auth.user.name}</p>
                        <p>{toHumanDate(dish.created_at)} Uhr</p>
                    </div>
                    
                </div>
                <img src={dish.image} alt={dish.name} title={dish.name} className="rounded-xl aspect-video border border-slate-200" />
                <div className="py-4">
                    <h3 className="text-lg font-medium">Anleitung</h3>
                    <hr className="text-slate-300 my-3" />
                    <p>{dish.description}</p>
                </div>
            </SidebarLeftLayout>
        </>
    );
}
