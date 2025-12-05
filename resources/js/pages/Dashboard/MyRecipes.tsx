import { usePage } from '@inertiajs/react';

import UserSidebar from '@/components/sidebars/UserSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import RecipesPanel from '@/components/reusables/Panels/RecipesPanel';

import { TfiLayoutListThumb } from 'react-icons/tfi';


import Paginated from '@/types/Paginated';

import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';

/**
 * The user recipes page displays a variety of information about the user's recipes.
 */
export default function MyRecipes() {
    const { userRecipes, userFavorites } = usePage<SharedPageProps>().props;
    return (
        <SidebarLeftLayout title="Deine Rezepte" showTitle={false} sidebar={<UserSidebar />}>
            <RecipesPanel title="Deine Rezepte" icon={<TfiLayoutListThumb className="size-5 mt-1 text-primary" />} recipes={userRecipes as Paginated<Recipe>} />
        </SidebarLeftLayout>
    );
}
