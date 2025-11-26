import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import WelcomeBlock from '@/components/reusables/Blocks/WelcomeBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import DailyRecommendationsBlock from '@/components/reusables/Blocks/DailyRecommendationsBlock';
import CocktailRecommendationsBlock from '@/components/reusables/Blocks/CocktailRecommendationsBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';
import RecipeStats from '@/components/reusables/RecipeStats';
import RecipeCard from '@/components/reusables/RecipeCard';
import Pagination from '@/components/reusables/Pagination';
import BigRecipeCard from '@/components/reusables/BigRecipeCard';

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
    const latestRecipe = usePage<SharedPageProps>().props.latestRecipe;
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes.data;
    const recommendedCocktails = usePage<SharedPageProps>().props.cocktails.data;
    const totalRecipeCount = usePage<SharedPageProps>().props.totalRecipeCount;
    const totalIngredientCount = usePage<SharedPageProps>().props.totalIngredientCount;
    console.log("totalIngredientCount", totalIngredientCount)
    return (
        <FullWidthLayout title="Willkommen" showTitle={false} description="Willkommen auf Toby's Rezeptbuch. Was darf's sein? Hier gibt es leckere Rezepte aller Art für jeden Anlass und für jede Tageszeit. Vorspeisen, Hauptgerichte, Nachtisch, Cocktails sowie Backrezepte und Snacks. Schau' mal rein.">
            <WelcomeBlock />
            <CategorySelectionBlock />
            <Seperator style="sun" />
            <DailyRecommendationsBlock recipes={recommendedRecipes} />
            <Seperator style="journal" />
            <AuthTeaserBlock />
            <Seperator style="cocktail" />
            <CocktailRecommendationsBlock recipes={recommendedCocktails} />
            <Seperator />
            <RecipeStats totalRecipeCount={totalRecipeCount} totalIngredientCount={totalIngredientCount} className="mb-12" />
            <Seperator style="question-mark" />
            <FaqAccordeon />
        </FullWidthLayout>
    );
}