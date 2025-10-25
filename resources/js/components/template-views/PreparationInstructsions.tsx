import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface PreparationInstructionsProps {
    recipe: Recipe;
    className?: string
}

/**
 * Displays the preparation instructions for a recipe.
 *
 * @param {PreparationInstructionsProps} props
 * @param {Recipe} props.recipe - The recipe to display instructions for.
 * @param {className} props.className - A class name to apply to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function PreparationInstructions({ recipe, className }: PreparationInstructionsProps) {
    
    if (!recipe.preparation_instructions) return null;

    return (

        <div className={cn("flex", className)}>
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-2">
                <h4 className="font-medium text-xl">Zubereitung</h4>
                <div className="flex flex-col gap-2">
                    <p>{recipe.preparation_instructions}</p>
                </div>
            </div>
        </div>

    );
}
