import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

import { GoClock } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { GoTrash } from 'react-icons/go';
import { BiDish } from "react-icons/bi";
import SaveToFavoritesButton from '@/Components/reusables/SaveToFavoritesButton';
import Dish from '@/types/Dish';

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const user = usePage().props.auth?.user;

    return (
        <Link href={route('dishes.show', dish.id)} className="group w-64 mb-3">
            <Card className="relative overflow-hidden">
                {/* Bild mit Scale Transition */}
                <CardHeader
                className="flex flex-col items-center justify-center h-72 overflow-hidden p-0 rounded-xl 
                            bg-slate-100 text-slate-700 
                            border border-transparent transition-colors duration-300 
                            group-hover:bg-slate-200 group-hover:border-emerald-700"
                >
                    <BiDish className="size-8" />
                    <SaveToFavoritesButton className="absolute top-3 left-3" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="absolute top-3 right-2 text-white border border-white p-1 rounded-full hover:text-emerald-700 hover:cursor-pointer hover:border-emerald-700">
                            <HiOutlineDotsVertical className="size-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link
                                    href={route('dishes.edit', dish.id)}
                                    className="flex flex-row"
                                >
                                    <MdOutlineEdit className="size-5 mr-2" />
                                    Bearbeiten
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <GoTrash className="size-5 mr-2" />
                                Löschen
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>


                {/* Titel */}
                <CardContent className="p-2 block min-h-18 text-xl text-slate-700 font-medium text-yellowtail 
                                transition-colors duration-500 ease-in-out group-hover:text-emerald-700 
                                line-clamp-2 leading-snug">
                    {dish.name}
                </CardContent>




                {/* Footer */}
                <CardFooter className="flex flex-row items-center justify-start space-x-2">
                    <div>
                        <GoClock className="inline-flex size-4 mr-1 text-emerald-700" />
                        <span className="text-sm text-muted-foreground">10 Min.</span>
                    </div>
                    <div>
                        <VscSymbolEvent className="inline-flex size-4 mr-1 text-emerald-700" />
                        <span className="text-sm text-muted-foreground">einfach</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
