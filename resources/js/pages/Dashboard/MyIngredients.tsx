"use client";

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import UserSidebar from '@/components/sidebars/UserSidebar';

import IngredientsPanel from '@/components/reusables/Panels/IngredientsPanel';

/**
 * The Dashboard page displays a variety of information about the user's recipes.
 * It includes a bar chart that shows the number of recipes, a donut chart that shows the distribution of recipes between the user and other users, and two tables that show the user's recipes and favorites.
 */
export default function MyIngredients() {
    return (
        <SidebarLeftLayout title="Meine Zutaten" sidebar={<UserSidebar />}>
            <IngredientsPanel title="Meine Zutaten" />
        </SidebarLeftLayout>
    );
}
