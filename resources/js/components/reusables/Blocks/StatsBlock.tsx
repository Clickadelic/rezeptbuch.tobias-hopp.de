import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { cn } from '@/lib/utils';

import { IoIosStats } from 'react-icons/io';
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { BsJournalBookmark } from "react-icons/bs";
import { TbSalt } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
interface StatsBlockProps {
    title?: string;
    punchline?: string;
    className?: string;
    totalRecipeCount?: number;
    totalIngredientCount?: number;
    totalCommentCount?: number;
}

/**
 * Displays a grid/block of recipe statistics.
 *
 * @param {string} [title] - The title of the block.
 * @param {string} [punchline] - A short string that is displayed below the title.
 * @param {string} [className] - Additional CSS classes to apply to the component.
 * @param {number} [totalRecipeCount] - The total number of recipes.
 * @param {number} [totalCommentCount] - The total number of comments.
 * @returns {JSX.Element} A JSX element representing the recipe statistics block.
 */
export default function StatsBlock({
    title,
    punchline,
    className,
    totalRecipeCount,
    totalIngredientCount,
    totalCommentCount,
}: StatsBlockProps) {
    return (
        <div className={cn('flex flex-col items-center justify-center', className)}>
            <TitleBlock
                title={title || 'Statistik'}
                punchline={punchline || 'Rezepte, Zutaten und Kommentare'}
                icon={<IoIosStats className="text-primary size-6 mt-1" />}
            />
            <div className="grid gap-24 sm:grid-cols-3 mt-12">
                <div className="flex flex-col items-center justify-center gap-2">
                    <BsJournalBookmark className="size-6 text-primary mb-3" />
                    <h5 className="text-2xl">{totalRecipeCount}</h5>
                    <h6 className="text-gray-600 dark:text-gray-400">Rezepte</h6>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <TbSalt className="size-6 text-primary mb-3" />
                    <h5 className="text-2xl">{totalIngredientCount || 0}</h5>
                    <h6 className="text-gray-600 dark:text-gray-400">Zutaten</h6>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <TfiCommentAlt className="size-6 text-primary mb-3" />
                    <h5 className="text-2xl">{totalCommentCount || 0}</h5>
                    <h6 className="text-gray-600 dark:text-gray-400">Kommentare</h6>
                </div>
            </div>
        </div> 
    );
}
