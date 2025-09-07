import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

import { toast } from 'sonner';
import IngredientForm from '@/components/forms/IngredientForm';

export default function CreateIngredient() {
    const { flash } = usePage().props as { flash: { success?: string } };

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    return (
        <SidebarLeftLayout title="Neue Zutat">
            <Head title="Neue Zutat" />
            <IngredientForm />
        </SidebarLeftLayout>
    );
}
