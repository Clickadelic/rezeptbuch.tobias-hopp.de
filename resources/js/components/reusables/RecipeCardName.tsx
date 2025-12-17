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
            <h5 className="text-lg leading-tight line-clamp-3 h-16 mt-1">
                {recipe?.name}
            </h5>
        </div>
    )
}