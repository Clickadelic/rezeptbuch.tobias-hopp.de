import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import UserSidebar from '@/components/sidebars/UserSidebar';

import AreaChart from '@/components/reusables/Charts/AreaChart';
import CategoryBarChart from '@/components/reusables/Charts/CategoryBarChart';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import PopoverInfo from '@/components/reusables/PopoverInfo';
import FavoritesTable from '@/components/reusables/Tables/FavoritesTable';
import RecipesTable from '@/components/reusables/Tables/UserRecipesTable';
import IngredientPanel from '@/components/reusables/IngredientPanel';

import { TfiCommentAlt } from 'react-icons/tfi';
import { BsJournalBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { TbSalt } from 'react-icons/tb';
import { TbCategory } from 'react-icons/tb';
import { TfiLayoutListThumb } from 'react-icons/tfi';

import CommentsPanel from '@/components/reusables/CommentsPanel';

import { Ingredient } from '@/types/Ingredient';
import { Recipe } from '@/types/Recipe';
import { Comment } from '@/types/Comment';
import { SharedPageProps } from '@/types';

import { cn } from '@/lib/utils';

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
        totalUserIngredientCount,
        totalUserRecipes,
        totalUserIngredients,
        userFavorites,
        userFavoritesCount,
        recipesCountByCategory,
        recipesUserCountByCategory,
        comments,
        drafts,
    } = usePage<SharedPageProps>().props;

    // Prepare data for charts
    const communityBarData = [
        { name: 'Vorspeisen', value: recipesCountByCategory['Vorspeise'] },
        { name: 'Hauptgerichte', value: recipesCountByCategory['Hauptgericht'] },
        { name: 'Nachtisch', value: recipesCountByCategory['Nachtisch'] },
        { name: 'Cocktails', value: recipesCountByCategory['Cocktail'] },
        { name: 'Backen', value: recipesCountByCategory['Backen'] },
        { name: 'Snack', value: recipesCountByCategory['Snack'] },
    ];

    const userBarData = [
        { name: 'Vorspeisen', value: recipesUserCountByCategory['Vorspeise'] },
        { name: 'Hauptgerichte', value: recipesUserCountByCategory['Hauptgericht'] },
        { name: 'Nachtisch', value: recipesUserCountByCategory['Nachtisch'] },
        { name: 'Cocktails', value: recipesUserCountByCategory['Cocktail'] },
        { name: 'Backen', value: recipesUserCountByCategory['Backen'] },
        { name: 'Snack', value: recipesUserCountByCategory['Snack'] },
    ];

    const areaChartData = [
        {
            name: 'Vorspeise',
            user: recipesUserCountByCategory['Vorspeise'],
            global: recipesCountByCategory['Vorspeise'],
        },
        {
            name: 'Hauptgerichte',
            user: recipesUserCountByCategory['Hauptgericht'],
            global: recipesCountByCategory['Hauptgericht'],
        },
        {
            name: 'Nachtisch',
            user: recipesUserCountByCategory['Nachtisch'],
            global: recipesCountByCategory['Nachtisch'],
        },
        {
            name: 'Cocktails',
            user: recipesUserCountByCategory['Cocktail'],
            global: recipesCountByCategory['Cocktail'],
        },
        {
            name: 'Backen',
            user: recipesUserCountByCategory['Backen'],
            global: recipesCountByCategory['Backen'],
        },
        {
            name: 'Snack',
            user: recipesUserCountByCategory['Snack'],
            global: recipesCountByCategory['Snack'],
        },
    ];

    const donutData = [
        { name: 'Eigene Rezepte', value: totalUserRecipeCount },
        { name: 'Favoriten', value: userFavoritesCount },
        { name: 'Andere Benutzer', value: totalRecipeCount - totalUserRecipeCount },
    ];

    return (
        <SidebarLeftLayout title="Dashboard" sidebar={<UserSidebar />}>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-1">
                                <BsJournalBookmark className="size-4 mt-1.5 text-primary" />
                                Deine Rezepte
                                <PopoverInfo description="Entwürfe / Gesamt" />
                            </span>
                            <div className="flex gap-1">
                                <span className="text-gray-600 dark:text-gray-400">{drafts}</span>/
                                <span>{totalUserRecipeCount}</span>
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-1">
                                <TbSalt className="size-4 mt-1.5 text-primary" />
                                Deine Zutaten
                                <PopoverInfo description="Die Anzahl Deiner Zutaten." />
                            </span>
                            <div className="flex gap-1">
                                <span>{totalUserIngredientCount}</span>
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <TfiCommentAlt className="size-4 mt-1.5 text-primary" />
                                Kommentare
                                <PopoverInfo description="Die Anzahl Deiner Kommentare." />
                            </span>
                            <div className="flex gap-1">
                                <span>{comments?.total || 0}</span>
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <FaRegHeart className="size-4 mt-1.5 text-primary" /> Favoriten
                                <PopoverInfo description="Die Anzahl Deiner Favoriten." />
                            </span>

                            <div className="flex gap-1">
                                <span>{userFavoritesCount || 0}</span>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <CategoryBarChart
                    communityBarData={communityBarData}
                    userBarData={userBarData}
                    icon={<BsJournalBookmark className="mt-1 text-primary" />}
                    title="Rezepte nach Kategorie"
                    className="col-span-1 xl:col-span-7"
                />
                <DonutChart
                    data={donutData}
                    title="Dein Anteil"
                    icon={<TbCategory className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-7 xl:col-start-8"
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 xl:gap-5 mb-2 xl:mb-5">
                <RecipesTable
                    initialRecipes={totalUserRecipes}
                    title="Deine Rezepte"
                    icon={<TfiLayoutListThumb className="mt-1 text-primary" />}
                    className="col-span-1 xl:col-span-7"
                />
                <FavoritesTable
                    favorites={userFavorites as Recipe[]}
                    title="Deine Favoriten"
                    icon={<FaRegHeart className="mt-1 text-primary" />}
                    className="w-full"
                />
            </div>
            <div className="w-full flex gap-2 xl:gap-5 mb-2 xl:mb-5">
                <IngredientPanel
                    className="w-full"
                    totalUserIngredients={totalUserIngredients}
                    totalUserIngredientCount={totalUserIngredientCount}
                />
            </div>
            <div className="w-full flex gap-2 xl:gap-5 mb-2 xl:mb-5">
                <CommentsPanel comments={comments} className="w-full" />
            </div>

        </SidebarLeftLayout>
    );
}
