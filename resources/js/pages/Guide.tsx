import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import GuideAccordion from '@/components/reusables/GuideAccordion';

/**
 * Leitfaden – Informationen zur Benutzung
 */
export default function Leitfaden() {
    return (
        <SidebarLeftLayout
            title="Leitfaden zur Benutzung"
            showTitle={false}
            description="Hinweise und Details zur Verwendung des Rezeptbuchs."
            sidebar={<MainSidebar />}
        >
            <GuideAccordion />
        </SidebarLeftLayout>
    );
}
