import { Recipe } from "@/types/Recipe"
import { cn } from "@/lib/utils"

interface RecipeCardPunchlineProps {
    recipe: Recipe
    className?: string
}

export default function RecipeCardPunchline({ recipe, className }: RecipeCardPunchlineProps) {
    if(!recipe) return null
    return (
        <div className={cn("flex", className)}>
            <h4 className="text-lg leading-tight line-clamp-1 h-6 font-yellowtail">
                {recipe?.punchline}
            </h4>
        </div>
    )
}