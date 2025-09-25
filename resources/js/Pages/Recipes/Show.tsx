import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import RecipeSidebar from '@/components/sidebars/MainSidebar';

import { Recipe } from '@/types/Recipe';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

import { MdOutlineEdit } from 'react-icons/md';
import { GoClock, GoTrash, GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ShowRecipeProps {
    recipe: Recipe;
}

/**
 * Displays a single recipe with its details.
 *
 * @param {ShowRecipeProps} props
 * @prop {Recipe} recipe - The recipe to display.
 *
 * @returns {JSX.Element}
 */
export default function Show({ recipe }: ShowRecipeProps) {
    const user = usePage().props.auth?.user;
    const [count, setCount] = useState<number>(1);
    const deleteRecipe = (e: React.MouseEvent) => {
        e.stopPropagation(); // verhindert, dass der Link-Klick ausgelöst wird
        if (confirm('Willst du dieses Rezept wirklich löschen?')) {
            router.delete(route('recipes.destroy', recipe.id));
        }
    };
    return (
        <SidebarLeftLayout title="Rezeptdetails" sidebar={<RecipeSidebar />}>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-start gap-5">
                    <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-full md:w-[48rem] overflow-hidden rounded-xl">
                        {(() => {
                            const hero =
                                (recipe as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                                (recipe as any)?.media?.[0];
                            return hero ? (
                                <img
                                    src={hero.url ?? `/storage/${hero.path}`}
                                    alt={recipe.name}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            ) : (
                                <BiDish className="text-gray-400 size-8" />
                            );
                        })()}
                        <div className="absolute size-full bg-gray-400/10 rounded-xl z-10 cursor-default"></div>
                    </div>
                    <div className="w-full flex flex-col justify-between gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <div className="w-full flex flex-col">
                                <div className="relative w-full flex flex-row justify-between items-center">
                                    <div>
                                        <h4 className="font-medium text-sm font-oswald text-gray-800 dark:text-gray-200">
                                            {recipe.punchline}
                                        </h4>
                                        <h3 className="font-medium text-2xl mb-3">{recipe.name}</h3>
                                    </div>
                                    {user && (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger
                                                className="absolute top-2 right-2 text-gray-400 dark:text-gray-200 p-1 hover:text-gray-500 hover:bg-gray/30 dark:hover:bg-white/10 hover:cursor-pointer shadow-transparent rounded-full z-20"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <HiOutlineDotsVertical className="size-4" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Link
                                                        href={route('recipes.edit', recipe.id)}
                                                        className="flex flex-row items-center"
                                                        onClick={(e) => e.stopPropagation()} // Link soll nur Edit öffnen
                                                    >
                                                        <MdOutlineEdit className="size-5 mr-2" />
                                                        Bearbeiten
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-500 flex items-center"
                                                    onClick={deleteRecipe} // Delete mit stopPropagation
                                                >
                                                    <GoTrash className="size-5 mr-2" />
                                                    Löschen
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )}
                                </div>
                                <p className="text-sm text-gray-800 dark:text-gray-200">
                                    {recipe.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-1">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">Zubereitungszeit</h4>
                                <div className="flex flex-row">
                                    <GoClock className="mt-1 size-4 text-primary" />
                                    <p className="ml-1">{recipe.preparation_time} Minuten</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">Schwierigkeitsgrad</h4>
                                <div className="flex flex-row">
                                    <VscSymbolEvent className="mt-1 size-4 text-primary" />
                                    <p className="ml-1 lowercase">{recipe.difficulty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center mb-3">
                        <h4 className="font-medium text-lg">Zutaten für</h4>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                                className="py-5 hover:cursor-pointer shadow-none"
                                variant="primaryOutline"
                                size="sm"
                                disabled={count === 1}
                                title="Personen reduzieren"
                                aria-label="Personen reduzieren"
                            >
                                <FiMinus />
                            </Button>
                            <div className="bg-gray-100 cursor-default dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-3 w-[7.5rem] rounded-lg border border-gray-200 dark:border-gray-700">
                                {count}
                                {count > 1 ? ' Personen' : ' Person'}
                            </div>
                            <Button
                                onClick={() => setCount((prev) => prev + 1)}
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
                        <table className="table w-full text-gray-800">
                            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="p-3 w-full text-left rounded-tl-lg">Zutat</th>
                                    <th className="p-3 text-right">Menge</th>
                                    <th className="p-3 text-right rounded-tr-lg">Einheit</th>
                                </tr>
                            </thead>
                            <tbody className="dark:text-gray-200">
                                {recipe.ingredients?.map((ingredient) => (
                                    <tr
                                        key={ingredient.id}
                                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <td className="p-3">{ingredient.name}</td>
                                        <td className="p-3 text-right">
                                            {((ingredient.pivot?.quantity ?? 0) as number) * count}
                                        </td>
                                        <td className="p-3 text-right">{ingredient.pivot?.unit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex">
                        <div className="w-full flex flex-col gap-2">
                            <h4 className="font-medium text-lg mt-4">Zubereitung</h4>
                            <div className="flex flex-col gap-2">
                                <p>{recipe.preparation_instructions}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="asd">
                        {recipe.media?.length && (
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium text-lg mt-4">Bilder</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {recipe.media?.map((media) => (
                                        <div key={media.id}>
                                            <img
                                                src={media.url}
                                                alt={media.name}
                                                className="w-full max-h-64 rounded-lg object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SidebarLeftLayout>
    );
}
