import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import { Head } from '@inertiajs/react';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import CocktailForm from '@/components/forms/CocktailForm';

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
