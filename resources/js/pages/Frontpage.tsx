import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import WelcomeBlock from '@/components/reusables/Blocks/WelcomeBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import DailyRecommendationsBlock from '@/components/reusables/Blocks/DailyRecommendationsBlock';
import CocktailRecommendationsBlock from '@/components/reusables/Blocks/CocktailRecommendationsBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';

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
    const latestRecipe = usePage<SharedPageProps>().props.latestRecipe;
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes;
    const recommendedCocktails = usePage<SharedPageProps>().props.cocktails;
    const totalRecipeCount = usePage<SharedPageProps>().props.totalRecipeCount;

    return (
        <FullWidthLayout title="Willkommen" showTitle={false} description="Willkommen auf Toby's Rezeptbuch. Was darf's sein? Hier gibt es leckere Rezepte aller Art für jeden Anlass und für jede Tageszeit. Vorspeisen, Hauptgerichte, Nachtisch, Cocktails sowie Backrezepte und Snacks. Schau' mal rein.">
            <WelcomeBlock />
            <CategorySelectionBlock />
            <Seperator style="journal" />
            <AuthTeaserBlock />
            <Seperator style="sun" />
            <DailyRecommendationsBlock recipes={recommendedRecipes.data} />
            <Seperator style="cocktail" />
            <CocktailRecommendationsBlock recipes={recommendedCocktails.data} />
            <Seperator style="question-mark" />
            <FaqAccordeon />
        </FullWidthLayout>
    );
}