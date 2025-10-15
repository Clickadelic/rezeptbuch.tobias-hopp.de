import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import { Recipe } from '@/types/Recipe';
import SingleRecipeView from '@/components/reusables/SingleRecipeView';

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
    return (
        <SidebarLeftLayout title="Rezeptdetails" sidebar={<MainSidebar />}>
            <SingleRecipeView recipe={recipe} />
        </SidebarLeftLayout>
    );
}
