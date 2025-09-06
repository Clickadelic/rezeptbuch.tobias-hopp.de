import { Head } from '@inertiajs/react';

import SidebarRightLayout from '@/Layouts/SidebarRightLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import DishForm from '@/Components/forms/DishForm';
import { usePage } from '@inertiajs/react';
import UploadForm from '@/Components/forms/UploadForm';
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
            <UploadForm collection="dishes" />
            <DishForm ingredients={ingredients} />
        </SidebarRightLayout>
    );
}
