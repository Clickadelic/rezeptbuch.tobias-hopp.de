import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import DailyRecommendationsBlock from '@/components/reusables/Blocks/DailyRecommendationsBlock';
import CocktailRecommendationsBlock from '@/components/reusables/Blocks/CocktailRecommendationsBlock';
import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';
import CustomCarousel from '@/components/reusables/Carousel';

import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';


/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * content blocks or seperators.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes;
    console.log("Recommended Recipes", recommendedRecipes);
    return (
        <FullWidthLayout title="Willkommen" showTitle={false} description="Willkommen auf Toby's Rezeptbuch. Was darf's sein? Hier gibt es leckere Rezepte aller Art für jeden Anlass und für jede Tageszeit. Vorspeisen, Hauptgerichte, Nachtisch, Cocktails sowie Backrezepte und Snacks. Schau' mal rein.">
            <TitleBlock
                icon={<FaRegHeart className="text-primary size-6 mt-1" />}
                title="Willkommen"
                punchline="Was darf's sein?"
                children={
                    <Button asChild variant="primary">
                        <Link href={route('recipes.index')} title="Zu den Rezepten">
                            Zu den Rezepten
                            <IoMdArrowForward />
                        </Link>
                    </Button>
                }
            />
            <CategorySelectionBlock />
            <Seperator style="cocktail" />
            <AuthTeaserBlock />
            <Seperator style="mix" />
            <DailyRecommendationsBlock />
            <CocktailRecommendationsBlock />
            <Seperator style="mix" />
            <FaqAccordeon />
            <CustomCarousel recipes={recommendedRecipes} className="mt-8" />
        </FullWidthLayout>
    );
}
