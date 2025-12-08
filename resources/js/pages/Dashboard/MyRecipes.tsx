import UserSidebar from '@/components/sidebars/UserSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import RecipesPanel from '@/components/reusables/Panels/RecipesPanel';
import { TfiLayoutListThumb } from 'react-icons/tfi';

// Test

/**
 * The user recipes page displays a variety of information about the user's recipes.
 */
export default function MyRecipes() {
    return (
        <SidebarLeftLayout title="Deine Rezepte" showTitle={false} sidebar={<UserSidebar />}>
            <RecipesPanel title="Deine Rezepte" icon={<TfiLayoutListThumb className="size-5 mt-1 text-primary" />} />
        </SidebarLeftLayout>
    );
}
