import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { toast } from 'sonner';
import DishForm from '@/Components/forms/DishForm';

export default function CreateDish() {
    const { flash } = usePage().props as { flash: { success?: string } };
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    return (
        <SidebarLeftLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
            <Head title="Neues Gericht" />
            <DishForm dish={{ id: '', name: '', description: '' }} />
        </SidebarLeftLayout>
    );
}
