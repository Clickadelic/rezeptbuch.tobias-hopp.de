import { GoClock } from "react-icons/go";
import { Recipe } from "@/types/Recipe";

import { cn } from "@/lib/utils";

interface RecipeCardPreparationTimeProps {
    recipe: Recipe
    className?: string
}

/**
 * Displays the preparation time for a recipe.
 *
 * @param {RecipeCardPreparationTimeProps} props
 * @param {Recipe} props.recipe - The recipe to display preparation time for.
 * @param {string} [props.className] - A class name to apply to the component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function RecipeCardPreparationTime({ recipe, className }: RecipeCardPreparationTimeProps) {
    return (
        <div className={cn("flex gap-2 items-center justify-start text-gray-800 dark:text-gray-200 text-sm", className)}>
            <GoClock className="size-4 text-primary" />
            <span className="flex gap-1">
                <span>{recipe?.preparation_time}</span>
                <span>Minuten</span>
            </span>
        </div>
    )
}