import { router, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { BiDish } from 'react-icons/bi';

import { Dish } from '@/types/Dish';
import { assetPath } from '@/lib/utils';

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const user = usePage().props.auth?.user;

    // TODO: Implement User RoleGate for Action buttons
    const deleteDish = (e: React.MouseEvent) => {
        e.stopPropagation(); // verhindert, dass der Link-Klick ausgelöst wird
        if (confirm('Willst du dieses Gericht wirklich löschen?')) {
            router.delete(route('dishes.destroy', dish.id));
        }
    };

    return (
        <li className="group w-full max-w-96 mb-5">
            <Link href={route('dishes.show', dish.slug)} className="block" title={dish.name}>
                <Card className="relative overflow-hidden">
                    <CardHeader
                        className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                    bg-slate-100 dark:bg-slate-700 text-slate-400 
                                    border border-transparent transition-colors duration-300 
                                    group-hover:bg-slate-200 group-hover:border-primary shadow-transparent hover:shadow-primary"
                    >
                        {/* Hero image */}
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
                                <BiDish className="size-10" />
                            );
                        })()}

                        {user && (
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="absolute top-2 right-2 text-slate-400 dark:text-slate-200 p-1 hover:text-slate-300 hover:cursor-pointer shadow-transparent z-20"
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
                        )}
                    </CardHeader>

                    {/* Titel */}
                    <CardContent className="p-2 block text-lg font-medium transition-colors duration-500 ease-in-out group-hover:text-primary leading-snug">
                        <h4 className="text-slate-500 dark:text-slate-400 text-base font-oswald line-clamp-1">
                            {dish.punchline}
                        </h4>
                        <h3 className="group-hover:text-primary line-clamp-2 text-slate-800 dark:text-slate-200 min-h-[calc(3rem+2px)]">
                            {dish.name}
                        </h3>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex flex-row items-center justify-between space-x-2">
                        <div>
                            <GoClock className="inline-flex size-4 mr-1 text-primary" />
                            <span className="text-sm text-muted-foreground">
                                {dish.preparation_time} Min.
                            </span>
                        </div>
                        <div>
                            <VscSymbolEvent className="inline-flex size-4 mr-1 text-primary" />
                            <span className="text-sm text-muted-foreground lowercase">{dish.difficulty}</span>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </li>
    );
}
