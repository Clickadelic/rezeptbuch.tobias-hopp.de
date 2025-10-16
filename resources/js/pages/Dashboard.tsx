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
import BarChart from '@/components/reusables/Charts/CustomBarChart';
import PieChart from '@/components/reusables/Charts/PieChart';
import AddCard from '@/components/reusables/AddCard';

export default function Dashboard() {
    const { totalRecipeCount, totalUserRecipeCount, totalIngredientCount, userFavorites, userFavoritesCount } =
        usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Dashboard">
            <div className="rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 mb-12">
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-2">
                        <AddCard icon={<GoPlus className="size-5 mt-1" />} title="Neues Rezept" />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-2">
                        <DataCard title="Meine Rezepte" text="aktuell" count={totalRecipeCount} icon={<BiDish className="size-4 mt-1 text-primary" />} />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-2">
                        <DataCard title="Meine Rezepte" text="aktuell" count={totalRecipeCount} icon={<BiDish className="size-4 mt-1 text-primary" />} />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-2">
                        <DataCard title="Meine Rezepte" text="aktuell" count={totalRecipeCount} icon={<BiDish className="size-4 mt-1 text-primary" />} />
                    </div>

                    
                </div>
            </div>
        </FullWidthLayout>
    );
}
