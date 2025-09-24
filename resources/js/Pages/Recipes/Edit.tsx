import { usePage } from '@inertiajs/react';

import RecipeForm from '@/components/forms/RecipeForm';
import RecipesSidebar from '@/components/sidebars/MainSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';

import { Recipe } from '@/types/Recipe';

interface EditRecipeProps {
    recipe: Recipe;
}

/**
 * Page for editing a recipe.
 *
 * Shows a form to edit a recipe.
 *
 * @param {EditRecipeProps} props The props for this component.
 * @param {Recipe} props.recipe The recipe to edit.
 * @returns {JSX.Element} The page element.
 */
export default function RecipeEdit({ recipe }: EditRecipeProps) {
    const { props } = usePage();
    const ingredients = props.ingredients;
    return (
        <SidebarLeftLayout title="Rezept bearbeiten" sidebar={<RecipesSidebar />}>
            <RecipeForm recipe={recipe} ingredients={ingredients} />
        </SidebarLeftLayout>
    );
}
