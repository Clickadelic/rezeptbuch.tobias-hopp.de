import { usePage } from '@inertiajs/react';

import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';
import AttributesBlock from '@/components/reusables/Blocks/AttributesBlock';
import SingleRecipeIngredientsTable from '@/components/reusables/Tables/SingleRecipeIngredientsTable';
import PreparationInstructions from '@/components/template-views/PreparationInstructsions';
import RelatedRecipesCarousel from '@/components/reusables/RelatedRecipesCarousel';
import CommentsDirectory from '@/components/template-views/CommentsDirectory';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';
import RecipeInfoBlock from '@/components/reusables/Blocks/RecipeInfoBlock';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import UserStarRating from '@/components/forms/inputs/UserStarRating';

import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';

interface ShowRecipeProps {
    recipe: Recipe;
}

/**
 * Displays a single recipe with its details.
 *
 * @param {ShowRecipeProps} props - properties of the component
 * @param {Recipe} props.recipe - The recipe to display.
 *
 * @returns {JSX.Element} - the rendered component
 */
export default function SingleRecipeView({ recipe }: ShowRecipeProps) {
    const { related } = usePage<SharedPageProps>().props;

    return (
        <div className="flex flex-col">
            <div className="flex gap-6">
                <RecipeImageBlock recipe={recipe} className="w-full md:w-1/2" />
                <div className="flex flex-col justify-between md:w-1/2">
                    <RecipeInfoBlock recipe={recipe} />
                    <AttributesBlock recipe={recipe} />
                </div>
            </div>
            <div className="flex w-full">
                <AvatarBlock recipe={recipe} />
                <FavoriteButton recipeId={recipe?.id} isFavorite={recipe?.is_favorite} />
            </div>
            <SingleRecipeIngredientsTable recipe={recipe} />
            <PreparationInstructions recipe={recipe} />
            {/* <UserStarRating
                recipeId={recipe.id}
                readonly={true}
                rating={recipe.rating as number}
                communityRating={recipe.community_rating}
                communityVotes={recipe.community_votes}
            /> */}

            <CommentsDirectory recipeId={recipe.id!} />
            <RelatedRecipesCarousel related={related as Recipe[]} categoryName={recipe.category?.name} />
        </div>
    );
}
