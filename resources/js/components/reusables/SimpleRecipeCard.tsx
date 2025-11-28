import { Link } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';
import { GoClock } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';

import FavoriteButton from '@/components/reusables/FavoriteButton';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';
import RecipeContextMenu from '@/components/reusables/RecipeContextMenu';
import RecipeCardDifficulty from '@/components/reusables/RecipeCardDifficulty';
import RecipeCardCategory from '@/components/reusables/RecipeCardCategory';
import RecipeCardPreparationTime from '@/components/reusables/RecipeCardPreparationTime';
import RecipeCardName from '@/components/reusables/RecipeCardName';
import RecipeCardPunchline from '@/components/reusables/RecipeCardPunchline';
import RecipeCardComment from '@/components/reusables/RecipeCardComment';
import RecipeCardRating from '@/components/reusables/RecipeCardRating';

import { Recipe } from '@/types/Recipe';

import { cn } from '@/lib/utils';

interface SimpleRecipeCardProps {
    recipe: Recipe;
    className?: string;
}

export default function SimpleRecipeCard({ recipe, className }: SimpleRecipeCardProps) {
    if(!recipe) return null

    return (
        <li className={cn('group max-w-96 mb-5', className)}>
            <Link 
                href={route('recipes.show', { recipe: recipe.slug })} 
                className="block" 
                title={recipe.name}
            >
                <Card className="relative overflow-hidden">
                    <CardHeader
                        className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                    bg-gray-100 dark:bg-gray-700 text-gray-400 group-hover:text-primary 
                                    border-2 border-transparent transition-colors duration-300 
                                    group-hover:bg-gray-200 dark:group-hover:bg-gray-700 group-hover:border-primary shadow-transparent hover:shadow-primary"
                    >
                        <FavoriteButton
                            key={recipe.id}
                            recipeId={recipe.id}
                            isFavorite={recipe.is_favorite}
                            className="absolute top-1 left-1 z-20"
                        />
                        <RecipeImageBlock recipe={recipe} />
                    </CardHeader>
                    <CardContent className="py-2 px-0 block text-lg font-medium transition-colors ease-in-out group-hover:text-primary leading-snug">
                        <div className="relative flex flex-row justify-between items-center gap-1 mb-5">
                            <div className="w-full grow px-2">
                                <div className="flex justify-between items-center">
                                    <RecipeCardCategory recipe={recipe} className="text-sm"  />
                                    <RecipeContextMenu
                                        recipe={recipe}
                                        className="z-10"
                                    />
                                </div>
                                <RecipeCardPunchline recipe={recipe} className="transition-colors ease-in-out mt-2 text-gray-600 dark:text-gray-200 group-hover:text-primary" />
                                <RecipeCardName recipe={recipe} className="transition-colors ease-in-out mt-2 text-gray-800 dark:text-gray-200 group-hover:text-primary" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-2 px-2 mb-2 text-sm">
                            <RecipeCardDifficulty recipe={recipe} />
                            <RecipeCardRating recipe={recipe} />
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-2 px-2 text-sm">
                            <RecipeCardPreparationTime recipe={recipe} />
                            <RecipeCardComment recipe={recipe} />
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </li>
    );
}

export function SimpleRecipeCardSkeleton() {
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