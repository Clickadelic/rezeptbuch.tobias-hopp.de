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
            <div className="w-full lg:max-w-xl mx-auto my-4 sm:my-6 md:my-8">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium text-xl">
                            Warum diese Webseite?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>Online-Kochbücher sind mittlerweile mit Werbung und Pop-Ups überladen - findest Du nicht auch?!</p>
                            <br />
                            <p>Ich wollte schon immer ein Rezeptbuch haben, welches man bequem in der Tasche hat, falls mal etwas Inspiration zum Kochen für den Alltag fehlt, oder man eine Köstlichkeit mit Freunden teilen möchte.</p>
                            <br />
                            <p>Warum machst Du nicht mit?</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">
                            Was kann ich hier machen?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Nachdem Du Dich eingeloggt hast, kannst Du die Rezeptbuch-Funktionen
                                nutzen, eigene Rezepte anlegen und speichern, diese Posten und verwalten. Darüber hinaus
                                kannst Du auch Rezepte von anderen Nutzern finden und zu Deinen
                                Favoriten hinzufügen. Ganz ohne Werbung und Pop-Ups.
                            </p>
                            <br />
                            <p>Updates und Verbesserungen in der Zukunft wird es geben.
                                Allerdings ungeregelmäßig - je nach dem, wie ich Zeit habe.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Kann ich mich hier registrieren?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Die Registrierung mit Deiner E-Mail Adresse ist frei und kostenlos. Erstelle einen Account, bestätige ihn kurz per Klick auf den Link in Deiner Inbox, und schon kann es
                                losgehen.
                            </p>
                            <br />
                            <p>Versteckte Kosten gibt es nicht. Schau' in die <Link href="/nutzungsbedingungen" title="Nutzungsbedingungen" className="underline underline-offset-2 text-primary hover:text-emerald-600">Nutzungsbedingungen</Link>.</p>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-medium text-xl">
                            Ist die Registrierung sicher?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ja, ist sie. Die Webseite bzw. App verwendet moderne Sicherheitsstandards wie z.B. eine sichere Verbindung oder einen Registrierungsprozess,
                                bei dem kein Passwort online versendet wird (nur Du gibst es einmal ein).
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}
