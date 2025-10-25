import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import chefkochSrc from '@images/svg/Chef-Tobias.svg';
import Carousel from '@/components/reusables/Carousel/Index';

export default function DailyRecommendationsBlock() {
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl">Tagestipps</h2>
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                    vom Chef persönlich
                </h3>
                <img
                    src={chefkochSrc}
                    className="w-full mx-auto sm:w-1/2 md:w-3/4"
                    alt="Chef Tobias"
                />
            </div>
            <Carousel
                wrapperClassname="lg:mt-40 col-span-2"
                carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800"
                itemClassName="card"
                recipes={recommendedRecipes?.data}
            />
        </div>
    );
}
