import { useMediaQuery } from '@/hooks/useMediaQuery';
import Carousel from '@/components/reusables/Carousel/Index';
import cocktailBro from "@images/svg/Cocktail-bartender-bro.svg";
import { Recipe } from '@/types/Recipe';

interface DailyRecommendationsBlockProps {
    recipes: Recipe[];
}

export default function CocktailRecommendationsBlock({ recipes }: DailyRecommendationsBlockProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Text & Image */}
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center order-1 lg:order-2">
                <h2 className="text-2xl">Leckere Cocktails</h2>
                <h3 className="text-xl text-gray-500 dark:text-gray-400 font-yellowtail">für einen schönen Abend</h3>
                <img
                    src={cocktailBro}
                    className="w-full mx-auto sm:w-1/2 md:w-3/4 lg:rotate-y-180 mb-5 sm:mb-0"
                    alt="Barkeeper Tobias"
                />
            </div>

            {/* Carousel */}
            <Carousel
                wrapperClassname="col-span-1 lg:col-span-2 order-2 lg:order-1 lg:mt-40"
                carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800 carousel-recommended-cocktails"
                itemClassName="card-recommended-cocktail"
                recipes={recipes}
            />
        </div>
    );
}
