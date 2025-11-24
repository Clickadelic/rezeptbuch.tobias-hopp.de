import StarRating from '@/components/reusables/StarRating';


import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';


interface RecipeStarRatingProps {
    recipe: Recipe
    className?: string
}

export default function RecipeStarRating({ recipe, className }: RecipeStarRatingProps) {

    return (
        <div className={cn("flex flex-col items-center justify-center p-4", className)}>
            <StarRating
                recipeId={recipe.id!}
                initialRating={recipe.user_vote ?? 0}
                communityRating={recipe.community_rating}
                communityVotes={recipe.community_votes}
                userHasVoted={!!recipe.user_vote}
            />
            <p className="text-sm text-gray-500 mt-1">
                Community: {recipe.community_rating} / 5 ({recipe.community_votes} Stimmen)
            </p>
        </div>
    );
}