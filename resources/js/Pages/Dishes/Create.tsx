import { Head } from '@inertiajs/react';

import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import DishesSidebar from '@/components/sidebars/DishesSidebar';
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
        <SidebarRightLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
            <Head title="Neues Gericht" />
            <DishForm ingredients={ingredients} />
        </SidebarRightLayout>
    );
}
