import { Head } from '@inertiajs/react';

import { Dish } from '@/types/Dish';
import DishForm from '@/Components/forms/DishForm';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';

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
export default function EditDish({ dish }: EditDishProps) {
    return (
        <>
            <Head title="Gericht bearbeiten" />
            <SidebarLeftLayout title="Gericht bearbeiten" sidebar={<DishesSidebar />}>
                <DishForm dish={dish} />
            </SidebarLeftLayout>
        </>
    );
}
