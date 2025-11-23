import { Ingredient } from '@/types/Ingredient';
import IngredientBadge from './IngredientBadge';
import { TbSalt } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { GoPlus } from 'react-icons/go';


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
            {/* Wenn keine Zutaten vorhanden */}
            {(!totalUserIngredients || totalUserIngredients.length === 0) && (
                <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-gray-600 dark:text-gray-400 text-center mb-2">
                        Du hast noch keine eigenen Zutaten angelegt.
                    </h4>
                    <Button asChild variant="primary" className="hover:bg-emerald-700 mb-5">
                        <Link href={route('ingredients.create')} title="Erstelle eine Zutat">
                            <GoPlus /> Zutat erstellen
                        </Link>
                    </Button>
                </div>
            )}
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
