
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import ContextMenu from '@/components/reusables/ContextMenu';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { GoClock, GoPlus, GoStar } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { LuUtensilsCrossed } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { BiDish } from 'react-icons/bi';
import { GiCrystalBars } from "react-icons/gi";
import { VscSymbolEvent } from 'react-icons/vsc';
import { Recipe } from '@/types/Recipe';

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
    const [count, setCount] = useState<number>(1);
    const iconMap: Record<string, JSX.Element> = {
        vorspeise: <TbSalad className="size-5 text-primary" />,
        hauptgericht: <PiCookingPot className="size-5 text-primary" />,
        nachtisch: <RiCake3Line className="size-5 text-primary" />,
        cocktail: <LiaCocktailSolid className="size-5 text-primary" />,
        snack: <GiCrystalBars className="size-5 text-primary" />,
        backen: <GiCakeSlice className="size-5 text-primary" />,
    };
    return (
        <SidebarLeftLayout title="Rezeptdetails" sidebar={<MainSidebar />}>
            <div className="flex flex-col gap-5">
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
                    <div className="w-full flex flex-col justify-between gap-5">
                        <div className="flex flex-col items-start gap-2">
                            <div className="w-full flex flex-col">
                                <div className="relative w-full flex flex-row justify-between items-center">
                                    <div>
                                        <h4 className="font-medium text-sm font-oswald text-gray-400 dark:text-gray-600">
                                            {recipe.punchline}
                                        </h4>
                                        <h3 className="font-medium text-2xl mb-3">{recipe.name}</h3>
                                    </div>
                                    <ContextMenu recipe={recipe} />
                                </div>
                                <p className="mb-3 text-gray-800 dark:text-gray-200">
                                    {recipe.description}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-start gap-5">
                            <div className="w-32 cursor-default flex flex-col gap-3 rounded-lg border border-gray-200 text-gray-600 justfiy-center items-center p-4">
                                {iconMap[recipe.category?.slug ?? ""] ?? (
                                    <LuUtensilsCrossed className="size-5 text-primary" />
                                )}
                                <p className="font-oswald text-gray-600 dark:text-gray-200">{recipe.category?.name}</p>
                            </div>
                            <div className="w-32 cursor-default flex flex-col gap-3 rounded-lg border border-gray-200 text-gray-600 justfiy-center items-center p-4">
                                <VscSymbolEvent className="size-5 text-primary" />
                                <p className="font-oswald text-gray-600 dark:text-gray-200">{recipe.difficulty}</p>
                            </div>
                            <div className="w-32 cursor-default flex flex-col gap-3 rounded-lg border border-gray-200 text-gray-600 justfiy-center items-center p-4">
                                <GoClock className="size-5 text-primary" />
                                <p className="font-oswald text-gray-600 dark:text-gray-200">{recipe.preparation_time} Minuten</p>
                            </div>
                            <div className="w-32 cursor-default flex flex-col gap-3 rounded-lg border border-gray-200 text-gray-600 justfiy-center items-center p-4">
                                <GoStar className="size-5 text-primary" />
                                <p className="font-oswald text-gray-600 dark:text-gray-200">{recipe.rating} Sterne</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className="my-5" />
                <div className="w-full flex flex-col gap-1">
                    {recipe.ingredients?.length !== 0 && (
                        <>
                            <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center mb-5">
                                <h4 className="font-medium font-oswald text-lg">Zutaten für</h4>
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
                            <hr className="my-5" />
                        </>
                    )}
                    {recipe.preparation_instructions && (
                        <div className="flex">
                            <div className="w-full flex flex-col gap-2">
                                <h4 className="font-medium font-oswald text-lg mt-4">Zubereitung</h4>
                                <div className="flex flex-col gap-2">
                                    <p>{recipe.preparation_instructions}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </SidebarLeftLayout>
    );
}
