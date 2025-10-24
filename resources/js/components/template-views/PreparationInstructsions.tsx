
import { Recipe } from "@/types/Recipe";

interface PreparationInstructionsProps {
    recipe: Recipe
}

export default function PreparationInstructions({recipe}: PreparationInstructionsProps) {
    if(!recipe.preparation_instructions) return null;
    return (
        <div className="flex">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-2">
                <h4 className="font-medium text-xl">Zubereitung</h4>
                <div className="flex flex-col gap-2">
                    <p>{recipe.preparation_instructions}</p>
                </div>
            </div>
        </div>
    )
}