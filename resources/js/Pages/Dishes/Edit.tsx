import { Head } from '@inertiajs/react';

import Dish from '@/types/Dish';
import DishForm from '@/Pages/Dishes/DishForm';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';

interface EditDishProps {
    dish: Dish;
}

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
