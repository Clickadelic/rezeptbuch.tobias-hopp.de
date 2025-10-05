
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { IoMdArrowForward } from 'react-icons/io';

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BsBookmarkHeart, BsDoorOpen } from 'react-icons/bs';
import { BsJournalBookmark } from 'react-icons/bs';

interface GridLinkItemProps {
    icon?: React.ReactNode
    title?: string
    punchline?: string
    buttonText?: string
    href?: string
    className?: string
}

/**
 * A reusable component for displaying a link with an icon and a title.
 * This component is used for displaying links in a grid layout.
 * ONLY USED ON THE FRONTPAGE
 *
 * @param {React.ReactNode} icon - An icon to display before the title.
 * @param {string} title - A title to display.
 * @param {string} punchline - A short punchline to display below the title.
 * @param {string} buttonText - A button text to display.
 * @param {string} href - A link to navigate to.
 * @param {string} className - Additional classnames to apply to the component.
 *
 * @example
 * <GridLinkItem icon={<TbSalad />} title="Vorspeise" punchline="Salat" buttonText="Discover" />
 */
export default function GridLinkItem({ icon, title, punchline, buttonText, href, className }: GridLinkItemProps) {
    return (
        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-lg md:text-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12", className)}>
            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                {icon}{title}
            </span>
            <span className="font-la-belle-aurore text-sm sm:text-md md:text-xl text-gray-500 dark:text-gray-400">{punchline}</span>
            <Link
                href={route('recipes.search', { search: 'Vorspeise' })}
                className="flex items-center justify-center w-48 sm:w-56 text-xs sm:text-md md:text-base gap-2 hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-1 sm:px-2 md:px-4 py-2"
                title={title}
                aria-label={title}
                >{buttonText}<IoMdArrowForward className="asd" />
            </Link>
        </div>
    )
}