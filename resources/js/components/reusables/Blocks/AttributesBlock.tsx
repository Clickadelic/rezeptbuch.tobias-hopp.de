import { IconMap } from '@/lib/icon-map';
import { GoClock, GoZoomIn } from 'react-icons/go';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { VscSymbolEvent } from 'react-icons/vsc';
import { GiBroccoli } from 'react-icons/gi';
import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface AttributesBlockProps {
    recipe: Recipe
    className?: string
}

// TODO: add more attributes
// TODO: Kategorie Cocktail mit Icon LiaCocktailSolid
export default function AttributesBlock ({ recipe, className }: AttributesBlockProps) {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            <div className="w-24 aspect-video gap-2 cursor-default flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg border-b border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                {IconMap[recipe.category?.slug ?? ''] ?? (
                    <LuUtensilsCrossed className="size-5 text-primary" />
                )}
                <p className=" text-gray-600 dark:text-gray-200 text-sm">
                    {recipe.category?.name}
                </p>
            </div>
            <div className="w-24 aspect-video gap-2 cursor-default flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg border-b border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                <VscSymbolEvent className="size-5 text-primary" />
                <p className=" text-gray-600 dark:text-gray-200 text-sm">
                    {recipe.difficulty}
                </p>
            </div>
            <div className="w-24 aspect-video gap-2 cursor-default flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg border-b border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                <GoClock className="size-5 text-primary" />
                <p className=" text-gray-600 dark:text-gray-200 text-sm">
                    {recipe.preparation_time} Minuten
                </p>
            </div>
            {recipe.is_veggy && (
                <div className="w-24 aspect-video gap-2 cursor-default flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg border-b border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                    <GiBroccoli className="size-5 text-primary" />
                    <p className=" text-gray-600 dark:text-gray-200 text-sm">
                        vegetarisch
                    </p>
                </div>
            )}
        </div>
    )
}