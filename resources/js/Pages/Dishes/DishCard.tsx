import { router, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';

import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { BiDish } from 'react-icons/bi';

import Dish from '@/types/Dish';

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const user = usePage().props.auth?.user;

    const deleteDish = (e: React.MouseEvent) => {
        e.stopPropagation(); // verhindert, dass der Link-Klick ausgelöst wird
        if (confirm("Willst du dieses Gericht wirklich löschen?")) {
            router.delete(route("dishes.destroy", dish.id), {
                onSuccess: () => {
                    console.log("Gericht gelöscht!");
                },
            });
        }
    };

    return (
        <li className="group w-full max-w-72 mb-5">
            <Link href={route('dishes.show', dish.id)} className="block">
                <Card className="relative overflow-hidden">
                    <CardHeader
                        className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                    bg-slate-100 text-slate-500 
                                    border border-transparent transition-colors duration-300 
                                    group-hover:bg-slate-200 group-hover:border-emerald-700 shadow-transparent hover:shadow-emerald-700"
                    >
                        <BiDish className="size-10" />
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="absolute top-2 right-2 text-slate-300 border border-slate-300 p-1 rounded-full hover:text-emerald-700 hover:cursor-pointer hover:border-emerald-700 shadow-transparent"
                                onClick={(e) => e.stopPropagation()} // verhindert Link-Navigation beim Trigger
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
                    </CardHeader>

                    {/* Titel */}
                    <CardContent
                        className="p-2 block text-lg font-medium transition-colors duration-500 ease-in-out group-hover:text-emerald-700 leading-snug"
                    >
                        <span className="text-xs text-slate-400">{dish.punchline}</span>
                        <h3 className="group-hover:text-emerald-700 line-clamp-2 text-slate-800 min-h-[calc(3rem+2px)]">
                            {dish.name}
                        </h3>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex flex-row items-center justify-between space-x-2">
                        <div>
                            <GoClock className="inline-flex size-4 mr-1 text-emerald-700" />
                            <span className="text-sm text-muted-foreground">{dish.preparation_time} Min.</span>
                        </div>
                        <div>
                            <VscSymbolEvent className="inline-flex size-4 mr-1 text-emerald-700" />
                            <span className="text-sm text-muted-foreground">{dish.difficulty}</span>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </li>
    );
}
