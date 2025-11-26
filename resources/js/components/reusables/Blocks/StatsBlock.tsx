import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { cn } from '@/lib/utils';

import { IoIosStats } from 'react-icons/io';
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

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
        <div className={cn('flex items-center justify-center', className)}>
            <div className="flex flex-col items-center justify-center">
                <TitleBlock
                    title="Statistik"
                    punchline="Aktuelle Zahlen"
                    icon={<IoIosStats className="text-primary size-6 mt-1" />}
                />
                <div className="flex items-center justify-center gap-8">
                    <div className="text-2xl flex flex-col items-center justify-center gap-1">
                        <span>{totalRecipeCount}</span>
                        <span className="text-gray-600 dark:text-gray-400">Rezepte</span>
                    </div>
                    <div className="text-2xl flex flex-col items-center justify-center gap-1">
                        <span>{totalIngredientCount || 0}</span>
                        <span className="text-gray-600 dark:text-gray-400">Zutaten</span>
                    </div>
                    <div className="text-2xl flex flex-col items-center justify-center gap-1">
                        <span>{totalCommentCount || 0}</span>
                        <span className="text-gray-600 dark:text-gray-400">Kommentare</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
