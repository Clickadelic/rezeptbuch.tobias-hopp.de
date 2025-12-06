import { usePage } from '@inertiajs/react';
// import { Link } from 'lucide-react'; // Nicht nötig, da Inertia-Link nicht von hier importiert wird
// import { IoMdArrowForward } from 'react-icons/io'; // Nicht nötig, da die Links unten auskommentiert sind

import FullWidthLayout from '@/layouts/FullWidthLayout';
import RecipeCard from '@/components/reusables/SimpleRecipeCard';
import AdvancedRecipeCard from '@/components/reusables/AdvancedRecipeCard'; // Nicht verwendet
import Pagination from '@/components/reusables/Pagination';

import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';


/**
 * Displays a list of all recipes in a grid layout using RecipeCard.
 * Data is fetched from Inertia page props in PagedData format.
 */
export default function Recipes() {

    const recipes = usePage<SharedPageProps>().props.recipes;
    // Sicherstellen, dass das 'data'-Array existiert und ein Array ist
    const recipeData = recipes?.data || [];
    const hasRecipes = recipeData.length > 0;
    
    return (
        <FullWidthLayout
            title="Rezepte"
            description="Alle Rezepte in der Übersicht. Hier findest Du jedes Rezept."
        >

            {hasRecipes ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-5">
                    {/* Iteration mit der gewünschten RecipeCard und korrektem 'key' */}
                    {recipeData.map((recipe: Recipe) => (
                        <li key={recipe.id}><AdvancedRecipeCard recipe={recipe} /></li>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                        Zurzeit sind keine Rezepte vorhanden.
                    </p>
                </div>
            )}
            
            {recipes && recipes.links && hasRecipes && (
                <Pagination 
                    links={recipes.links} 
                    className="mt-4 sm:mt-8 xl:mt-12" 
                />
            )}
            
        </FullWidthLayout>
    );
}