import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import { FaFaceGrinSquintTears, FaHeadphones } from "react-icons/fa6";

/**
 * A component that displays a grid of categories with links to search for recipes that match that category.
 * The categories are hardcoded and are: Vorspeisen, Hauptgerichte, Nachtisch, Cocktails, Backen, and Snacks.
 */
export default function FrontpageCategoryGrid() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 col-start-2">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium text-xl">Was ist das hier für eine Seite?</AccordionTrigger>
                        <AccordionContent>
                            Es ist ein privates Hobby-Projekt - begonnen im Herbst 2025.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium text-xl">Kann ich mich hier anmelden?</AccordionTrigger>
                        <AccordionContent>
                            Ja, die Registrierung ist kostenlos, keine Abo-Pflicht, kein Datenklau.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    );
}