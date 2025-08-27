import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import TwoSidebarsLayout from '@/Layouts/TwoSidebarsLayout';
import LeftSidebar from '@/Components/sidebars/LeftSidebar';
import RightSidebar from '@/Components/sidebars/RightSidebar';

export default function Impressum({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Impressum" />
            <TwoSidebarsLayout
                title="Impressum"
                leftSidebar={<LeftSidebar />}
                rightSidebar={<RightSidebar />}
            >
                <h3 className="my-5">
                    <strong>Angaben gemäß § 5 TMG:</strong>
                </h3>
                <ul className="space-y-1 my-3 font-roboto">
                    <li>Tobias Hopp</li>
                    <li>Oberer Markenweg 70</li>
                    <li>56566 Neuwied</li>
                    <li>Deutschland</li>
                    <li>
                        <strong>Kontakt:</strong>
                    </li>
                    <li>
                        <a
                            href="mailto:mail@tobias-hopp.de"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            E-Mail
                        </a>
                    </li>
                </ul>

                <h3 className="my-5">
                    <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
                </h3>
                <p>
                    Tobias Hopp
                    <br />
                    Beispielstraße 12
                    <br />
                    12345 Musterstadt
                </p>

                <p>
                    <strong>Haftung für Inhalte</strong>
                </p>
                <p>
                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin
                    ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                    die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                    den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                    ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                    möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
                    Inhalte umgehend entfernen.
                </p>

                <p>
                    <strong>Haftung für Links</strong>
                </p>
                <p>
                    Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
                    keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <p>
                    <strong>Urheberrecht</strong>
                </p>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
            </TwoSidebarsLayout>
        </>
    );
}
