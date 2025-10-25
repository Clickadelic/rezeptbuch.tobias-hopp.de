import ContextMenu from '@/components/reusables/ContextMenu';
import { Recipe } from '@/types/Recipe';

import { cn } from '@/lib/utils';

interface RecipeInfoBlockProps {
    recipe: Recipe
    className?: string
}

/**
 * Displays a recipe's info, including its name, description, and punchline.
 * Also includes a context menu with options to edit or delete the recipe.
 * @param {Recipe} recipe - The recipe to display.
 * @returns {JSX.Element} - The rendered component.
 */
export default function RecipeInfoBlock ({ recipe, className }: RecipeInfoBlockProps) {
    return (
        <div className={cn("w-full flex flex-col", className)}>
            <div className="relative w-full flex flex-row justify-between items-center">
                <div>
                    <h4 className="font-medium text-sm  text-gray-400 dark:text-gray-600">
                        {recipe.punchline}
                    </h4>
                    <h3 className="font-medium text-2xl mb-3">{recipe.name}</h3>
                </div>
                <ContextMenu recipe={recipe} dotStyle="vertical" />
            </div>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
                {recipe.description}
            </p>
        </div>
    )
}