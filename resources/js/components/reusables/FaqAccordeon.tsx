import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';
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
                            <Link
                                href="https://www.tobias-hopp.de/de/"
                                target="_blank"
                                className="underline underline-offset-4 text-primary"
                            >
                                Tobias Hopp
                            </Link>{' '}
                            - begonnen im August 2025. Es handelt sich dabei um ein digitales
                            Rezeptbuch, um Rezepte zu speichern und im Alltag schnell griffbereit zu
                            haben.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">
                            Kann ich mich hier registrieren?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ja, die Registrierung ist kostenlos. Erstelle mit Deiner E-Mail Adresse einen Account, bestätige diese kurz
                                und schon kann es losgehen. Versteckte Kosten gibt es nicht.
                            </p>
                            <br />
                            <p>
                                Solltest Du Fragen bzw. Bedenken bezüglich Registrierung oder
                                Datensicherheit haben, wirf' bitte einen Blick in die{' '}
                                <Link
                                    href="/nutzungsbedingungen"
                                    target="_self"
                                    className="underline underline-offset-4 text-primary"
                                >
                                    Nutzungsbedingungen
                                </Link> oder lies's den {' '} 
                                <Link
                                    href="/nutzungsbedingungen"
                                    target="_self"
                                    className="underline underline-offset-4 text-primary"
                                >
                                    Datenschutzhinweis
                                </Link>.
                            </p>
                            <br />
                            <p>
                                Falls Du danach noch weitere Fragen hast, kannst Du Dich natürlich
                                gerne per E-Mail oder Kontaktformular an mich wenden.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Was kann ich hier machen?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Nachdem Du Dich eingeloggt hast, kannst
                                Du die Rezeptbuch-Funktion nutzen und eigene Rezepte anlegen und diese Posten.
                                Darüber hinaus kannst Du auch Rezepte von anderen Nutzern finden und zu Deinen Favoriten hinzufügen.
                            </p>
                            <br />
                            <p>Weitere Features wie sind in in Planung bzw. in Arbeit.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}
