import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

import TitleBlock from './Blocks/TitleBlock';
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
                            <p>Ich wollte schon immer ein Rezeptbuch haben, welches ich bequem in der Tasche habe, falls mal etwas Inspiration zum Kochen für den Alltag fehlt, oder ich eine Köstlichkeit mit Freunden teilen möchte.</p>
                            <br />
                            <p>Nun, wenn schon, denn schon - voilá, ein Rezeptbuch!</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">
                            Was kann ich hier machen?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Du kannst leckere Rezepte durchstöbern (und diese für Dich verwenden). Wenn Du Lust hast, kannst Du Dich auch registrieren und
                                eigene Rezepte anlegen, sie verwalten und mit Anderen teilen. Zusätzlich kannst Du natürlich auch Rezepte von anderen Nutzern finden und sie zu Deinen
                                Favoriten hinzufügen. Ganz ohne Werbung und Pop-Ups.
                            </p>
                            <br />
                            <p>Ich stelle das Rezeptbuch der Allgemeinheit zur Verfügung - wer möchte, kann gerne mitmachen.</p>
                            <br />
                            <p>Updates, Verbesserungen oder Bugfixes in der Zukunft wird es geben.</p>
                            <p>Allerdings ungeregelmäßig - je nach dem, wie ich Zeit hab und wie die technische Lage ist.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Kann ich mich hier registrieren?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ja, die Registrierung mit Deiner E-Mail Adresse ist frei und kostenlos. Erstelle einen Account, bestätige ihn kurz per Klick auf den Link in Deiner Inbox, und schon kann es
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
                            <p>Ja, ist sie.</p>
                            <br />
                            <p>Die Webseite bzw. App verwendet moderne Sicherheitsstandards wie z.B. eine sichere Verbindung und einen sicheren Registrierungsprozess.</p>
                            <br />
                            <p>Weitere Informationen zu diesem Thema gibt es aus Sicherheitsgründen nicht.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}
