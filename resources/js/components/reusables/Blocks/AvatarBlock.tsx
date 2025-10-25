import Avatar from "@/components/reusables/Avatar";
import { Recipe } from "@/types/Recipe";
import { toHumanDate } from "@/lib/utils";

interface AvatarBlockProps {
    recipe: Recipe;
}

/**
 * Displays the author of a recipe with its author name, avatar and creation date.
 *
 * @param {ShowRecipeProps} props - properties of the component
 * @param {Recipe} props.recipe - The recipe to display.
 *
 * @returns {JSX.Element} - the rendered component
 */
export default function AvatarBlock({ recipe }: AvatarBlockProps) {
    const user = recipe?.user;
    const createdAt = recipe?.created_at;

    if (!user) return null;

    return (
        <div className="flex items-start gap-3 py-3">
            <div className="pt-1">
                <Avatar url={user.avatar} />
            </div>
            <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">von {user.name}</h3>
                {createdAt && (
                    <p className="text-sm text-gray-400 dark:text-gray-600">
                        {toHumanDate(createdAt)}
                    </p>
                )}
            </div>
        </div>
    );
}
