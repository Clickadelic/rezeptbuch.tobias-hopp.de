import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';

/**
 * Datenschutz – Rechtliche Informationen
 *
 * Dieser Datenschutz gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Datenschutz() {
    return (
        <SidebarLeftLayout
            title="Leitfaden zur Benutzung"
            description="Hinweise und Details zur Verwendung des Rezeptbuchs."
            sidebar={<MainSidebar />}
        >
            <section>
                asd
            </section>
        </SidebarLeftLayout>
    );
}
