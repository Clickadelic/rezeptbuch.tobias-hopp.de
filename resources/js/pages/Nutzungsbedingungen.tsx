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
            <section>
                <h3 className="my-5 font-medium text-lg">1. Allgemeines</h3>
                <p>Dieses Rezeptbuch wird als privates, nicht-kommerzielles Projekt betrieben. Die Nutzung ist kostenlos und freiwillig. Mit dem Zugriff auf diese Website erklärst du dich mit den nachfolgenden Bedingungen einverstanden.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">2. Nutzung des Angebots</h3>
                <p>Die angebotenen Inhalte (Rezepte, Texte, Bilder etc.) dienen ausschließlich zu privaten Informationszwecken. Eine kommerzielle Nutzung oder Weiterverwendung der Inhalte ist ohne ausdrückliche Zustimmung nicht gestattet.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">3. Haftungsausschluss</h3>
                <p>Der Betreiber übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Inhalte. Die Nutzung der Website erfolgt auf eigene Gefahr. Es besteht keine Haftung für direkte oder indirekte Schäden, die durch die Nutzung oder Nichtnutzung der angebotenen Informationen entstehen.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">4. Verfügbarkeit und Datenverlust</h3>
                <p>Der Betreiber bemüht sich, den Dienst dauerhaft zugänglich zu halten, kann aber keine ständige Verfügbarkeit garantieren. Es wird keine Haftung für Datenverluste, technische Störungen oder Serverausfälle übernommen. Nutzer sollten selbst sicherstellen, dass sie eigene Inhalte, Rezepte oder Daten sichern.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">5. Nutzerdaten und Datenschutz</h3>
                <p>Sofern personenbezogene Daten (z. B. Name, E-Mail) gespeichert werden, erfolgt dies freiwillig und ausschließlich zur Nutzung der Funktionen des Rezeptbuchs. Es werden keine Daten an Dritte weitergegeben. Weitere Informationen findest du in der [Datenschutzerklärung].</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">6. Änderungen</h3>
                <p>Der Betreiber (Tobias Hopp) behält sich vor, diese Nutzungsbedingungen jederzeit ohne Ankündigung anzupassen. Es gilt jeweils die aktuelle, auf der Website veröffentlichte Fassung.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">7. Kontakt</h3>
                <p>Bei Fragen oder Hinweisen kannst du dich per E-Mail an den Betreiber wenden:
                <a href="mailto:rezeptbuch@tobias-hopp.de" target="_blank" rel="noopener noreferrer"> rezeptbuch@tobias-hopp.de</a></p>
            </section>
        </SidebarLeftLayout>
    );
}
