import { TfiCommentAlt } from 'react-icons/tfi';

import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface RecipeCardCommentProps {
    recipe: Recipe;
    className?: string;
}

export default function RecipeCardComment({ recipe, className }: RecipeCardCommentProps) {
    return (
        <div className={cn('flex justify-start gap-2 text-sm text-gray-800 dark:text-gray-200', className)}>
            <span className="flex gap-1">
                <span>{recipe?.comments_count ?? 0}</span>
                <span>{recipe?.comments_count === 1 ? 'Kommentar' : 'Kommentare'}</span>
            </span>
        </div>
    )
}