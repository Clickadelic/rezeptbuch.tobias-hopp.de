import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import cocktailBro from "@images/svg/Cocktail-bartender-bro.svg";

import Carousel from '@/components/reusables/Carousel/Index';

/**
 * A component that displays a block of daily recommended recipes.
 * The block contains a title, a personal message from the chef, and a carousel of recipe cards.
 * The layout of the block is responsive and changes depending on the screen size.
 */
export default function CocktailRecommendationsBlock() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const cocktails = usePage<SharedPageProps>().props.cocktails;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl">Leckere Cocktails</h2>
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                    vom Chef persönlich
                </h3>
                <img
                    src={cocktailBro}
                    className="w-full mx-auto sm:w-1/2 md:w-3/4"
                    alt="Chefkoch Tobias"
                />
            </div>
            <Carousel
                wrapperClassname="lg:mt-40 col-span-2"
                carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800"
                itemClassName="card"
                recipes={cocktails?.data}
            />
        </div>
    );
}
