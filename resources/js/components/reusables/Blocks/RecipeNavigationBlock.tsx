import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import RecipeContextMenu from '@/components/reusables/RecipeContextMenu';

import { Recipe } from '@/types/Recipe';


import { cn } from '@/lib/utils';

interface RecipeNavigationBlockProps {
    recipe: Recipe
    className?: string
}

export default function RecipeNavigationBlock({ recipe, className }: RecipeNavigationBlockProps) {
    return (
        <div className={cn('w-full flex justify-between gap-2 items-center', className)}>
            <Button asChild variant="link"><Link href="/rezepte">Zurück zur Rezeptübersicht</Link></Button>
            <RecipeContextMenu recipe={null} dotStyle="vertical" />
        </div>
    );
}