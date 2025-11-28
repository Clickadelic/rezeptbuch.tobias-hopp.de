import { Recipe } from "@/types/Recipe"
import { cn } from "@/lib/utils"

interface RecipeCardNameProps {
    recipe: Recipe
    className?: string
}

export default function RecipeCardName({ recipe, className }: RecipeCardNameProps) {
    if(!recipe) return null
    return (
        <div className={cn("flex", className)}>
            <h5 className="text-lg leading-tight text-gray-800 dark:text-gray-200 line-clamp-3 min-h-20 mt-1">
                {recipe?.name}
            </h5>
        </div>
    )
}