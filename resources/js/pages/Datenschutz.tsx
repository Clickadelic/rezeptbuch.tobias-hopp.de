import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';

/**
 * Datenschutz – Rechtliche Informationen
 *
 * Dieser Datenschutz gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Datenschutz() {
    return (
        <SidebarLeftLayout title="Datenschutz" sidebar={<LegalSidebar />}>
            <section>
                <h3 className="my-5 font-medium text-lg">1. Verantwortlicher</h3>
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <ul className="flex flex-col gap-3 my-3">
                    <li>
                        Tobias Hopp, E-Mail:
                        <a
                            href="mailto:rezeptbuch@tobias-hopp.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="rezeptbuch@tobias-hopp.de"
                        >
                            rezeptbuch@tobias-hopp.de
                        </a>
                    </li>
                    <li>(Privatperson, Betreiber dieses Rezeptbuchs)</li>
                </ul>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">2. Allgemeines zur Datenverarbeitung</h3>
                <p>
                    Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Website wird privat
                    und nicht kommerziell betrieben. Personenbezogene Daten werden nur im
                    notwendigen Umfang erhoben, verarbeitet und gespeichert – ausschließlich zum
                    Betrieb dieser Anwendung.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">3. Hosting</h3>
                <p>
                    Diese Website wird bei WebGo GmbH, Wandsbeker Zollstraße 95, 22041 Hamburg
                    gehostet. WebGo stellt die technischen Ressourcen (Webserver, Datenbank,
                    E-Mail-Funktion etc.) zur Verfügung. Der Hosting-Anbieter verarbeitet Daten in
                    meinem Auftrag gemäß Art. 28 DSGVO. Alle Server befinden sich in Deutschland
                    (Rechenzentrum Frankfurt am Main).
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">4. SSL-Verschlüsselung</h3>
                <p>
                    Die Verbindung zu dieser Website erfolgt ausschließlich über eine
                    SSL-verschlüsselte Verbindung (https). Dadurch werden übertragene Daten (z. B.
                    Logins, Formulareingaben) geschützt.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">5. Registrierung und Benutzerkonto</h3>
                <p>
                    Du kannst dich freiwillig registrieren, um Rezepte anzulegen oder Funktionen zu
                    nutzen. Dabei werden folgende Daten erhoben und gespeichert:
                </p>
                <ul>
                    <li>E-Mail-Adresse</li>
                    <li>Passwort (verschlüsselt gespeichert)</li>
                    <li>ggf. weitere freiwillige Angaben im Benutzerprofil</li>
                    <li>
                        Das Passwort wird niemals im Klartext gespeichert, sondern mit einem
                        sicheren Verfahren verschlüsselt.
                    </li>
                    <li>
                        Die Daten werden ausschließlich zur Nutzung des Dienstes verwendet und nicht
                        an Dritte weitergegeben.
                    </li>
                </ul>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">6. Server-Logfiles</h3>
                <p>
                    Beim Aufruf der Website werden automatisch Informationen erhoben, die dein
                    Browser übermittelt. Dazu gehören:
                </p>
                <ul className="list-disc list-inside my-3">
                    <li>IP-Adresse (gekürzt oder anonymisiert, sofern möglich)</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Browsertyp und -version</li>
                    <li>Betriebssystem</li>
                    <li>Referrer-URL (Ursprung Deiner Herkunft auf diese Seite)</li>
                </ul>
                <p>
                    Diese Daten dienen der Sicherheit und Fehleranalyse und werden automatisch
                    gelöscht, sobald sie nicht mehr benötigt werden.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">7. Verwendung von Cookies</h3>
                <p>
                    Diese Website verwendet Cookies, um die Anmeldung (Session) und technische
                    Funktionen bereitzustellen. Cookies enthalten keine persönlichen Informationen
                    und werden nicht zu Tracking- oder Werbezwecken eingesetzt.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">8. Datenweitergabe</h3>
                <p>
                    Es erfolgt keine Weitergabe oder Verkauf von Nutzerdaten an Dritte. Daten werden
                    nur dann weitergegeben, wenn gesetzliche Verpflichtungen bestehen (z. B. im
                    Rahmen von Ermittlungen).
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">9. Speicherdauer und Löschung</h3>
                <p>
                    Deine Daten werden so lange gespeichert, wie dein Benutzerkonto besteht. Du
                    kannst dein Konto jederzeit löschen oder eine Löschung deiner Daten beantragen.
                </p>
                <p>
                    Nach der Löschung werden alle personenbezogenen Informationen vollständig
                    entfernt, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">10. Deine Rechte</h3>
                <p>Du hast jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside my-3">
                    <li> Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                    <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    <li>
                        Anfragen hierzu kannst du formlos per E-Mail an die oben genannte Adresse
                        stellen.
                    </li>
                </ul>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">
                    11. Änderungen dieser Datenschutzerklärung
                </h3>
                <p>
                    Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um somit
                    auf aktuelle rechtliche Anforderungen und/oder Bestimmungen sowie technische
                    Änderungen adäquat zu reagieren.
                </p>
                <br />
                <p>Es gilt stets die aktuelle Version auf dieser Website.</p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">12. Kontakt</h3>
                <p>
                    Fragen zum Datenschutz kannst du jederzeit an folgende Adresse richten:
                    <a
                        href="mailto:rezeptbuch@tobias-hopp.de"
                        target="_blank"
                        title="rezeptbuch@tobias-hopp.de"
                    >
                        rezeptbuch@tobias-hopp.de
                    </a>
                </p>
            </section>
        </SidebarLeftLayout>
    );
}
