import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

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

import { ArrowRight } from 'lucide-react';

import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface AdvancedRecipeCardProps {
    className?: string;
    recipe: Recipe;
}

/**
 * Displays an overhauled recipe card with a larger image and more details.
 * @param {AdvancedRecipeCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 */
export default function AdvancedRecipeCard({ recipe, className }: AdvancedRecipeCardProps) {
    return (
        <Card
            className={cn(
                'hover:cursor-default animate ease-in-out duration-300 flex flex-col p-0 bg-gray-100 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-700 shadow-xs hover:shadow-md mb-5 sm:mb-0',
                className,
            )}
        >
            <Link
                href={route('recipes.show', { recipe: recipe?.slug })}
                className="border-2 border-transparent hover:border-primary animate ease-in-out duration-300 rounded-xl"
            >
                <CardHeader className="relative w-full h-auto p-0 overflow-hidden rounded-lg">
                    <FavoriteButton recipeId={recipe.id} isFavorite={recipe?.is_favorite} className="absolute top-2 left-1 z-50" />
                    <RecipeImageBlock recipe={recipe} />
                </CardHeader>
            </Link>
            <CardContent>
                <CardDescription className="p-4">
                    <div className="relative flex gap-2 mb-4">
                        <RecipeCardCategory recipe={recipe} />
                        <RecipeContextMenu recipe={recipe} className="absolute -top-1 -right-1" />
                    </div>
                    <div className="flex flex-col justify-between mb-6">
                        <RecipeCardPunchline recipe={recipe} className="text-gray-600 dark:text-gray-400" />
                        <RecipeCardName recipe={recipe} className="text-gray-800 dark:text-gray-200" />
                    </div>
                    <div className="flex justify-between gap-2 mb-2">
                        <RecipeCardDifficulty recipe={recipe} />
                        <RecipeCardRating recipe={recipe} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <RecipeCardPreparationTime recipe={recipe} />
                        <RecipeCardComment recipe={recipe} />
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter className="px-4 pb-4">
                <Button variant="primary" className="w-full group" asChild>
                    {recipe?.slug && (
                        <Link href={route('recipes.show', { recipe: recipe.slug })}>
                            Zum Rezept
                            <ArrowRight className="-mt-[1px] size-4 transition-all group-hover:translate-x-1" />
                        </Link>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
