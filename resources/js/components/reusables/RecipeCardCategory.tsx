import { LuUtensilsCrossed } from 'react-icons/lu';
import { Recipe } from '@/types/Recipe';
import { CategoryIconMap } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

interface RecipeCardCategoryProps {
    recipe: Recipe;
    className?: string;
}

export default function RecipeCardCategory({ recipe, className }: RecipeCardCategoryProps) {
    return (
        <div className={cn('flex gap-2', className)}>
            {recipe && recipe.category && (
                <span className="text-primary">
                    {CategoryIconMap[recipe.category.slug ?? ''] ?? (
                        <LuUtensilsCrossed className="size-4 text-primary" />
                    )}
                </span>
            )}
            <span className="text-gray-800 dark:text-gray-200">
                {recipe?.category?.name ?? 'Nicht kategorisiert'}
            </span>
        </div>
    );
}
