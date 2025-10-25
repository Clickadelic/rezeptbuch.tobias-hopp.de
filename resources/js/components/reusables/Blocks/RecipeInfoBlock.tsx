import ContextMenu from '@/components/reusables/ContextMenu';
import { Recipe } from '@/types/Recipe';
interface RecipeInfoBlockProps {
    recipe: Recipe
}

export default function RecipeInfoBlock ({ recipe }: RecipeInfoBlockProps) {
    return (

        <div className="w-full flex flex-col">
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