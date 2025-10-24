import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';

/**
 * Cookies – Rechtliche Informationen
 *
 * Dieser Cookie-Hinweis gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function CookieNoticePage() {
    return (
        <SidebarLeftLayout title="Cookie-Hinweis" sidebar={<LegalSidebar />}>
            <section>
                <p>
                    Diese Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und
                    die Nutzung zu erleichtern.
                </p>
                <p>Es werden ausschließlich technisch notwendige Cookies gesetzt, z. B. um:</p>
                <ul className="list-disc list-inside my-3">
                    <li>dich während einer Sitzung angemeldet zu halten,</li>
                    <li>Formulare zu schützen (CSRF-Schutz),</li>
                    <li>Sprach- oder Seiteneinstellungen zu speichern.</li>
                </ul>
                <p>Es werden keine Tracking-, Analyse- oder Werbe-Cookies eingesetzt.</p>
                <p>
                    Technisch notwendige Cookies dürfen gemäß Art. 6 Abs. 1 lit. f DSGVO ohne
                    ausdrückliche Zustimmung gesetzt werden, da sie für den Betrieb der Seite
                    erforderlich sind.
                </p>
                <br />
                <p>
                    Du kannst Cookies jederzeit über die Einstellungen deines Browsers löschen oder
                    blockieren.
                </p>
                <p>
                    Bitte beachte: Wenn du Cookies deaktivierst, können einige Funktionen der
                    Website eingeschränkt sein (z. B. Login).
                </p>
            </section>
        </SidebarLeftLayout>
    );
}
