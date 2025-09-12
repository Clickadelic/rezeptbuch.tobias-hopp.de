import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import { Dish } from '@/types/Dish';


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
    return (
        <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-start gap-5">
                    <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-full md:w-[48rem] overflow-hidden rounded-xl">
                        {/* <h4 className="absolute text-slate-300 top-3 left-5 font-oswald z-20">
                            {dish.punchline}
                        </h4>
                        <h3 className="absolute text-white top-9 left-5 text-3xl font-oswald z-20">
                            {dish.name}
                        </h3> */}
                        {(() => {
                            const hero =
                                (dish as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                                (dish as any)?.media?.[0];
                            return hero ? (
                                <img
                                    src={hero.url ?? `/storage/${hero.path}`}
                                    alt={dish.name}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            ) : (
                                <BiDish className="text-slate-400 size-8" />
                            );
                        })()}
                        <div className="absolute size-full bg-slate-400/10 rounded-xl z-10 cursor-default"></div>
                    </div>
                    <div className="w-full flex flex-col justify-between gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <div className="w-full flex flex-col">
                                <h3 className="font-medium text-sm font-oswald text-slate-500">{dish.punchline}</h3>
                                <h3 className="font-medium text-2xl mb-3">{dish.name}</h3>
                                <p className="text-sm text-slate-500">{dish.description}</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-row justify-between gap-1">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">Zubereitungszeit</h4>
                                <div className="flex flex-row">
                                    <GoClock className="mt-1 size-4 text-primary" />
                                    <p className="ml-1">{dish.preparation_time} Minuten</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">Schwierigkeitsgrad</h4>
                                <div className="flex flex-row">
                                    <VscSymbolEvent className="mt-1 size-4 text-primary" />
                                    <p className="ml-1">{dish.difficulty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <hr className="my-5" />
                    <h4 className="font-medium text-lg">Zutaten</h4>
                    <h5>1 Person</h5>
                    <div className="flex flex-row">
                        <table className="table w-full text-slate-800">
                            <thead className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-400">
                                <tr>
                                    <th className="p-3 text-left rounded-tl-lg">Zutat</th>
                                    <th className="p-3 text-right">Menge</th>
                                    <th className="p-3 text-left rounded-tr-lg">Einheit</th>
                                </tr>
                            </thead>
                            <tbody className="dark:text-slate-200">
                                {dish.ingredients?.map((ingredient) => (
                                    <tr
                                        key={ingredient.id}
                                        className="hover:bg-slate-100 dark:hover:bg-slate-700"
                                    >
                                        <td className="p-3">{ingredient.name}</td>
                                        <td className="p-3 text-right">
                                            {ingredient.pivot?.quantity}
                                        </td>
                                        <td className="p-3 text-left">
                                            {ingredient.pivot?.unit}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </SidebarLeftLayout>
    );
}
