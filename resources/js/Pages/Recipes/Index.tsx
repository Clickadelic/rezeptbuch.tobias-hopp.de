import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import RecipeCard from '@/components/reusables/RecipeCard';
import { Recipe } from '@/types/Recipe';
import Pagination from '@/components/reusables/Pagination';

/**
 * Displays a list of all recipes.
 *
 * The list is rendered as a grid of 1 column on small screens,
 * 3 columns on medium screens, and 4 columns on large screens.
 *
 * Each recipe is rendered as a RecipeCard component.
 *
 * The component expects a prop called `recipe` to be defined on the page.
 * This prop should contain an array of Recipe objects.
 */
export default function Recipes() {
    const { props } = usePage();
    const { recipes } = props;
    console.log(recipes);
    return (
        <FullWidthLayout title="Rezepte">
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {recipes.data.map((recipe: Recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
                {recipes.data.length === 0 && (
                    <p className="text-xl my-12 col-span-5 text-center text-gray-600">
                        Lege das erste Rezept an.
                    </p>
                )}
            </ul>
            <Pagination links={recipes.links} />
        </FullWidthLayout>
    );
}
