import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import WelcomeBlock from '@/components/reusables/Blocks/WelcomeBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import RecommendedRecipesBlock from '@/components/reusables/Blocks/RecommendedRecipesBlock';
import RecommendedCocktailsBlock from '@/components/reusables/Blocks/RecommendedCocktailsBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';
import StatsBlock from '@/components/reusables/Blocks/StatsBlock';
import RecipeCard from '@/components/reusables/SimpleRecipeCard';
import Pagination from '@/components/reusables/Pagination';
import BigRecipeCard from '@/components/reusables/AdvancedRecipeCard';

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
            <FaqAccordeon />
        </FullWidthLayout>
    );
}
