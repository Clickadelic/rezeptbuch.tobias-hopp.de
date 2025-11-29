import RecipeCardPunchline from '@/components/reusables/RecipeCardPunchline';

import { Recipe } from '@/types/Recipe';

import { cn } from '@/lib/utils';

interface RecipeInfoBlockProps {
    recipe: Recipe;
    className?: string;
}

/**
 * Displays a recipe's info, including its name, description, and punchline.
 * Also includes a context menu with options to edit or delete the recipe.
 * @param {Recipe} recipe - The recipe to display.
 * @returns {JSX.Element} - The rendered component.
 */
export default function RecipeInfoBlock({ recipe, className }: RecipeInfoBlockProps) {
    return (
        <div className={cn('w-full flex flex-col', className)}>
            <div className="w-full flex flex-row justify-between items-center">
                <div>
                    <RecipeCardPunchline recipe={recipe} className="text-gray-600 dark:text-gray-400" />
                    <h3 className="font-medium text-xl mb-3">{recipe.name}</h3>
                </div>

            </div>
            <p className="mb-3 text-gray-800 dark:text-gray-200">{recipe.description}</p>
        </div>
    );
}
