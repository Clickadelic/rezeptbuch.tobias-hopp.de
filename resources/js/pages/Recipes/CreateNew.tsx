import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
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
    return (
        <SidebarLeftLayout title="Neues Rezept" sidebar={<MainSidebar />}>
            <RecipeWizard />
        </SidebarLeftLayout>
    )
}