import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import WelcomeBlock from '@/components/reusables/Blocks/WelcomeBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import RecommendedRecipesBlock from '@/components/reusables/Blocks/RecommendedRecipesBlock';
import RecommendedCocktailsBlock from '@/components/reusables/Blocks/RecommendedCocktailsBlock';

import Seperator from '@/components/reusables/Seperator';
import StatsBlock from '@/components/reusables/Blocks/StatsBlock';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';
import { FaQ } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';

import { Recipe } from '@/types/Recipe';
import { Ingredient } from '@/types/Ingredient';
import { SharedPageProps } from '@/types';

/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * content blocks or seperators.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes.data;
    const recommendedCocktails = usePage<SharedPageProps>().props.cocktails.data;
    const totalRecipeCount = usePage<SharedPageProps>().props.totalRecipeCount;
    const totalIngredientCount = usePage<SharedPageProps>().props.totalIngredientCount;
    const totalCommentCount = usePage<SharedPageProps>().props.totalCommentCount;
    return (
        <FullWidthLayout
            title="Willkommen"
            showTitle={false}
            description="Willkommen auf Toby's Rezeptbuch. Was darf's sein? Hier gibt es leckere Rezepte aller Art für jeden Anlass und für jede Tageszeit. Vorspeisen, Hauptgerichte, Nachtisch, Cocktails sowie Backrezepte und Snacks. Schau' mal rein."
        >
            <WelcomeBlock className="mt-6" />
            <CategorySelectionBlock className="my-6 sm:my-10 md:my-16 lg:my-20" />
            <RecommendedRecipesBlock recipes={recommendedRecipes} />
            <Seperator style="journal" />
            <AuthTeaserBlock />
            <Seperator style="cocktail" />
            <RecommendedCocktailsBlock recipes={recommendedCocktails} />
            <Seperator />
            <StatsBlock totalRecipeCount={totalRecipeCount} totalIngredientCount={totalIngredientCount} totalCommentCount={totalCommentCount} className="asd" />
            <Seperator style="question-mark" />
            <TitleBlock
                title="Häufige Fragen"
                punchline="und Antworten"
                icon={<FaQ className="text-primary size-6 mt-1" />}
            />
            <div className={cn('w-full lg:max-w-xl mx-auto my-4 sm:my-6 md:my-8')}>
                <Accordion type="single" collapsible className="mb-8">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medium text-xl">
                            Warum diese Webseite?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Online-Kochbücher sind mittlerweile mit Werbung und Pop-Ups
                                überladen - findest Du nicht auch?!
                            </p>
                            <br />
                            <p>
                                Ich wollte schon immer ein Rezeptbuch haben, welches ich bequem in
                                der Tasche habe, falls mal etwas Inspiration zum Kochen für den
                                Alltag fehlt, oder ich eine Köstlichkeit mit Freunden teilen möchte.
                            </p>
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
                                Du kannst leckere Rezepte durchstöbern (und diese für Dich
                                verwenden). Wenn Du Lust hast, kannst Du Dich auch registrieren und
                                eigene Rezepte anlegen, sie verwalten und mit Anderen teilen.
                                Zusätzlich kannst Du natürlich auch Rezepte von anderen Nutzern
                                finden und sie zu Deinen Favoriten hinzufügen. Ganz ohne Werbung und
                                Pop-Ups.
                            </p>
                            <br />
                            <p>
                                Ich stelle das Rezeptbuch der Allgemeinheit zur Verfügung - wer
                                möchte, kann gerne mitmachen.
                            </p>
                            <br />
                            <p>
                                Updates, Verbesserungen oder Bugfixes in der Zukunft wird es geben.
                            </p>
                            <p>
                                Allerdings ungeregelmäßig - je nach dem, wie ich Zeit habe und was
                                gerade ansteht.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium text-xl">
                            Kann ich mich hier registrieren?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ja, die Registrierung mit Deiner E-Mail Adresse ist frei und
                                kostenlos. Erstelle einen Account, bestätige ihn kurz per Klick auf
                                den Link in Deiner Inbox, und schon kann es losgehen.
                            </p>
                            <br />
                            <p>
                                Versteckte Kosten gibt es nicht. Schau' in die{' '}
                                <Link
                                    href="/nutzungsbedingungen"
                                    title="Nutzungsbedingungen"
                                    className="underline underline-offset-2 text-primary hover:text-emerald-600"
                                >
                                    Nutzungsbedingungen
                                </Link>
                                .
                            </p>
                            <br />
                            <p>
                                Hier geht's{' '}
                                <Link
                                    href="/register"
                                    title="Nutzungsbedingungen"
                                    className="underline underline-offset-2 text-primary hover:text-emerald-600"
                                >
                                    zur Registrierung
                                </Link>
                                .
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
            </div>
        </FullWidthLayout>
    );
}
