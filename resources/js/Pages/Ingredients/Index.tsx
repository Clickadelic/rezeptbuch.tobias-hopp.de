import { Head, usePage } from '@inertiajs/react';
import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';

import { Ingredient } from '@/types/Ingredient';
import { Badge } from '@/components/ui/badge';
import MainSidebar from '@/components/sidebars/MainSidebar';
import IngredientForm from '@/components/forms/IngredientForm';

export default function IngredientsIndex() {
    const { props } = usePage();
    const { ingredients } = props;
    const user = props.auth.user;

    return (
        <>
            <Head title="Zutaten" />
            <NoSidebarsLayout title="Zutaten">
                <p>
                    Die Zutatenliste ist für alle Benutzer global. Dies hat den Vorteil, dass man
                    irgendwann bequem aus einem Pool an Zutaten auswählen kann, ohne diese jedes Mal
                    neu einzutippen. Mit der Zeit wird die Liste an Zutaten länger, die Zeit beim Anlegen eines Rezeptes kürzer.
                    Ist doch super, oder? Viel Spaß &amp; Erfolg.
                </p>
                {user && typeof user === 'object' && (
                    <>
                        <hr className="bg-slate-300 dark:bg-slate-700 my-5" />
                        <IngredientForm />
                    </>
                )}
                <hr className="my-5 bg-slate-300 dark:bg-slate-700" />
                <ul className="flex flex-row gap-2">
                    {ingredients.map((ingredient: Ingredient) => (
                        <li key={ingredient.id}>
                            <Badge variant="primary">{ingredient.name}</Badge>
                        </li>
                    ))}
                </ul>
                {ingredients.length === 0 && (
                    <p className="text-xl my-12 col-span-5 text-center text-slate-600">
                        Lege Deine erste Zutat an.
                    </p>
                )}
            </NoSidebarsLayout>
        </>
    );
}
