import { usePage } from '@inertiajs/react';

import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';

import { Ingredient } from '@/types/Ingredient';

import IngredientForm from '@/components/forms/IngredientForm';
import BadgeButton from '@/components/reusables/BadgeButton';
import { SharedPageProps } from '@/types';

export default function IngredientsIndex() {
    const { props } = usePage<SharedPageProps>();
    const { ingredients } = props;
    const user = props.auth.user;

    return (
        <NoSidebarsLayout title="Zutaten">
            {user && typeof user === 'object' && (
                <>
                    <IngredientForm />
                    <hr className="bg-gray-300 dark:bg-gray-700 my-5" />
                </>
            )}
            <ul className="flex flex-row gap-3 justify-start items-center flex-wrap">
                {ingredients?.map((ingredient: Ingredient) => (
                    <li key={ingredient.id}>
                        <BadgeButton ingredient={ingredient} />
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
