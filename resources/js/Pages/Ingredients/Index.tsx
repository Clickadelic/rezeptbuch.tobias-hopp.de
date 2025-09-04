import { Head, usePage } from '@inertiajs/react';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';

import { Ingredient } from '@/types/Ingredient';
import { Badge } from '@/Components/ui/badge';
import LeftSidebar from '@/Components/sidebars/LeftSidebar';

export default function IngredientsIndex() {
    const { props } = usePage();
    const { ingredients } = props;

    return (
        <>
            <Head title="Zutaten" />
            <SidebarLeftLayout title="Zutaten" sidebar={<LeftSidebar />}>
                
                <ul className="flex flex-row gap-2">
                    {ingredients.map((ingredient: Ingredient) => (
                        <li key={ingredient.id}><Badge variant="primary">{ingredient.name}</Badge></li>
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
