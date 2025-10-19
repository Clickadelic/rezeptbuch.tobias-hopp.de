import { Head } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Impressum – Rechtliche Informationen
 *
 * Dieses Impressum gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Impressum() {
    return (
        <SidebarLeftLayout title="Impressum" sidebar={<LegalSidebar />}>
            <section>
                <h3 className="my-5 font-medium text-lg">Angaben gemäß § 5 TMG</h3>
                <ul className="space-y-1 my-3">
                    <li>Tobias Hopp</li>
                    <li>Oberer Markenweg 70</li>
                    <li>56566 Neuwied</li>
                    <li>Deutschland</li>
                    <li className="font-medium">Kontakt:</li>
                    <li>
                        <a href="mailto:rezeptbuch@tobias-hopp.de" target="_blank" rel="noopener noreferrer">
                            rezeptbuch@tobias-hopp.de
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h3>
                <ul>
                    <li>Tobias Hopp</li>
                    <li>Oberer Markenweg 70</li>
                    <li>56566 Neuwied</li>
                    <li>Deutschland</li>
                </ul>
            </section>
            <Seperator style="image" />
            <section>
                <h3 className="my-5 font-medium text-lg">Bildnachweise</h3>
                <ul className="list-disc list-inside">
                    <li>Headerbild: Lightmode Foto von <a href="https://unsplash.com/de/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline underline-offset-4 text-primary">Ella Olsson</a> auf <a href="https://unsplash.com/de/fotos/gekochte-gerichte-auf-tellern-und-schusseln-4dQiaWKiL-Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline underline-offset-4 text-primary">Unsplash</a></li>
                    <li>Headerbild: Darkmode Foto von <a href="https://unsplash.com/de/@lottiegriffiths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline underline-offset-4 text-primary">Lottie Griffiths</a> auf <a href="https://unsplash.com/de/fotos/braunes-essen-auf-weissem-keramikteller-8op0ziM4Xzs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline underline-offset-4 text-primary">Unsplash</a></li>
                </ul>
            </section>
            <Seperator />
            <section>
                <h3 className="my-5 font-medium text-lg">1. Hinweis zum Charakter dieses Angebots</h3>
                <p>
                    Dieses Rezeptbuch ist ein privates, nicht-kommerzielles Projekt. Die Nutzung erfolgt
                    ausschließlich zu Informations- und Inspirationszwecken. Es besteht kein Anspruch auf
                    Vollständigkeit, Richtigkeit oder Verfügbarkeit der Inhalte.
                </p>
                <br />
                <p>
                    Alle Inhalte, insbesondere Rezepte, stammen aus privaten Sammlungen oder wurden von
                    Nutzerinnen und Nutzern freiwillig bereitgestellt.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">2. Haftung für Inhalte</h3>
                <p>
                    Als privater Betreiber dieser Seite bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
                    auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich übernehme jedoch
                    keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten
                    Informationen.
                </p>
                <p>
                    Nach §§ 8 bis 10 TMG bin ich nicht verpflichtet, übermittelte oder gespeicherte fremde
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                    konkreten Rechtsverletzung möglich. Bei Bekanntwerden solcher Inhalte werden diese
                    umgehend entfernt.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">3. Haftung für Links</h3>
                <p>
                    Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich
                    keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung waren
                    keine rechtswidrigen Inhalte erkennbar. Eine permanente inhaltliche Kontrolle der
                    verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                    zumutbar.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">4. Urheberrecht</h3>
                <p>
                    Die durch den Betreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
                    deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">5. Haftungsausschluss</h3>
                <p>
                    Die Nutzung der Inhalte dieser Website erfolgt auf eigene Gefahr. Der Betreiber
                    übernimmt keine Haftung für Schäden materieller oder immaterieller Art, die durch die
                    Nutzung oder Nichtnutzung der bereitgestellten Informationen entstehen, sofern kein
                    nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
                </p>
            </section>
            <section>
                <h3 className="my-5 font-medium text-lg">6. Datenschutz</h3>
                <p>
                    Dieses Projekt verarbeitet keine personenbezogenen Daten und setzt keine Tracking- oder
                    Analysewerkzeuge ein. Es werden keine Nutzerprofile erstellt, und es findet keine
                    Weitergabe von Daten an Dritte statt.
                </p>
                <p>
                    Sollten technische Logdaten (z. B. durch den Hosting-Anbieter) anfallen, dienen diese
                    ausschließlich der Sicherstellung des technischen Betriebs und werden automatisch
                    gelöscht.
                </p>
            </section>
        </SidebarLeftLayout>
    );
}
