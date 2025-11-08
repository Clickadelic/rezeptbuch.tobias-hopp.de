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
import Seperator from '@/components/reusables/Seperator';
import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { FaRegFaceGrinStars } from "react-icons/fa6";
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
    const { related, is_favorite } = usePage<SharedPageProps>().props;

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:1/2">
                    <div className="flex flex-col items-start justify-start gap-1">
                        <RecipeImageBlock recipe={recipe} className="w-full" />
                        <div className="w-full flex flex-row justify-between">
                            <AvatarBlock recipe={recipe} />
                            <FavoriteButton recipeId={recipe.id!} isFavorite={is_favorite as boolean} showLabel={true} className="mt-2" />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:1/2 flex flex-col gap-1 justify-between">
                    <RecipeInfoBlock recipe={recipe} />
                </div>
            </div>
            <AttributesBlock recipe={recipe} className="flex flex-wrap lg:items-center lg:justify-center gap-3 my-12" />
            <SingleRecipeIngredientsTable recipe={recipe} />
            <PreparationInstructions recipe={recipe} />
            <Seperator style="star" />
            <TitleBlock title="Deine Meinung" punchline="Was denkst Du?" icon={<FaRegFaceGrinStars className="text-primary size-6 mt-1" />} />
            <UserStarRating rating={recipe?.rating || 0} />
            <CommentsDirectory recipeId={recipe.id!} />
            <RelatedRecipesCarousel related={related as Recipe[]} categoryName={recipe.category?.name} />
        </div>
    );
}
