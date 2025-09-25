import { usePage } from '@inertiajs/react';

import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import RecipeWizard from '@/components/forms/RecipeWizard';

/**
 * Page for creating a new recipe.
 *
 * Shows a form to create a new recipe.
 *
 * @returns The page element.
 */
export default function RecipesCreate() {
    const { props } = usePage();
    const ingredients = props.ingredients;
    return (
        <SidebarRightLayout title="Neues Rezept" sidebar={<MainSidebar />}>
            <RecipeWizard ingredients={ingredients} />
        </SidebarRightLayout>
    );
}
