import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import TitleBlock from './Blocks/TitleBlock';
import { FaQuora } from 'react-icons/fa';

import { FaQ } from 'react-icons/fa6';

/**
 * A component that displays a grid of categories with links to search for recipes that match that category.
 * The categories are hardcoded and are: Vorspeisen, Hauptgerichte, Nachtisch, Cocktails, Backen, and Snacks.
 */
export default function FrontpageCategoryGrid() {
    return (
        <>
            <TitleBlock
                title="Häufige Fragen"
                punchline="und Antworten"
                icon={<FaQ className="text-primary size-6 mt-1" />}
            />
            <div className="w-full lg:max-w-xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium text-xl">
                            Was ist das für eine Webseite?
                        </AccordionTrigger>
                        <AccordionContent>
                            Diese Webseite ist ein privates Hobby-Projekt von{' '}
                            <a
                                href="https://www.tobias-hopp.de/de/"
                                target="_blank"
                                className="underline underline-offset-4 text-primary"
                            >
                                Tobias Hopp
                            </a>{' '}
                            - begonnen im August 2025. Es handelt sich dabei um ein digitales Rezeptbuch, um Rezepte zu speichern und im Alltag schnell griffbereit zu haben.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">
                            Kann ich mich hier registrieren?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ja, die Registrierung ist offen und kostenlos. Es besteht keine Abo-Pflicht oder versteckte Kosten.
                            </p>
                            <p>
                                Bitte sei' Dir der Nutzung darüber klar, dass ich (Tobias Hopp) als
                                Privatperson diese Webseite betreibe und keinerlei Haftung
                                übernehme, sollte es z.B. zu einem Datenverlust kommen.
                            </p>
                            <br />
                            <p>
                                Es gibt keinen Konzern im Hintergrund, der Deine Daten
                                abgreift, verkauft, verwendet oder andersweitig nutzt. Die Daten dieser Platform (Nutzerdaten, Rezeptdaten, etc.)
                                werden (schriftlich nachweisbar) in Frankfurt am Main in einem
                                Rechenzentrum gespeichert.
                            </p>
                            <br />
                            <p>Solltest Du weitere Fragen haben zum
                                Thema Datensicherheit haben, wende Dich bitte, gerne per E-Mail an
                                mich.</p>
                            <br />
                            <p>
                                Die Platform nutzt ein SSL-Zertifikat sowie weitere
                                Sicherheitsmechanismen - es werden also keine unverschlüsselten,
                                persönlichen Daten übertragen.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Was kann ich hier machen?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Du kannst Dich registrieren, mit Deinen Login-Daten die Rezeptbuch-Funktion kostenlos nutzen,
                                z.B. Favoriten anlegen und Rezepte verwalten.
                            </p>
                            <br />
                            <p>Weitere Features wie sind in Planung.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}
