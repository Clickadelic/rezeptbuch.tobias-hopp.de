import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';

import BarChart from '@/components/reusables/Charts/BarChart';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import FavoritesTable from '@/components/reusables/Tables/FavoritesTable';
import RecipesTable from '@/components/reusables/Tables/RecipesTable';

import { IoIosStats } from 'react-icons/io';
import { BsJournalBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { TbSalt } from 'react-icons/tb';
import { TbCategory } from 'react-icons/tb';
import { TfiLayoutListThumb } from 'react-icons/tfi';
import { TfiCommentsSmiley } from 'react-icons/tfi';

import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';

/**
 * The Dashboard page displays a variety of information about the user's recipes.
 * It includes a bar chart that shows the number of recipes, a donut chart that shows the distribution of recipes between the user and other users, and two tables that show the user's recipes and favorites.
 */
export default function Dashboard() {
    // Extract the data from the page
    const {
        totalRecipeCount,
        totalUserRecipeCount,
        totalIngredientCount,
        totalUserCount,
        totalUserRecipes,
        userFavorites,
        userFavoritesCount,
        latestRecipe,
        recipesCountByCategory,
    } = usePage<SharedPageProps>().props;

    const { user } = usePage<SharedPageProps>().props.auth;

    // Prepare data for charts
    const barData = [
        { name: 'Vorspeisen', value: recipesCountByCategory['Vorspeise'] },
        { name: 'Hauptgerichte', value: recipesCountByCategory['Hauptgericht'] },
        { name: 'Nachtisch', value: recipesCountByCategory['Nachtisch'] },
        { name: 'Cocktails', value: recipesCountByCategory['Cocktail'] },
        { name: 'Backen', value: recipesCountByCategory['Backen'] },
        { name: 'Snack', value: recipesCountByCategory['Snack'] },
    ];

    const donutData = [
        { name: 'Eigene Rezepte', value: totalUserRecipeCount },
        { name: 'Favoriten', value: userFavoritesCount },
        { name: 'Andere Benutzer', value: totalRecipeCount - totalUserRecipeCount },
    ];

    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <TfiCommentsSmiley className="size-4 mt-1 text-primary rotate-y-180" />{' '}
                                Hi {user?.name}
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <BsJournalBookmark className="size-4 mt-1.5 text-primary" /> Rezepte
                            </span>{' '}
                            <span>{totalRecipeCount}</span>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <TbSalt className="size-4 mt-1.5 text-primary" /> Zutaten
                            </span>{' '}
                            <span>{totalIngredientCount}</span>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <FaRegHeart className="size-4 mt-1.5 text-primary" /> Favoriten
                            </span>{' '}
                            <span>{userFavoritesCount}</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <BarChart
                    data={barData}
                    title="Rezepte pro Kategorie"
                    icon={<IoIosStats className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-7"
                />
                <DonutChart
                    data={donutData}
                    title="Dein Anteil"
                    icon={<TbCategory className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-5 xl:col-start-8"
                />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <RecipesTable
                    initialRecipes={totalUserRecipes}
                    title="Deine Rezepte"
                    icon={<TfiLayoutListThumb className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-6"
                />
                <FavoritesTable
                    favorites={userFavorites as Recipe[]}
                    title="Deine Favoriten"
                    icon={<FaRegHeart className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-6"
                />
            </div>
        </FullWidthLayout>
    );
}
