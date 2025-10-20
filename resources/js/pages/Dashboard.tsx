import FullWidthLayout from '@/layouts/FullWidthLayout';

import FavoritesTable from '@/components/reusables/FavoritesTable';

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

import { cn } from '@/lib/utils';


export default function Dashboard() {
    // Extract the data from the page
    const { totalRecipeCount, totalUserRecipeCount, totalIngredientCount, userFavorites, userFavoritesCount, allUserRecipes } = usePage<SharedPageProps>().props;
    // Chart-Daten vorbereiten
    const barData = [
        { name: "Alle Rezepte", value: totalRecipeCount },
        { name: "Meine Rezepte", value: totalUserRecipeCount },
        { name: "Zutaten", value: totalIngredientCount },
        { name: "Favoriten", value: userFavoritesCount },
    ];

    const donutData = [
        { name: "Eigene Rezepte", value: totalUserRecipeCount },
        { name: "Favoriten", value: userFavoritesCount },
        { name: "Andere Benutzer", value: totalRecipeCount - totalUserRecipeCount },
    ];
    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <BarChart data={barData} title="Rezepte" className="col-span-1 xl:col-span-8" />
                <DonutChart data={donutData} title="Deine Rezepte" className="col-span-1 xl:col-span-5 xl:col-start-9" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <FavoritesTable favorites={userFavorites as Recipe[]} title="Deine Rezepte" className="col-span-1 xl:col-span-8" />

                <FavoritesTable favorites={userFavorites as Recipe[]} title="Deine Favoriten" className="col-span-1 xl:col-span-4" />
            </div>
        </FullWidthLayout>
    );
}
