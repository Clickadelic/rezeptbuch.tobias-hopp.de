import { usePage } from '@inertiajs/react';

import { Dish } from '@/types/Dish';
import DishForm from '@/components/forms/DishForm';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';

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
        <SidebarLeftLayout title="Gericht bearbeiten" sidebar={<DishesSidebar />}>
            <DishForm dish={dish} ingredients={ingredients} />
        </SidebarLeftLayout>
    );
}
