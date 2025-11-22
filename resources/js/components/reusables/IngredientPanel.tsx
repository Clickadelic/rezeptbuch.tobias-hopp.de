import { Ingredient } from '@/types/Ingredient';
import IngredientBadge from './IngredientBadge';
import { TbSalt } from 'react-icons/tb';

import { cn } from '@/lib/utils';

interface IngredientPanelProps {
    totalUserIngredients: Ingredient[];
    totalUserIngredientCount: number;
    className?: string;
}

export default function IngredientPanel({
    totalUserIngredients,
    totalUserIngredientCount,
    className,
}: IngredientPanelProps) {
    return (
        <div
            className={cn(
                'bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700 pb-4',
                className,
            )}
        >
            <h3 className="text-lg mb-3 flex gap-2">
                <TbSalt className="mt-1 text-primary" />
                Deine Zutaten
                {totalUserIngredientCount >= 1 && (
                    <span className="text-gray-400 dark:text-gray-400">({totalUserIngredientCount})</span>
                )}
            </h3>
            <ul className="flex flex-wrap gap-2">
                {totalUserIngredients?.map((ingredient: Ingredient) => (
                    <li key={ingredient.id} className="flex flex-wrap">
                        <IngredientBadge ingredient={ingredient} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
