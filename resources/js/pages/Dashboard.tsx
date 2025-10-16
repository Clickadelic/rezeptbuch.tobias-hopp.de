import FullWidthLayout from '@/layouts/FullWidthLayout';

import FavoritesList from '@/components/reusables/FavoritesList';

import DataTable from '@/components/reusables/DataTable/Index';
import { columns } from '@/components/reusables/DataTable/Columns';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';
import { usePage } from '@inertiajs/react';

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

import DataCard from '@/components/reusables/DataCard';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import BarChart from '@/components/reusables/Charts/BarChart';
import PieChart from '@/components/reusables/Charts/PieChart';

export default function Dashboard() {
    const { totalRecipeCount, totalUserRecipeCount, totalIngredientCount, userFavorites } =
        usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Dashboard">
            <div className="rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5 mb-12">
                    <div className="col-span-2 row-span-1">
                        <DataCard title="Meine Rezepte" text="Du hast aktuell" count={totalUserRecipeCount} icon={<BsJournalBookmark className="size-6 mt-1" />} />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <DataCard title="Rezepte gesamt" text="Du hast aktuell" count={totalRecipeCount} icon={<BiDish className="size-6 mt-1" />} />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <DataCard title="Zutaten gesamt" text="Du hast aktuell" count={totalIngredientCount} icon={<TbSalt className="size-6 mt-1" />} />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <DataCard title="User" text="Du hast aktuell" count={totalIngredientCount} icon={<TbSalt className="size-6 mt-1" />} />
                    </div>
                    <div className="col-span-4">
                        <h3 className="text-lg font-medium mb-1">Deine Favoriten</h3>
                        <FavoritesList favorites={userFavorites as Recipe[]} />
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}
