import { usePage } from '@inertiajs/react';

import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';

import { Ingredient } from '@/types/Ingredient';

import IngredientForm from '@/components/forms/IngredientForm';
import BadgeButton from '@/components/reusables/BadgeButton';
export default function IngredientsIndex() {
    const { props } = usePage();
    const { ingredients } = props;
    const user = props.auth.user;

    return (
        <NoSidebarsLayout title="Zutaten">
            <p>
                Die Zutatenliste ist für alle Benutzer global. Dies hat den Vorteil, dass man
                irgendwann bequem aus einem Pool an Zutaten auswählen kann, ohne diese jedes Mal
                neu einzutippen. Mit der Zeit wird die Liste an Zutaten länger, die Zeit beim
                Anlegen eines Rezeptes kürzer. Ist doch super, oder? Viel Spaß &amp; Erfolg.
            </p>
            {user && typeof user === 'object' && (
                <>
                    <hr className="bg-gray-300 dark:bg-gray-700 my-5" />
                    <IngredientForm />
                </>
            )}
            <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
            <ul className="flex flex-row gap-3 justify-start items-center flex-wrap">
                {ingredients.map((ingredient: Ingredient) => (
                    <li key={ingredient.id}>
                        <BadgeButton ingredient={ingredient} />
                    </li>
                ))}
            </ul>
            {ingredients.length === 0 && (
                <p className="text-xl my-12 col-span-5 text-center text-gray-600">
                    Lege Deine erste Zutat an.
                </p>
            )}
        </NoSidebarsLayout>
    );
}
