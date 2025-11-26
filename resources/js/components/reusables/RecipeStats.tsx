import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { cn } from '@/lib/utils';

import { IoIosStats } from "react-icons/io";
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';



interface RecipeStatsProps {
    title?: string;
    punchline?: string;
    className?: string;
    totalRecipeCount?: number
    totalIngredientCount?: number
}

/**
 * Displays a grid/block of recipe statistics.
 * 
 * @param {string} [title] - The title of the block.
 * @param {string} [punchline] - A short string that is displayed below the title.
 * @param {string} [className] - Additional CSS classes to apply to the component.
 * @param {number} [totalRecipeCount] - The total number of recipes.
 * @returns {JSX.Element} A JSX element representing the recipe statistics block.
 */
export default function RecipeStats({ title, punchline, className, totalRecipeCount, totalIngredientCount }: RecipeStatsProps) {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div className="flex flex-col items-center justify-center">
                <TitleBlock title="Statistik" punchline="Aktuelle Zahlen" icon={<IoIosStats className="text-primary size-6 mt-1" />} />
                <div className="flex items-center justify-center gap-5">
                    <div className="text-2xl flex flex-col items-center justify-center gap-1"><span>{totalRecipeCount}</span><span className="text-gray-600 dark:text-gray-400">Rezepte</span></div>
                    <div className="text-2xl flex flex-col items-center justify-center gap-1"><span>{totalIngredientCount || 0}</span><span className="text-gray-600 dark:text-gray-400">Zutaten</span></div>
                </div>
                <Button asChild variant="primary" className="mt-12">
                    <Link href={route('recipes.index')} title="Zu den Rezepten">
                        Zu den Rezepten
                        <IoMdArrowForward />
                    </Link>
                </Button>
            </div>
        </div>
    )
}