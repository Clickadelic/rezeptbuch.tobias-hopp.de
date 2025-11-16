import { usePage } from '@inertiajs/react';

import { Link } from '@inertiajs/react';


import { Ingredient } from '@/types/Ingredient';

import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

interface IngredientBadgeProps {
    ingredient: Ingredient
    className?: string
}



export default function IngredientBadge({ ingredient, className }: IngredientBadgeProps) {
    return (
        <Badge
            variant="secondary"
            className={cn("text-xs", className)}
        >
            {ingredient.name}
        </Badge>
    )
}