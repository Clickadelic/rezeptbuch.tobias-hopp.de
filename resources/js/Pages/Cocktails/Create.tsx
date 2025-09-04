import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import CocktailForm from '@/Components/forms/CocktailForm';


/**
 * Page for creating a new dish.
 *
 * Shows a form to create a new dish.
 *
 * @returns The page element.
 */
export default function CocktailsCreate() {

    return (
        <SidebarLeftLayout title="Neuer Cocktail" sidebar={<DishesSidebar />}>
            <Head title="Neuer Cocktail" />
            <CocktailForm />
        </SidebarLeftLayout>
    );
}