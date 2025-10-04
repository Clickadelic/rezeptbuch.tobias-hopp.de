import { Button } from '@/components/ui/button';
import { RiSearchLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import { useState } from 'react';

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';


/**
 * A search bar for recipes.
 *
 * Displays a search bar with a text input and a submit button. The search bar is
 * responsive and will adjust its size based on the screen size.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function RecipeSearch() {
    const [isBlurred, setIsBlurred] = useState<boolean>(false);

    return (
        <div className={cn("relative w-full h-48 lg:h-72 bg-[url('../images/Spaghetti-Ingredients.jpg')] dark:bg-[url('../images/brooke-lark-M4E7X3z80PQ-unsplash-cut.jpg')] bg-cover bg-center flex flex-col justify-center items-center")}>
            
            <div
                className={cn(
                    "absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/10 dark:bg-gray-800/30 animate transition-all duration-500 ease opacity-0 pointer-events-none",  // standard unsichtbar
                    isBlurred && "backdrop-blur-sm opacity-100 pointer-events-auto"
                )}
            >
            </div>
            
            <div className={cn("z-20 bg-white/30 dark:bg-gray-800/30 flex flex-col gap-1 dark:text-gray-200 p-1 rounded mx-4 my-6 lg:w-[36rem]")}>
                <form method="GET" action={route('recipes.search')} className="flex flex-row justify-end items-center place-items-center bg-white dark:bg-gray-800 dark:text-gray-200 p-1 rounded space-x-1">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete='off'
                        onFocus={() => setIsBlurred(true)}
                        onBlur={() => setIsBlurred(false)}
                        className="w-full text-base border-none rounded bg-white dark:bg-gray-800 dark:border border-transparent hover:border-primary text-gray-200 focus:outline-none focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-gray-800"
                        placeholder="Was essen wir heute?"
                    />
                    <Button
                        type="submit"
                        className="bg-primary dark:bg-primary dark:text-gray-200 rounded border-none px-3 py-2"
                        aria-label="Suchen"
                    >
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
