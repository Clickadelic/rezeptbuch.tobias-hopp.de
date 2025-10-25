import { usePage } from '@inertiajs/react';

import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';
import AttributesBlock from '@/components/reusables/Blocks/AttributesBlock';
import SingleRecipeIngredientsTable from '@/components/reusables/Tables/SingleRecipeIngredientsTable';
import PreparationInstructions from '@/components/template-views/PreparationInstructsions';
import RelatedRecipesCarousel from '@/components/reusables/RelatedRecipesCarousel';
import CommentsDirectory from '@/components/template-views/CommentsDirectory';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';
import RecipeInfoBlock from '@/components/reusables/Blocks/RecipeInfoBlock';

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
        <div className="flex flex-col gap-1">
            <div className="flex flex-col xl:flex-row justify-start gap-5">
                <RecipeImageBlock recipe={recipe} />
                <div className="w-full flex flex-col justify-between gap-5">
                    <RecipeInfoBlock recipe={recipe} />
                    <AttributesBlock recipe={recipe} />
                </div>
            </div>
            <AvatarBlock recipe={recipe} />
            <SingleRecipeIngredientsTable recipe={recipe} />
            <PreparationInstructions recipe={recipe} />
            <CommentsDirectory recipeId={recipe.id!} />
            <RelatedRecipesCarousel related={related as Recipe[]} categoryName={recipe.category?.name} />
        </div>
    );
}
