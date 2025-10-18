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
                            <p>Ja, die Registrierung ist offen und kostenlos. Es besteht keine Abo-Pflicht oder versteckte Kosten.</p>
                            <br />
                            <p>Solltest Du Fragen haben zum Thema Nutzungsbediungungen oder Datensicherheit, wirf' bitte einen Blick ins Impressum bzw. die entsprechenden Seiten im Footer. Solltest Du weitere Fragen haben, kannst Du diese gerne per E-Mail anmich senden.</p>
                            <br />
                            <p>
                                Die Platform nutzt beispielsweise ein SSL-Zertifikat sowie weitere
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
