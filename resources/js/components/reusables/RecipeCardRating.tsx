import { Star } from 'lucide-react';

import { Recipe } from '@/types/Recipe'
import { cn } from '@/lib/utils';

interface RecipeCardRatingProps{
    className?: string
    recipe: Recipe;
}

/**
 * RecipeCardRating component for displaying recipe ratings and comments count.
 *
 * @param {Recipe} recipe - Recipe object to display ratings and comments count for.
 * @param {string} [className] - Additional CSS classes to apply to the component.
 * @returns {JSX.Element} RecipeCardRating component.
 */
export default function RecipeCardRating({ recipe, className }: RecipeCardRatingProps) {
    return (
        <div className={cn("flex justify-start items-center gap-2 text-sm", className)}>
            <Star className="inline-flex size-4 -mt-1 text-yellow-500 fill-yellow-500" />
            <div className="flex gap-1">
                <span className="text-gray-800 dark:text-gray-200">
                    {recipe?.community_rating}
                </span>
                <span className="text-gray-800 dark:text-gray-200">/</span>
                <span className="text-gray-800 dark:text-gray-200">
                    {recipe?.community_votes}
                </span>
            </div>
        </div>
    )
}