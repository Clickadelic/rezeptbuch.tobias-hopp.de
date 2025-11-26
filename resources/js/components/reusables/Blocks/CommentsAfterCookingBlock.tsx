import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import decorationSvg from '@images/svg/Hamburger-bro.svg';

export default function UnnamedBlock() {
    const recommendedRecipes = usePage<SharedPageProps>().props.recipes;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <FaqAccordeon />
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl">Wie war's?</h2>
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                    Schreib' einen Kommentar
                </h3>
                <img
                    src={decorationSvg}
                    className="size-64 mx-auto sm:w-1/2 md:w-3/4"
                    alt="Chef Tobias"
                />
            </div>
        </div>
    );
}
