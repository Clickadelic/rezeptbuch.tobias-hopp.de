import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientForm from '@/components/forms/IngredientForm';
import IngredientButton from '@/components/reusables/IngredientButton';
import { usePermissions } from '@/hooks/usePermissions';
import { Ingredient } from '@/types/Ingredient';
import { SharedPageProps } from '@/types';

export default function IngredientsIndex() {
    const { props } = usePage<SharedPageProps>();
    const { isOwner, hasRole } = usePermissions();
    const { ingredients } = props;
    const auth = props.auth;

    const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(null);

    return (
        <NoSidebarsLayout title="Zutaten">
            {hasRole('user') && (
                <>
                    <IngredientForm
                        ingredient={editingIngredient ?? undefined}
                        className="mb-5"
                        // optional: Callback nach dem Speichern zurücksetzen
                        onFinished={() => setEditingIngredient(null)}
                    />
                    <hr className="bg-gray-300 dark:bg-gray-700 my-5" />
                </>
            )}

            <ul className="flex flex-row gap-3 justify-start items-center flex-wrap">
                {ingredients?.map((ingredient: Ingredient) => (
                    <li key={ingredient.id}>
                        <IngredientButton
                            ingredient={ingredient}
                            onClick={(ing) => setEditingIngredient(ing)}
                        />
                    </li>
                ))}
            </ul>

            {ingredients?.length === 0 && (
                <p className="text-xl my-12 col-span-5 text-center text-gray-600">
                    Lege die erste Zutat an.
                </p>
            )}
        </NoSidebarsLayout>
    );
}
