import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import RecipeWizzard from '@/components/forms/RecipeWizzard';

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
        <SidebarLeftLayout title="Neues Rezept" sidebar={<MainSidebar />}>
            <RecipeWizzard ingredients={ingredients} />
        </SidebarLeftLayout>
    );
}
