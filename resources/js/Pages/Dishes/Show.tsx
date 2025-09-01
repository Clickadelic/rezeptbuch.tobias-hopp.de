import { Head } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { MdOutlineStarPurple500 } from 'react-icons/md';

import { Dish } from '@/types/Dish';
import { assetPath } from '@/lib/utils';

interface ShowDishProps {
    dish: Dish;
}

/**
 * Displays a single dish with its details.
 *
 * @param {ShowDishProps} props
 * @prop {Dish} dish - The dish to display.
 *
 * @returns {JSX.Element}
 */
export default function Show({ dish }: ShowDishProps) {
    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <h3 className="text-xl mb-3 leading-snug">{dish.name}</h3>
                <div className="flex flex-row mb-4">
                    <div className="flex flex-row pt-[1px]">
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    </div>
                    <div className="flex flex-row space-x-2 ml-2">
                        <p className="text-slate-500">User Id: {dish.user_id}</p>
                    </div>
                </div>
                <div className="flex flex-row my-3">
                    <p>{dish.description}</p>
                </div>
                <img
                    src={assetPath('dishes', dish.image)}
                    alt={dish.name}
                    title={dish.name}
                    className="rounded-xl aspect-video border border-slate-200"
                />
            </SidebarLeftLayout>
        </>
    );
}
