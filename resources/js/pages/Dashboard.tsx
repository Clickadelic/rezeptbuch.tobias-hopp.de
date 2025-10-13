import FullWidthLayout from '@/layouts/FullWidthLayout';

import FavoritesList from '@/components/reusables/FavoritesList';

import donutChartSvg from '@/images/svg/donut-chart.svg';
import Seperator from '@/components/reusables/Seperator';
import DataTable from '@/components/reusables/DataTable';
import { columns } from "@/components/reusables/Columns"

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SharedPageProps } from '@/types';
import { Recipe } from '@/types/Recipe';
import { usePage } from '@inertiajs/react';

import { BiDish } from 'react-icons/bi';
import { BsJournalBookmark } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad, TbSalt } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { TbUsers } from "react-icons/tb";
import { useState } from 'react';

import DonutChart from '@/components/reusables/Charts/DonutChart';
import BarChart from '@/components/reusables/Charts/BarChart';
import PieChart from '@/components/reusables/Charts/PieChart';

import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';

export default function Dashboard() {
    const { totalRecipeCount, totalUserRecipeCount, totalIngredientCount, userFavorites } = usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Dashboard" showTitle={false}>
            <div className="rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5 mb-12">
                    <div className="col-span-2 row-span-1">
                        <div className="flex justify-start items-start gap-2">
                            <h3 className="text-2xl font-medium">Persönliche Rezepte</h3>
                            <h4 className="text-2xl font-medium">{totalUserRecipeCount}</h4>
                        </div>
                        <p className="text-sm text-gray-500">Du hast aktuell {totalUserRecipeCount} Rezepte</p>
                    </div>
                    <div className="col-span-2 row-span-1">
                        <div className="flex justify-start items-start gap-2">
                            <h3 className="text-2xl font-medium">Rezepte gesamt</h3>
                            <h4 className="text-2xl font-medium">{totalRecipeCount}</h4>
                        </div>
                        <p className="text-sm text-gray-500">Insgesamt gibt es {totalRecipeCount} Rezepte</p>
                    </div>
                    <div className="col-span-2 row-span-1">
                        <div className="flex justify-start items-start gap-2">
                            <h3 className="text-2xl font-medium">Zutaten gesamt</h3>
                            <h4 className="text-2xl font-medium">{totalIngredientCount}</h4>
                        </div>
                        <p className="text-sm text-gray-500">Insgesamt gibt es {totalIngredientCount} Zutaten</p>
                    </div>
                    <div className="col-span-2 row-span-1">
                        <div className="flex justify-start items-start gap-2">
                            <h3 className="text-2xl font-medium">Benutzer</h3>
                            <h4 className="text-2xl font-medium">6</h4>
                        </div>
                        <p className="text-sm text-gray-500">Insgesamt gibt es {} Zutaten</p>
                    </div>
                    <div className="col-span-4">
                        <h3>DonutChart</h3>
                    </div>
                </div>
                <Seperator style="heart-outline" />
                <h3 className="text-xl font-medium mb-3">Deine Favoriten</h3>
                <DataTable columns={columns} data={userFavorites as Recipe[]} />
            </div>
        </FullWidthLayout>
    );
}    

