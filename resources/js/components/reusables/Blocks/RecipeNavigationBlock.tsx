import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import RecipeContextMenu from '@/components/reusables/RecipeContextMenu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Recipe } from '@/types/Recipe';
import { IoReturnUpBack } from "react-icons/io5";

import { cn } from '@/lib/utils';

interface RecipeNavigationBlockProps {
    recipe: Recipe
    className?: string
}

export default function RecipeNavigationBlock({ recipe, className }: RecipeNavigationBlockProps) {
    return (
        <div className={cn('w-full flex justify-between gap-2 items-center', className)}>
            <Link href="/rezepte" className="text-primary flex gap-2 hover:underline hover:text-primary hover:underline-offset-4">
                <IoReturnUpBack className="size-5" />Zurück zur Rezeptübersicht
            </Link>
            <RecipeContextMenu recipe={null} dotStyle="vertical" />
        </div>
    );
}