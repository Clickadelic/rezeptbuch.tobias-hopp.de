import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { Dish } from '@/types/Dish';
import { assetPath } from '@/lib/utils';
import { Link } from '@inertiajs/react';

import { MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineEdit } from 'react-icons/md';
import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';

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
    const { props } = usePage();
    const { user } = props.auth;

    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <h3 className="text-lg font-medium mb-1">{dish.name}</h3>
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-newsreader text-lg text-slate-500">{dish.punchline}</h4>
                    {user && (
                        <Link
                            href={route('dishes.edit', dish.id)}
                            className="flex flex-row items-center justify-center gap-2 text-slate-500 hover:text-slate-700"
                            title="Bearbeiten"
                        >
                            <MdOutlineEdit className="size-4" />
                            Bearbeiten
                        </Link>
                    )}
                </div>
                <div className="flex flex-row mb-4">
                    <div className="flex flex-row">
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                        <MdOutlineStarPurple500 className="size-5 text-yellow-500" />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-3">
                        <img
                            src={assetPath('dishes', dish.image)}
                            alt={dish.name}
                            title={dish.name}
                            className="rounded-xl aspect-video border border-slate-200 mb-3"
                        />
                    </div>
                    <div className="col-span-2">
                        <h3>Zutaten</h3>
                        <div className="flex flex-col">
                            <ul>asd</ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <h4 className="font-medium mb-1">Beschreibung</h4>
                    <p>{dish.description}</p>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-medium">Zubereitungszeit</h4>
                        <div className="flex flex-row">
                            <GoClock className="mt-1 size-4 text-emerald-600" />
                            <p className="ml-1">{dish.preparation_time} Minuten</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-medium">Schwierigkeitsgrad</h4>
                        <div className="flex flex-row">
                            <VscSymbolEvent className="mt-1 size-4 text-emerald-600" />
                            <p className="ml-1">{dish.difficulty}</p>
                        </div>
                    </div>
                </div>
            </SidebarLeftLayout>
        </>
    );
}
