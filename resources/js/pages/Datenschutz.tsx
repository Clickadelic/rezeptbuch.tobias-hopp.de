import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Datenschutz – Rechtliche Informationen
 *
 * Dieser Datenschutz gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Datenschutz() {
    return (
        <SidebarLeftLayout title="Datenschutz" sidebar={<LegalSidebar />}>
            <h3 className="my-5 font-medium text-lg">Datenschutz Inhalt</h3>
            
        </SidebarLeftLayout>
    );
}
