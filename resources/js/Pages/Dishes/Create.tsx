import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import DishForm from '@/Components/forms/DishForm';


/**
 * Page for creating a new dish.
 *
 * Shows a form to create a new dish.
 *
 * @returns The page element.
 */
export default function CreateDish() {

    return (
        <SidebarLeftLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
            <Head title="Neues Gericht" />
            <DishForm />
        </SidebarLeftLayout>
    );
}
