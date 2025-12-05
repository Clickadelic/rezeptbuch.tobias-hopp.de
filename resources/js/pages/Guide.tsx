import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';

/**
 * Leitfaden – Informationen zur Benutzung
 */
export default function Leitfaden() {
    return (
        <SidebarLeftLayout
            title="Leitfaden zur Benutzung"
            description="Hinweise und Details zur Verwendung des Rezeptbuchs."
            sidebar={<MainSidebar />}
        >
            <section>
                In dieser Sektion findet Ihr einen kleinen Leitfaden zur Benutzung.
            </section>
            <section>
                <h3>Allgemeines</h3>
                <p>Im Prinzip geht es darum, den Besuchern dieser Webseite eine gute Zeit und eventuell ein wenig Inspiration zu liefern.</p>
                <p>asd</p>
            </section>
        </SidebarLeftLayout>
    );
}
