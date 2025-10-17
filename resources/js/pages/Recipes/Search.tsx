import { usePage } from '@inertiajs/react';

import Pagination from '@/components/reusables/Pagination';
import RecipeCard from '@/components/reusables/RecipeCard';
import FullWidthLayout from '@/layouts/FullWidthLayout';

import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';
import Paginated from '@/types/Paginated';

/**
 * Displays a list of search results.
 */
export default function Search() {
    // TODO: Better understand how this works
    const { recipes, filters } = usePage<
        SharedPageProps & { recipes: Paginated<Recipe>; filters: { search?: string } }
    >().props;
    return (
        <FullWidthLayout title={`Suchergebnisse für ${filters.search}`}>
            {recipes.data.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-5">
                    {recipes.data.map((recipe : Recipe) => (
                        <li key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-400 my-12">
                    Keine Rezepte gefunden.
                </p>
            )}
            <Pagination links={recipes.links} />
        </FullWidthLayout>
    );
}
