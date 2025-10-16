import FullWidthLayout from '@/layouts/FullWidthLayout';

import FavoritesList from '@/components/reusables/FavoritesList';

import DataTable from '@/components/reusables/DataTable/Index';
import { columns } from '@/components/reusables/DataTable/Columns';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';
import { usePage } from '@inertiajs/react';
import { GoPlus } from "react-icons/go";
import { BiDish } from 'react-icons/bi';
import { BsJournalBookmark } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { TbSalad, TbSalt } from 'react-icons/tb';
import { GiKnifeFork } from 'react-icons/gi';
import { TbUsers } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa6';
import DataCard from '@/components/reusables/DataCard';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import PieChart from '@/components/reusables/Charts/PieChart';
import AddCard from '@/components/reusables/AddCard';
import BarChart from '@/components/reusables/Charts/BarChart';

export default function Dashboard() {
    const { totalRecipeCount, totalUserRecipeCount, totalIngredientCount, userFavorites, userFavoritesCount } =
        usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:gap-3 lg:gap-4">
                <div className="p-3 border border-gray-200 md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl">
                    <BarChart title="Rezepte" />
                </div>
                <div className="p-3 border border-gray-200 md:col-span-2 md:col-start-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 rounded-xl">
                    <DataCard title="Rezepte insgesamt" count={totalRecipeCount} text="aktuell" />
                </div>
                <div className="p-3 border border-gray-200 md:col-span-2 md:col-start-3 lg:col-span-1 lg:row-span-2 lg:col-start-5 rounded-xl">
                    <h2 className="text-lg font-medium">Cocktails 17</h2>
                    <p className="text-sm text-gray-500">Du hast insgesamt 23 Rezepte</p>
                </div>
                <div className="p-3 border border-gray-200 md:col-start-1 md:col-span-2 lg:row-span-5 lg:col-span-1 lg:row-start-3 rounded-xl">
                    <h2 className="text-lg font-medium">4</h2>
                </div>
                <div className="p-3 border border-gray-200 md:col-start-3 md:col-span-2 lg:row-span-2 lg:row-start-3 lg:col-start-2 lg:col-span-3 rounded-xl">
                    <h2 className="text-lg font-medium">5</h2>
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
