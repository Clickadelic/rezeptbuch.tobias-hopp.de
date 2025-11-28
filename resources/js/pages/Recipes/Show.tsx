import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';
import AttributesBlock from '@/components/reusables/Blocks/AttributesBlock';
import SingleRecipeIngredientsTable from '@/components/reusables/Tables/SingleRecipeIngredientsTable';
import PreparationInstructions from '@/components/template-views/PreparationInstructsions';
import RelatedRecipesCarousel from '@/components/reusables/RelatedRecipesCarousel';
import CommentsDirectory from '@/components/template-views/CommentsDirectory';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';
import RecipeInfoBlock from '@/components/reusables/Blocks/RecipeInfoBlock';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import RecipeStarRating from '@/components/reusables/Blocks/StarRatingBlock';
import Seperator from '@/components/reusables/Seperator';

import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';

interface ShowRecipeProps {
    recipe: Recipe;
}

/**
 * Displays a single recipe with its details.
 * Contains the SingleRecipeView component which receives the recipe as a prop
 *
 * @param {ShowRecipeProps} props
 * @prop {Recipe} recipe - The recipe to display.
 *
 * @returns {JSX.Element}
 */
export default function Show({ recipe }: ShowRecipeProps) {
    const { related, is_favorite } = usePage<SharedPageProps>().props;
    
    return (
        <SidebarLeftLayout
            title="Rezeptdetails"
            sidebar={<MainSidebar />}
            description={`Rezeptdetails - ${recipe.name}, ${recipe.punchline}, ${recipe.category?.name}`}
        >
            <div className="flex flex-col">
                <div className="w-full flex flex-col sm:flex-row gap-5">
                    <div className="w-full sm:1/2">
                        <div className="flex flex-col items-start justify-start gap-1">
                            <RecipeImageBlock
                                recipe={recipe}
                                className="w-full"
                                useModalWindow={true}
                            />
                            <div className="w-full flex flex-row justify-between">
                                <AvatarBlock recipe={recipe} />
                                <FavoriteButton
                                    recipeId={recipe.id!}
                                    isFavorite={is_favorite as boolean}
                                    showLabel={true}
                                    className="mt-[7px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:1/2 flex flex-col gap-1 justify-between">
                        <RecipeInfoBlock recipe={recipe} />
                    </div>
                </div>
                <AttributesBlock
                    recipe={recipe}
                    className="flex flex-wrap lg:items-center lg:justify-center gap-3 my-3 sm:my-6"
                />
                <SingleRecipeIngredientsTable recipe={recipe} />
                <PreparationInstructions recipe={recipe} />
                <Seperator style="question-mark" />
                <RecipeStarRating recipe={recipe} />
                <CommentsDirectory recipeId={recipe.id!} />
                <RelatedRecipesCarousel
                    recipes={related as Recipe[]}
                    categoryName={recipe.category?.name}
                />
            </div>
        </SidebarLeftLayout>
    );
}
