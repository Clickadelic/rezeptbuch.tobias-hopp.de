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
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
    const [isBlurred, setIsBlurred] = useState<boolean>(false);
    const { results } = usePage<SharedPageProps>().props;

    console.log(results)
    const toggleBlurMenu = () => {
        setIsBlurred(!isBlurred);
    }
    return (
        <div className={cn("relative w-full h-48 lg:h-72 bg-[url('../images/brooke-lark-kXQ3J7_2fpc-unsplash.jpg')] dark:bg-[url('../images/brooke-lark-M4E7X3z80PQ-unsplash-cut.jpg')] bg-cover bg-center flex flex-col justify-center items-center")}>
            
            <div
                className={cn(
                    "absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white/30 dark:bg-gray-800/30 animate transition-all duration-200 ease opacity-0 pointer-events-none",  // standard unsichtbar
                    isBlurred && "backdrop-blur-sm opacity-100 pointer-events-auto"
                )}
            >

            </div>
            
            <div className="z-20 bg-white/30 dark:bg-gray-800/30 dark:text-gray-200 p-1 rounded w-64 md:w-72 lg:w-96">
                <form method="GET" action={route('recipes.search')} className="flex flex-row justify-end items-center place-items-center bg-white dark:bg-gray-800 dark:text-gray-200 p-1 rounded space-x-1">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete='off'
                        onFocus={toggleBlurMenu}
                        onBlur={toggleBlurMenu}
                        className="w-full font-medium text-base border-none rounded bg-white dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-gray-800"
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
                <div className={cn("p-1 h-0 transition-all duration-200 ease", !isBlurred && "opacity-0")}>
                    <ul className="grid grid-cols-3 gap-.5">
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><TbSalad className="mr-2 text-primary" />Vorspeisen</Link></li>
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><GiKnifeFork className="mr-2 text-primary" />Hauptgericht</Link></li>
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><GiCakeSlice className="mr-2 text-primary" />Nachtisch</Link></li>
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><LiaCocktailSolid className="mr-2 text-primary" />Cocktail</Link></li>
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><GiCakeSlice className="mr-2 text-primary" />Backen</Link></li>
                        <li><Link className={cn("text-gray-600 border border-gray-600 flex p-1 py-3 items-center justify-center bg-white rounded text-sm")}><GiCrystalBars className="mr-2 text-primary" />Snack</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
