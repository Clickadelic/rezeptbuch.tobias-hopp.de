import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarRightLayout from '@/Layouts/SidebarRightLayout';
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
    const { ingredients } = props;
    console.log(ingredients);
    return (
        <>
            <Head title="Gericht Details" />
            <SidebarRightLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:gap-3 lg:gap-4">
                    <div className="col-span-2">
                        <div className="relative md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl z-0 flex flex-col items-center justify-center aspect-video">
                            <h4 className="absolute text-slate-300 top-3 left-5 font-oswald z-20">
                                {dish.punchline}
                            </h4>
                            <h3 className="absolute text-white top-9 left-5 text-3xl font-oswald z-20">
                                {dish.name}
                            </h3>
                            <div className="absolute size-full bg-black/10 rounded-xl z-10 cursor-default"></div>
                            <BiDish className="text-slate-400 size-8" />
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
                                <GoClock className="mt-1 size-4 text-primary" />
                                <p className="ml-1">{dish.preparation_time} Minuten</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">Schwierigkeitsgrad</h4>
                            <div className="flex flex-row">
                                <VscSymbolEvent className="mt-1 size-4 text-primary" />
                                <p className="ml-1">{dish.difficulty}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h4 className="font-medium">Zutaten</h4>
                            <div className="flex flex-row">
                                <table className="table table-auto">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Zutat</th>
                                            <th className="text-right">Menge</th>
                                            <th className="text-left">Einheit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dish.ingredients?.map((ingredient) => (
                                            <tr key={ingredient.id}>
                                                <td>{ingredient.name}</td>
                                                <td className="text-right">{ingredient.pivot?.quantity}</td>
                                                <td>{ingredient.pivot?.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarRightLayout>
        </>
    );
}
