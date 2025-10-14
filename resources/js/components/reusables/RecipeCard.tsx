import { Link } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { BiDish } from 'react-icons/bi';
import { Skeleton } from '@/components/ui/skeleton';
import { Recipe } from '@/types/Recipe';

// Icons für Kategorien
import { LuUtensilsCrossed } from 'react-icons/lu';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoHeart } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import ContextMenu from '@/components/reusables/ContextMenu';
import { cn } from '@/lib/utils';
import { FaHeart } from 'react-icons/fa6';

interface RecipeCardProps {
    recipe: Recipe;
    className?: string;
}

/**
 * Displays a single recipe card.
 *
 * @param {RecipeCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 */
export default function RecipeCard({ recipe, className }: RecipeCardProps) {
    /**
     * Kategorie -> Icon Mapping
     */
    const iconMap: Record<string, JSX.Element> = {
        vorspeise: <TbSalad className="inline-flex size-4 mr-1 text-primary" />,
        hauptgericht: <PiCookingPot className="inline-flex size-4 mr-1 text-primary" />,
        nachtisch: <RiCake3Line className="inline-flex size-4 mr-1 text-primary" />,
        cocktail: <LiaCocktailSolid className="inline-flex size-4 mr-1 text-primary" />,
        snack: <GiCrystalBars className="inline-flex size-4 mr-1 text-primary" />,
        backen: <GiCakeSlice className="inline-flex size-4 mr-1 text-primary" />,
    };

    return (
        <li className={cn('group max-w-96 mb-5', className)}>
            <Link href={route('recipes.show', recipe.slug)} className="block" title={recipe.name}>
                <Card className="relative overflow-hidden">
                    <CardHeader
                        className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                    bg-gray-100 dark:bg-gray-700 text-gray-400 group-hover:text-primary 
                                    border border-transparent transition-colors duration-300 
                                    group-hover:bg-gray-200 dark:group-hover:bg-gray-700 group-hover:border-primary shadow-transparent hover:shadow-primary"
                    >
                        {/* {recipe.category && (
                            <div className="absolute top-2 left-2 z-20 flex items-center justify-center size-8">
                                {iconMap[recipe.category.slug ?? ''] ?? (
                                <LuUtensilsCrossed className="size-5 text-primary" />
                                )}
                            </div>
                        )} */}
                        <div className="absolute top-1 left-1 z-20 flex items-center justify-center">
                            <FavoriteButton
                                key={recipe.id}
                                recipeId={recipe.id}
                                isFavorite={recipe.is_favorite}
                            />
                        </div>
                        {/* Hero image */}
                        {(() => {
                            const hero =
                                (recipe as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                                (recipe as any)?.media?.[0];
                            return hero ? (
                                <img
                                    src={hero.url ?? `/storage/${hero.path}`}
                                    alt={recipe.name}
                                    className="absolute scale-100 transform duration-300 ease-out group-hover:scale-105 inset-0 size-full object-cover"
                                />
                            ) : (
                                <BiDish className="size-10" />
                            );
                        })()}
                    </CardHeader>

                    {/* Titel + Kategorie */}
                    <CardContent className="py-2 px-0 block text-lg font-medium transition-colors ease-in-out group-hover:text-primary leading-snug">
                        <div className="relative flex flex-row justify-between items-center gap-1">
                            <div className="w-full grow mr-8">
                                <h4 className="group-hover:text-primary duration-300 text-gray-500 dark:text-gray-400 text-sm line-clamp-1 min-h-[calc(1rem+2px)]">
                                    {recipe.punchline}
                                </h4>
                                <h3 className="group-hover:text-primary duration-300 line-clamp-2 text-gray-800 dark:text-gray-200 min-h-[calc(3rem+2px)]">
                                    {recipe.name}
                                </h3>
                            </div>
                            <ContextMenu recipe={recipe} />
                        </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex flex-row items-center justify-between space-x-2">
                        <div>
                            {recipe.category && (
                                <>
                                    {iconMap[recipe.category.slug ?? ''] ?? (
                                        <LuUtensilsCrossed className="size-4 text-primary" />
                                    )}
                                </>
                            )}
                            <span className="text-sm text-muted-foreground ">
                                {recipe.category?.name ?? 'Nicht kategorisiert'}
                            </span>
                        </div>

                        <div>
                            <GoClock className="inline-flex size-4 mr-1 text-primary" />
                            <span className="text-sm text-muted-foreground">
                                {recipe.preparation_time} Min.
                            </span>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </li>
    );
}

/**
 * Skeleton Loader für Rezepte
 */
export function RecipeCardSkeleton() {
    return (
        <li className="w-full max-w-96 mb-5">
            <Card className="relative overflow-hidden">
                <CardHeader
                    className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                bg-gray-100 dark:bg-gray-700 text-gray-400 
                                border border-transparent transition-colors duration-300 
                                group-hover:bg-gray-200 group-hover:border-primary shadow-transparent hover:shadow-primary"
                >
                    <Skeleton className="absolute inset-0 size-full object-cover" />
                </CardHeader>

                <CardContent className="p-2 block text-lg font-medium transition-colors duration-500 ease-in-out group-hover:text-primary leading-snug">
                    <h4 className="text-gray-500 dark:text-gray-400 text-base line-clamp-1">
                        <Skeleton className="w-1/2" />
                    </h4>
                    <h3 className="group-hover:text-primary line-clamp-2 text-gray-800 dark:text-gray-200 min-h-[calc(3rem+2px)]">
                        <Skeleton className="w-1/2" />
                    </h3>
                </CardContent>

                <CardFooter className="flex flex-row items-center justify-between space-x-2">
                    <div>
                        <GoClock className="inline-flex size-4 mr-1 text-primary" />
                        <Skeleton className="w-1/2" />
                    </div>
                    <div>
                        <VscSymbolEvent className="inline-flex size-4 mr-1 text-primary" />
                        <Skeleton className="w-1/2" />
                    </div>
                </CardFooter>
            </Card>
        </li>
    );
}
