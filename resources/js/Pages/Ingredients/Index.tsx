import { Head, usePage } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';

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
            <SidebarLeftLayout title="Zutaten" sidebar={<MainSidebar />}>
                {user && typeof user === 'object' && (
                    <>
                        <IngredientForm />
                        <hr className="my-5" />
                    </>
                )}
                <p>
                    Die Zutatenliste ist für alle Benutzer global. Bietet den Vorteil, dass man
                    irgendwann bequem aus einem Pool an Zutaten auswählen kann, ohne diese jedes Mal
                    neu einzutippen.
                </p>
                <hr className="my-5" />
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
            </SidebarLeftLayout>
        </>
    );
}
