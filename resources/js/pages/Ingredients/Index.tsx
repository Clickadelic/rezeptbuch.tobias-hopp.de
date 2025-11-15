import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientDirectory from '@/components/template-views/IngredientsDirectory';
import Seperator from '@/components/reusables/Seperator';

import srcUrl from "@images/svg/Hamburger-bro.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';
import TitleBlock from './Blocks/TitleBlock';
import { FaQuora } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaQ } from 'react-icons/fa6';
export default function IngredientsIndex() {
    return (
        <NoSidebarsLayout title="Zutaten">
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="sm:col-span-1 flex justify-center items-center">
                    <img src={srcUrl} className="size-48 mb-8 sm:my-0" alt="Chef Tobias" />
                </div>
                <div className="w-full col-span-1 sm:col-span-4 sm:col-start-2">
                    <p>Gute Zutaten sind die Grundlage für ein gesundes und leckeres Essen. Das Gleiche gilt natürlich auch für Getränke aller Art, frei nach dem Motto:</p>
                    <br />
                    <p className="italic">"Es ist genau so wichtig, was in Deinen Mund rein geht, wie das was raus kommt."</p>
                    <br />
                    <p>In den Rezepten sind folgende Zutaten enthalten:</p>
                </div>
                
            </div>
            
            <IngredientDirectory />

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex justify-between items-start p-3 border border-transparent border-b-gray-200 dark:border-b-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900">
                        <span className="flex gap-2"><IoIosInformationCircleOutline className="mt-1 size-5 text-primary" /> Zutatenverwaltung - so geht's.</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Online-Kochbücher sind mittlerweile mit Werbung und Pop-Ups überladen - findest Du nicht auch?!</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </NoSidebarsLayout>
    );
}
