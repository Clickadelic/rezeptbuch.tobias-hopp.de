import StarRating from '@/components/reusables/StarRating';
import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { IoIosStats } from 'react-icons/io';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { MdOutlineHowToVote } from 'react-icons/md';
interface RecipeStarRatingProps {
    recipe: Recipe;
    className?: string;
    readOnly?: boolean;
}

export default function RecipeStarRating({ recipe, className, readOnly }: RecipeStarRatingProps) {
    return (
        <div className={cn('flex flex-col items-center justify-center', className)}>
            <TitleBlock
                title="Bewertung"
                icon={<MdOutlineHowToVote className="text-primary size-6 mt-1" />}
            />
            <StarRating
                recipeId={String(recipe.id)}
                initialRating={recipe.user_vote ?? 0}
                communityRating={recipe.community_rating ?? 0}
                communityVotes={recipe.community_votes ?? 0}
                userHasVoted={!!recipe.user_vote}
                readOnly={readOnly}
            />
        </div>
    );
}
