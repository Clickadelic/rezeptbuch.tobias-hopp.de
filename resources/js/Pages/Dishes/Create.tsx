import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import DishForm from '@/components/forms/DishForm';
/**
 * Page for creating a new dish.
 *
 * Shows a form to create a new dish.
 *
 * @returns The page element.
 */
export default function DishesCreate() {
    const { props } = usePage();
    const ingredients = props.ingredients;
    return (
        <SidebarLeftLayout title="Neues Gericht" sidebar={<MainSidebar />}>
            <DishForm ingredients={ingredients} />
        </SidebarLeftLayout>
    );
}
