import { Link } from 'lucide-react';
import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import RecipeCard from '@/components/reusables/RecipeCard';
import BigRecipeCard from '@/components/reusables/BigRecipeCard';
import Pagination from '@/components/reusables/Pagination';

import { IoMdArrowForward } from 'react-icons/io';

import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';

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
    const recipes= usePage<SharedPageProps>().props.recipes;

    console.log(recipes);
    return (
        <FullWidthLayout title="Rezepte" description="Alle Rezepte in der Übersicht. Hier findest Du jedes Rezept.">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-5 px-2">
                {recipes?.data.map((recipe: Recipe) => (
                    <BigRecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </ul>
            {recipes?.data.length === 0 && (
                <>
                    <p className="text-xl my-12 col-span-5 text-center text-gray-600">
                        Lege das erste Rezept an.
                    </p>
                    <Link
                        href={route('recipes.create')}
                        className="flex items-center justify-center w-64 gap-2 text-base hover:text-primary font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                    >
                        Neues Rezept
                        <IoMdArrowForward className="asd" />
                    </Link>
                </>
            )}
            {recipes?.data.length && (
                <Pagination links={recipes.meta.links} className="mt-4 sm:mt-8 xl:mt-12" />
            )}
        </FullWidthLayout>
    );
}
