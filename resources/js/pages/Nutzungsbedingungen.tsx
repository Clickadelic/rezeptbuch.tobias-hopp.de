import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Nutzungsbedingungen – Rechtliche Informationen
 *
 * Diese Nutzungsbedingungen gelten für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Nutzungsbedingungen() {
    return (
        <SidebarLeftLayout title="Nutzungsbedingungen" sidebar={<LegalSidebar />}>
            <h3 className="my-5 font-medium text-lg">Inhalt Nutzungsbedingungen</h3>
        </SidebarLeftLayout>
    );
}
