import { Head } from '@inertiajs/react';

import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import DishForm from '@/components/forms/DishForm';
import { usePage } from '@inertiajs/react';
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
        <SidebarRightLayout title="Neues Gericht" sidebar={<MainSidebar />}>
            <Head title="Neues Gericht" />
            <DishForm ingredients={ingredients} />
        </SidebarRightLayout>
    );
}
