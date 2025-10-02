import RecipeCard from '@/components/reusables/RecipeCard';
import FullWidthLayout from '@/layouts/FullWidthLayout';
import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';
import { usePage, router } from '@inertiajs/react';

interface Paginated<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}

/**
 * Displays a list of search results.
 */
export default function Search() {
  const { recipes, filters } = usePage<
    SharedPageProps & { recipes: Paginated<Recipe>; filters: { search?: string } }
  >().props;

  return (
    <FullWidthLayout title="Suchergebnisse">
      {/* Optional: Aktueller Suchbegriff anzeigen */}
      {filters?.search && (
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
          Ergebnisse für: <span className="font-bold">{filters.search}</span>
        </h2>
      )}

      {recipes.data.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-5">
          {recipes.data.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
          Keine Rezepte gefunden.
        </p>
      )}

      {/* Pagination */}
      {recipes.links.length > 1 && (
        <div className="mt-8 flex justify-center gap-1 flex-wrap">
            {recipes.links.map((link, idx) => (
                <button
                key={idx}
                disabled={!link.url}
                onClick={() => link.url && router.get(link.url)}
                className={`px-3 py-1 rounded transition ${
                    link.active
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                </button>
            ))}
        </div>
      )}
    </FullWidthLayout>
  );
}
