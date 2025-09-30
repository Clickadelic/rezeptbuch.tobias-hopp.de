// @ts-nocheck
import { Button } from '@/components/ui/button';
import { RiSearchLine } from 'react-icons/ri';
import { usePage } from '@inertiajs/react';

/**
 * A search bar for recipes.
 *
 * Displays a search bar with a text input and a submit button. The search bar is
 * responsive and will adjust its size based on the screen size.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function RecipeSearch() {

    return (
        <div className="w-full h-48 lg:h-64 bg-[url('../images/Spaghetti-Ingredients.jpg')] dark:bg-[url('../images/brooke-lark-M4E7X3z80PQ-unsplash-cut.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
            <div className="bg-white/30 dark:bg-gray-800/30 dark:text-gray-200 p-1 rounded w-64 md:w-72 lg:w-96">
                <form className="flex flex-row justify-end items-center place-items-center bg-white dark:bg-gray-800 dark:text-gray-200 p-1 rounded space-x-1">
                    <input
                        type="text"
                        name="search"
                        id="search"

                        className="w-full border-none rounded bg-white dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-gray-800"
                        placeholder="Was essen wir heute?"
                    />
                    <Button
                        type="submit"
                        className="bg-primary dark:bg-primary dark:text-gray-200 rounded border-none px-3 py-2"
                        aria-label="Suchen"
                    >
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
