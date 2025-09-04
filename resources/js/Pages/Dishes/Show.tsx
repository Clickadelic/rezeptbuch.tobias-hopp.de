import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { Dish } from '@/types/Dish';
import { assetPath } from '@/lib/utils';
import { Link } from '@inertiajs/react';

import { MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineEdit } from "react-icons/md";
import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';
import SocialShareBox from '@/Components/reusables/SocialShareBox';

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
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:gap-3 lg:gap-4">
                    <div className="col-span-2">
                        <div className="relative md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl z-0">
                            <h4 className="absolute text-slate-300 top-3 left-5 font-oswald z-20">{dish.punchline}</h4>
                            <h3 className="absolute text-white top-9 left-5 text-3xl font-oswald z-20">{dish.name}</h3>
                            <div className="absolute size-full bg-black/10 rounded-xl z-10 cursor-default"></div>
                            <img src={assetPath("dishes", dish?.image)} alt={dish.name} className="w-full aspect-video rounded-xl" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3">
                        <div>
                            <h2 className="text-lg font-medium mb-1">Beschreibung</h2>
                            <p className=" text-slate-800">{dish.description}</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:row-span-2 md:col-start-5">
                        <SocialShareBox />
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
                </div>
            </SidebarLeftLayout>
        </>
    );
}
