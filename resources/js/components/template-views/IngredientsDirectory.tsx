'use client';

import { usePage } from '@inertiajs/react';
import { useState, useMemo } from 'react';
import IngredientForm from '@/components/forms/IngredientForm';
import IngredientItem from './IngredientItem';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SharedPageProps } from '@/types';
import { Ingredient } from '@/types/Ingredient';
import { BsArrow90DegUp } from 'react-icons/bs';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { usePermissions } from '@/hooks/usePermissions';
import { cn } from '@/lib/utils';

export default function IngredientsDirectory() {
    const { hasRole } = usePermissions();
    const ingredientList = usePage<SharedPageProps>().props.ingredients ?? [];

    // State für die aktuell ausgewählte Zutat
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | undefined>(undefined);

    // Alphabet erzeugen A-Z
    const alphabet = Array.from(Array(26)).map((_, i) => String.fromCharCode(65 + i));

    // Zutaten nach Buchstabe gruppieren
    const grouped = useMemo(() => {
        const groups: Record<string, Ingredient[]> = {};
        ingredientList.forEach((ingredient) => {
            const letter = ingredient.name[0].toUpperCase();
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(ingredient);
        });
        return groups;
    }, [ingredientList]);

    return (
        <div className="space-y-8">
            {hasRole('user') && (
                <IngredientForm
                    key={selectedIngredient?.id || 'new'}
                    ingredient={selectedIngredient}
                    onFinished={() => setSelectedIngredient(undefined)}
                    className="mb-8"
                />
            )}
            {/* Alphabet Navigation */}
            <nav className="flex flex-wrap gap-1 md:gap-1.5 justify-center items-center mb-4 sticky top-0 bg-gray-100 rounded dark:bg-gray-900 z-10 p-2 border-b border-gray-200 dark:border-gray-700">
                {alphabet.map((letter) => (
                    <a
                        key={letter}
                        href={`#${letter}`}
                        className=" px-2 py-1 rounded hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                    >
                        {letter}
                    </a>
                ))}
            </nav>
            {/* Inhaltsabschnitte */}
            {alphabet.map(
                (letter) =>
                    grouped[letter] && (
                        <>
                            <section key={letter} id={letter} className="scroll-mt-24 p-4 rounded-md transition-all duration-200 border border-transparent hover:border-b-gray-200 dark:hover:border-b-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 hover:cursor-default">
                                <Card>
                                    <CardHeader className="text-lg font-bold w-full flex flex-row justify-between">
                                        <span>{letter}</span>
                                        <a
                                            href="#zutaten-eingabe"
                                            className="text-gray-400 text-xs font-normal flex gap-2 hover:text-primary mt-2"
                                        >
                                            <BsArrow90DegUp /> nach oben
                                        </a>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="px-5 flex flex-wrap gap-2">
                                            {grouped[letter].map((ingredient) => (
                                                <li key={ingredient.id} className="after:content-[',_'] last:after:content-['']">
                                                    <IngredientItem
                                                        ingredient={ingredient}
                                                        onSelect={() =>
                                                            setSelectedIngredient(ingredient)
                                                        }
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                                
                            </section>
                            <Separator className="my-4" />
                        </>
                    ),
            )}
            {hasRole('user') && (
                <Accordion type="single" collapsible className="p-0 rounded-sm my-8 border border-transparent border-b-gray-200 dark:border-b-gray-700 bg-gray-100 dark:bg-gray-900">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="px-3 py-2.5">
                            <span className="flex gap-2"><IoIosInformationCircleOutline className="mt-1 size-5 text-primary" />Zutatenverwaltung - so geht's.</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-5">
                        <ul className="list-decimal space-y-3 list-inside">
                            <li>Die Zutaten werden global für alle Benutzer angelegt und verwaltet. Dies hat den Vorteil, dass alle Benutzer aus dem ständig wachsenden Pool an Zutaten auswählen können.</li>
                            <li>Legst Du eine neue Zutat an, egal ob hier einzeln oder beim Anlegen eines Rezeptes im Formular, wird sie automatisch in der Zutatenverwaltung angelegt und hier angezeigt.</li>
                            <li>Die Zutat ist dann per Klick auf den Namen/Link editierbar.</li>
                            <li>Sollte die Zutat noch in einem Rezept verwendet werden, wird das Löschen systemseitig nicht zugelassen.</li>
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </div>
    );
}
