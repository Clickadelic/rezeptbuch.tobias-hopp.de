

import { Recipe } from "@/types/Recipe"
import { cn } from "@/lib/utils"
import { VscSymbolEvent } from "react-icons/vsc"
interface RecipeCardDifficultyProps {
    recipe: Recipe
    className?: string
}

export default function RecipeCardDifficulty({ recipe, className }: RecipeCardDifficultyProps) {
    if(!recipe?.difficulty) return null
    return (
        <div className={cn("flex items-start gap-2", className)}>
            <VscSymbolEvent className="size-4 text-primary" />
            <span>{recipe?.difficulty}</span>
        </div>
    )
}