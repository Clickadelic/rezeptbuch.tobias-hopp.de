import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import ContextMenu from '@/components/reusables/ContextMenu';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { GoClock, GoPlus, GoStar, GoZoomIn } from 'react-icons/go';
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
import { SharedPageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Avatar from '@/components/reusables/Avatar';
import Modal from '@/components/Modal';
import { IoEye } from 'react-icons/io5';
import Carousel from '@/components/reusables/Carousel/Index';

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
    const { user } = usePage<SharedPageProps>().props.auth;
    const { related } = usePage<SharedPageProps>().props;
    const [count, setCount] = useState<number>(1);
    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    
    const toggleImageModal = () => {
        setIsImageModalOpen(!isImageModalOpen);
    }

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
                    <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-full md:w-[72rem] overflow-hidden rounded-xl">
                        {(() => {
                            const hero =
                                (recipe as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                                (recipe as any)?.media?.[0];
                            return hero ? (
                                <div className="flex border border-transparent rounded-xl overflow-hidden hover:border-primary">
                                    <img
                                        src={hero.url ?? `/storage/${hero.path}`}
                                        alt={recipe.name}
                                        className="aspect-video size-full object-cover"
                                    />
                                    <button className="absolute top-0 left-0 right-0 bottom-0 w-full h-full transition ease-in-out z-20 hover:cursor-pointer text-white hover:text-gray-400 dark:hover:text-gray-300" onClick={toggleImageModal}>
                                        <GoZoomIn className="size-5 absolute bottom-7 right-7" />
                                    </button>
                                </div>
                                
                            ) : (
                                <BiDish className="z-20 size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
                            );
                        })()}
                        
                        <div className="absolute size-full bg-gray-100 dark:bg-gray-700 rounded-xl z-10 cursor-default"></div>
                    </div>
                    <div className="w-full flex flex-col justify-between gap-5">
                        <div className="flex flex-col items-start gap-2">
                            <div className="w-full flex flex-col">
                                <div className="relative w-full flex flex-row justify-between items-center">
                                    <div>
                                        <h4 className="font-medium text-sm  text-gray-400 dark:text-gray-600">
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
                        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center md:justify-start gap-5">
                            <div className="w-28 gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                                {iconMap[recipe.category?.slug ?? ""] ?? (
                                    <LuUtensilsCrossed className="size-5 text-primary" />
                                )}
                                <p className=" text-gray-600 dark:text-gray-200 text-sm">{recipe.category?.name}</p>
                            </div>
                            <div className="w-28 gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                                <VscSymbolEvent className="size-5 text-primary" />
                                <p className=" text-gray-600 dark:text-gray-200 text-sm">{recipe.difficulty}</p>
                            </div>
                            <div className="w-28 gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                                <GoClock className="size-5 text-primary" />
                                <p className=" text-gray-600 dark:text-gray-200 text-sm">{recipe.preparation_time} Minuten</p>
                            </div>
                            <div className="w-28 gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                                <GoStar className="size-5 text-primary" />
                                <p className=" text-gray-600 dark:text-gray-200 text-sm">{recipe.rating} Sterne</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1">
                    {recipe.ingredients && recipe.ingredients.length > 0 && (
                        <>
                            <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center mb-5">
                                <h4 className="font-medium  text-lg">Zutaten für</h4>
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
                            
                        </>
                    )}
                    {recipe.preparation_instructions && (
                        <div className="flex">
                            <div className="w-full flex flex-col gap-2">
                                <h4 className="font-medium text-lg">Zubereitung</h4>
                                <div className="flex flex-col gap-2">
                                    <p>{recipe.preparation_instructions}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-5 mb-12">
                    <h4 className="text-xl">Weiteres aus der Kategorie: {recipe.category?.name}</h4>
                    <Carousel carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800" itemClassName="card" recipes={related as Recipe[]} />
                </div>
                <Modal show={isImageModalOpen} closeable={true} maxWidth="4xl" onClose={() => setIsImageModalOpen(false)}>
                    <div className="p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
                        {recipe.media?.map((m) => (
                            <div key={m.id}>
                                <img
                                    src={m.url ?? `/storage/${m.path}`}
                                    alt={recipe.name}
                                    className="inset size-full rounded aspect-video object-cover mb-4"
                                />
                                <h5 className="font-medium text-gray-600 dark:text-gray-400">{recipe.punchline}</h5>
                                <h4 className="font-medium text-gray-800 dark:text-gray-200">{recipe.name}</h4>
                            </div>
                        ))}
                    </div>
                </Modal>
            </div>
        </SidebarLeftLayout>
    );
}
