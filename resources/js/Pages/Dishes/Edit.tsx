import { Head, useForm, usePage } from '@inertiajs/react';
// import { FormEventHandler, useEffect } from 'react';
// import { toast } from 'sonner';

import Dish from '@/types/Dish';
import DishForm from '@/Components/forms/DishForm';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';

interface EditDishProps {
    dish: Dish;
}

export default function EditDish({ dish }: EditDishProps) {
    // Nix machen
    return (
        <>
            <Head title="Gericht bearbeiten" />
            <SidebarLeftLayout title="Gericht bearbeiten" sidebar={<DishesSidebar />}>
                <DishForm dish={dish} />
            </SidebarLeftLayout>
        </>
    );
}
