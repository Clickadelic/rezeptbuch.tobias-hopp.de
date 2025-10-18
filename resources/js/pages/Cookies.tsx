import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Cookies – Rechtliche Informationen
 *
 * Dieser Cookies gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Cookies() {
    return (
        <SidebarLeftLayout title="Cookies" sidebar={<LegalSidebar />}>
            <h3 className="my-5 font-medium text-lg">Cookies Inhalt</h3>

        </SidebarLeftLayout>
    );
}
