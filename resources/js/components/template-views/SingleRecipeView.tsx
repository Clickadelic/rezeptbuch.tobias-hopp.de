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
            <div className="w-full flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:1/2">
                    <div className="flex flex-col items-start justify-start gap-1">
                        <RecipeImageBlock recipe={recipe} className="w-full" />
                        <div className="w-full flex flex-row justify-between">
                            <AvatarBlock recipe={recipe} />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:1/2">
                    <div className="size-full flex flex-col justify-between">
                        <RecipeInfoBlock recipe={recipe} />
                        <FavoriteButton recipeId={recipe.id} className="me-auto" showText={true} isFavorite={recipe.is_favorite} />
                    </div>

                </div>
            </div>
            <SingleRecipeIngredientsTable recipe={recipe} />
        </div>
    );
}
