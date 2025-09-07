import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import DishesSidebar from '@/components/sidebars/DishesSidebar';
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
    const { ingredients } = props;
    console.log(props);
    return (
        <>
            <Head title="Gericht Details" />
            <SidebarRightLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-start gap-5">
                        <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-[48rem] overflow-hidden rounded-xl">
                            <h4 className="absolute text-slate-300 top-3 left-5 font-oswald z-20">
                                {dish.punchline}
                            </h4>
                            <h3 className="absolute text-white top-9 left-5 text-3xl font-oswald z-20">
                                {dish.name}
                            </h3>
                            {(() => {
                                const hero = (dish as any)?.media?.find((m: any) => m?.pivot?.is_primary) ?? (dish as any)?.media?.[0];
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
                                <div className="flex flex-row items-center gap-2 justify-between">
                                    <h2 className="text-lg font-medium mb-1">Beschreibung</h2>
                                    {user && (
                                        <div className="flex flex-row items-center gap-2">
                                            <Link href={route('dishes.edit', dish)}>
                                                <MdOutlineEdit className="size-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <p className=" text-slate-800">{dish.description}</p>
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
                        <div className="flex flex-row">
                            <table className="table min-w-[28rem] max-w-[48rem] text-slate-800">
                                <thead className="bg-slate-100 dark:bg-slate-700">
                                    <tr>
                                        <th className="p-3 text-left rounded-tl">Zutat</th>
                                        <th className="p-3 text-right">Menge</th>
                                        <th className="p-3 text-left rounded-tr">Einheit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dish.ingredients?.map((ingredient) => (
                                        <tr key={ingredient.id}>
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
            </SidebarRightLayout>
        </>
    );
}
