import FullWidthLayout from '@/layouts/FullWidthLayout';

import FavoritesList from '@/components/reusables/FavoritesList';

import DataTable from '@/components/reusables/DataTable/Index';
import { columns } from '@/components/reusables/DataTable/Columns';

import { SharedPageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { Recipe } from '@/types/Recipe';
import DataCard from '@/components/reusables/DataCard';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import PieChart from '@/components/reusables/Charts/PieChart';
import AddCard from '@/components/reusables/AddCard';
import BarChart from '@/components/reusables/Charts/BarChart';

export default function Dashboard() {
    // Extract the data from the page
    const {
        totalRecipeCount,
        totalUserRecipeCount,
        totalIngredientCount,
        userFavorites,
        userFavoritesCount,
        allUserRecipes
    } = usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:gap-3 lg:gap-4">
                <div className="p-3 border border-gray-200 md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl">
                    <BarChart title="Rezepte" />
                </div>
                <div className="p-3 border border-gray-200 md:col-span-4 md:col-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-4 rounded-xl">
                    <DonutChart />
                </div>
                <div className="p-3 border border-gray-200 md:col-start-1 md:col-span-2 lg:row-span-5 lg:col-span-1 lg:row-start-3 rounded-xl">
                    <FavoritesList favorites={userFavorites as Recipe[]} />
                </div>
                <div className="p-3 border border-gray-200 md:col-start-3 md:col-span-2 lg:row-span-2 lg:row-start-3 lg:col-start-2 lg:col-span-3 rounded-xl">
                    <h2 className="text-lg font-medium">Deine Rezepte</h2>
                    <ul>
                        {allUserRecipes.data?.map((recipe:Recipe) => {
                            return (
                                <li key={recipe.id} className="asd">
                                    <h2 className="text-lg font-medium">{recipe.name}</h2>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="p-3 border border-gray-200 md:col-start-1 md:col-span-2 lg:row-span-5 lg:col-start-5 lg:col-span-1 rounded-xl">
                    <h2 className="text-lg font-medium">6</h2>
                </div>
                <div className="p-2 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:row-span-3 rounded-xl">
                    <h2 className="text-lg font-medium">7</h2>
                </div>
                <div className="p-2 lg:col-start-4 lg:row-start-5 lg:row-span-3 rounded-xl">
                    <h2 className="text-lg font-medium">8</h2>
                </div>
            </div>
        </FullWidthLayout>
    );
}
