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
import { GoClock, GoPlus, GoStar, GoZoomIn } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { LuUtensilsCrossed } from "react-icons/lu";
import { VscSymbolEvent } from 'react-icons/vsc';
import { BsFillGearFill } from "react-icons/bs";
import { FaHeart } from 'react-icons/fa6';
/**
 * A search bar for recipes.
 *
 * Displays a search bar with a text input and a submit button. The search bar is
 * responsive and will adjust its size based on the screen size.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function RecipeSearchHeader() {
    const [isBlurred, setIsBlurred] = useState<boolean>(false);

    return (
        <div className={cn("relative w-full h-48 lg:h-72 bg-[url('../images/Cocktail-at-the-pool.jpg')] dark:bg-[url('../images/brooke-lark-M4E7X3z80PQ-unsplash-cut.jpg')] bg-cover bg-center flex flex-col justify-between items-center")}>
            
            <div className="w-full h-1 backdrop backdrop-blur"></div>

                <div
                    className={cn(
                        "absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40 dark:bg-gray-800/30 animate transition-all duration-200 ease opacity-0 pointer-events-none",  // standard unsichtbar
                        isBlurred && "backdrop-blur-xs opacity-100 pointer-events-auto"
                    )}
                >
                </div>
                
                <div className={cn("bg-white/30 dark:bg-gray-800/30 flex flex-col p-1 rounded mx-4 my-6 animate ease-in-out transition-all duration-200", isBlurred ? 'lg:w-[32rem]' : 'lg:w-[28rem]')}>
                    <form method="GET" action={route('recipes.search')} className={cn("w-full flex flex-row justify-end items-center place-items-center bg-white dark:bg-gray-800 p-1 space-x-1 relative z-30 animate ease-in-out transition-all duration-200", isBlurred ? 'rounded-tl rounded-tr' : '')}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            autoComplete='off'
                            onFocus={() => setIsBlurred(true)}
                            onBlur={() => setIsBlurred(false)}
                            className="w-full text-base border-none rounded bg-white dark:bg-gray-800 dark:border border-transparent hover:border-primary text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-gray-800"
                            placeholder={isBlurred ? 'Wähle eine Kategorie oder gib ein Schlagwort ein...' : 'Was essen wir heute?'}
                        />
                        <Button
                            type="submit"
                            className="bg-primary dark:bg-primary dark:text-gray-200 rounded border-none px-3 py-2"
                            aria-label="Suchen"
                        >
                            <RiSearchLine className="size-6" />
                        </Button>
                    </form>
                    <ul className={cn("p-0 overflow-hidden place-items-center items-center justify-center grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 z-30 h-0 animate transistion-all duration-200 ease bg-white dark:bg-gray-800 rounded-bl rounded-br", isBlurred && "h-[76px] p-1 gap-1")}>
                        <li><Link href={route('recipes.search', { search: 'Vorspeise' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zu den Vorspeisen"><TbSalad className="size-6" /><span className="invisble sm:visible">Vorspeisen</span></Link></li>
                        <li><Link href={route('recipes.search', { search: 'Hauptgericht' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zu den Hauptgängen"><PiCookingPot className="size-6" /><span className="invisble sm:visible">Hauptgang</span></Link></li>
                        <li><Link href={route('recipes.search', { search: 'Nachtisch' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zum Nachtisch"><RiCake3Line className="size-6" /><span className="invisble sm:visible">Nachtisch</span></Link></li>
                        <li><Link href={route('recipes.search', { search: 'Cocktail' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zu den Cocktails"><LiaCocktailSolid className="size-6" /><span className="invisble sm:visible">Cocktails</span></Link></li>
                        <li><Link href={route('recipes.search', { search: 'Backen' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zum Backen"><GiCakeSlice className="size-6" /><span className="invisble sm:visible">Backen</span></Link></li>
                        <li><Link href={route('recipes.search', { search: 'Snack' })} className={cn("flex text-gray-600 hover:text-primary p-3 items-center justify-center sm:text-sm flex-col gap-1")} title="Zu den Snacks"><GiCrystalBars className="size-6" /><span className="invisble sm:visible">Snack</span></Link></li>
                    </ul>
                </div>

            <div className="w-full h-1 backdrop backdrop-blur"></div>
        </div>
    );
}
