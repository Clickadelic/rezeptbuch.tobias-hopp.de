import { cn } from '@/lib/utils';

import { LuUtensilsCrossed } from 'react-icons/lu';
import { Recipe } from '@/types/Recipe';

import { IconMap } from '@/lib/icon-map';

interface RecipeCardCategoryProps {
    recipe: Recipe;
    className?: string;
}

export default function RecipeCardCategory({ recipe, className }: RecipeCardCategoryProps) {
    return (
        <div className={cn('flex gap-2', className)}>
            {recipe && recipe.category && (
                <span className="text-primary mt-px">
                    {IconMap[recipe.category.slug ?? ''] ?? (
                        <LuUtensilsCrossed className="size-4 text-primary" />
                    )}
                </span>
            )}
            <span className="text-sm text-gray-800 dark:text-gray-200">
                {recipe?.category?.name ?? 'Nicht kategorisiert'}
            </span>
        </div>
    );
}
