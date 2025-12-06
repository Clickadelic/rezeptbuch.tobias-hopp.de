import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import GuideAccordeon from '@/components/reusables/GuideAccordeon';

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
            <GuideAccordeon />
        </SidebarLeftLayout>
    );
}
