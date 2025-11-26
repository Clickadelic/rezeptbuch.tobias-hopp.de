import { Link } from '@inertiajs/react';
import { Ingredient } from '@/types/Ingredient';
import { cn } from '@/lib/utils';

interface IngredientBadgeProps {
    ingredient: Ingredient;
    className?: string;
}

export default function IngredientBadge({ ingredient, className }: IngredientBadgeProps) {
    return (
        <Link
            href={`/zutaten#${ingredient.name.charAt(0).toUpperCase()}`}
            className={cn(
                'text-xs px-2 py-[3px] bg-primary hover:bg-emerald-700 text-white rounded-sm',
                className,
            )}
        >
            {ingredient.name}
        </Link>
    );
}
