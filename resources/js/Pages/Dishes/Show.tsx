import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import { Dish } from '@/types/Dish';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineEdit } from 'react-icons/md';
import { GoClock, GoTrash, GoPlus } from 'react-icons/go';
import { FiMinus } from "react-icons/fi";
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

    const [count, setCount] = useState<number>(1);
    const deleteDish = (e: React.MouseEvent) => {
            e.stopPropagation(); // verhindert, dass der Link-Klick ausgelöst wird
            if (confirm('Willst du dieses Gericht wirklich löschen?')) {
                router.delete(route('dishes.destroy', dish.id));
            }
        };
    return (
        <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-start gap-5">
                    <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-full md:w-[48rem] overflow-hidden rounded-xl">
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
                                <div className="relative w-full flex flex-row justify-between items-center">
                                    <div>
                                        <h4 className="font-medium text-sm font-oswald text-slate-800 dark:text-slate-200">{dish.punchline}</h4>
                                        <h3 className="font-medium text-2xl mb-3">{dish.name}</h3>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger
                                            className="absolute top-2 right-2 text-slate-400 dark:text-slate-200 p-1 hover:text-slate-500 hover:cursor-pointer shadow-transparent z-20"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <HiOutlineDotsVertical className="size-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <Link
                                                    href={route('dishes.edit', dish.id)}
                                                    className="flex flex-row items-center"
                                                    onClick={(e) => e.stopPropagation()} // Link soll nur Edit öffnen
                                                >
                                                    <MdOutlineEdit className="size-5 mr-2" />
                                                    Bearbeiten
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-red-500 flex items-center"
                                                onClick={deleteDish} // Delete mit stopPropagation
                                            >
                                                <GoTrash className="size-5 mr-2" />
                                                Löschen
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <p className="text-sm text-slate-800 dark:text-slate-200">{dish.description}</p>
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
                                    <p className="ml-1 lowercase">{dish.difficulty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center mb-3">
                        <h4 className="font-medium text-lg">Zutaten für</h4>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={() => setCount(prev => Math.max(1, prev - 1))}
                                className="py-5 hover:cursor-pointer shadow-none"
                                variant="primaryOutline"
                                size="sm"
                                disabled={count === 1}
                                title="Personen reduzieren"
                                aria-label="Personen reduzieren"
                            >
                                <FiMinus />
                            </Button>
                            <div className="bg-slate-100 cursor-default dark:bg-slate-700 text-slate-800 dark:text-slate-200 py-2 px-3 w-[7.5rem] rounded-lg border border-slate-200 dark:border-slate-700">
                                {count}
                                {count > 1 ? ' Personen' : ' Person'}
                            </div>
                            <Button
                                onClick={() => setCount(prev => prev + 1)}
                                className="py-5 hover:cursor-pointer shadow-none"
                                variant="primaryOutline"
                                size="sm"
                                title="Personen erhöhen"
                                aria-label="Personen erhöhen"
                            >
                                <GoPlus />
                            </Button>
                        </div>
                    </div>
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
                                            {(ingredient.pivot?.quantity ?? 0) as number * count}
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
