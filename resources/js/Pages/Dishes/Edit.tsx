import { Head, usePage } from '@inertiajs/react';

import { Dish } from '@/types/Dish';
import DishForm from '@/components/forms/DishForm';
import DishesSidebar from '@/components/sidebars/DishesSidebar';
import SidebarRightLayout from '@/layouts/SidebarRightLayout';

interface EditDishProps {
    dish: Dish;
}

/**
 * Page for editing a dish.
 *
 * Shows a form to edit a dish.
 *
 * @param {EditDishProps} props The props for this component.
 * @param {Dish} props.dish The dish to edit.
 * @returns {JSX.Element} The page element.
 */
export default function DishesEdit({ dish }: EditDishProps) {
    const { props } = usePage();
    const ingredients = props.ingredients;
    return (
        <>
            <Head title="Gericht bearbeiten" />
            <SidebarRightLayout title="Gericht bearbeiten" sidebar={<DishesSidebar />}>
                <DishForm dish={dish} ingredients={ingredients} />
            </SidebarRightLayout>
        </>
    );
}
