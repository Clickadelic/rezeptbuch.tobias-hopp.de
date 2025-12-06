import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import TitleBlock from './Blocks/TitleBlock';
import { FaQ } from 'react-icons/fa6';
import { RiGuideLine } from "react-icons/ri";

export default function GuideAccordeon() {
    return (
        <>
            <TitleBlock title="Leitfaden" icon={<RiGuideLine className="text-primary size-6 mt-1" />} punchline="Tipps und Tricks" />
            <div className="w-full lg:max-w-xl mx-auto my-4 sm:my-6 md:my-8">
                <Accordion type="single" collapsible className="mb-8">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium text-xl">
                            Allgemeines
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>Im Prinzip möchte ich dem allgemeinen hungrigen Besucher ein wenig Inspiration zum kochen zu bieten. Wie bereits angesprochen, finde ich die bereits bestehenden Kochbucher ziemlich überladen und unübersichtlich, weshalb ich mich dazu entschlossen habe, selbst ein Rezeptbuch zu erstellen.</p>
                            <p>Die Idee ist einfach: Ein Rezeptbuch, das einfach zu bedienen und einfach zu benutzen ist.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">
                            Rezepte anlegen
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>Um ein neues Rezept anzlegen, klicke nach dem Login einfach auf das Plus-Icon in der rechten unteren Ecke.</p>
                            <br />
                            <p>Danach wirst Du zum Formular zur Erstellung von Rezepten weitergeleitet.</p>
                            <br />
                            <p>Das Formular besteht aus 3 Schritten:</p>
                            <br />
                            <ul>
                                <li>Schritt 1: Kategorie, Name, Veröffentlichungsstatus und weitere Details.</li>
                                <li>Schritt 2: Zutaten wie Menge, Einheit und Zutatenname</li>
                                <li>Schritt 3: Vorschaubild und Zubereitung</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Bilder mit dem Smartphone
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>Die Benutzung der Rezeptbuch-App ist so angelegt, dass Du für Rezepte bequem Bilder bis zu 10 MB mit dem Handy machen kannst. Diese werden beim Upload automatisch direkt verkleinert.</p>
                            <ul>
                                <li>Rezepte (und Zutaten) erstellen</li>
                                <li>Rezepte favorisieren</li>
                                <li>Jedes Rezept bewerten</li>
                                <li>Rezepte erstellen</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Rezepte anlegen
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>Um ein neues Rezept anzlegen, klicke nach dem Login einfach auf das Plus-Icon in der rechten unteren Ecke.</p>
                            <ul>
                                <li>Rezepte (und Zutaten) erstellen</li>
                                <li>Rezepte favorisieren</li>
                                <li>Rezepte erstellen</li>
                                <li>Rezepte erstellen</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}