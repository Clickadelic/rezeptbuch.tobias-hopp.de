import FullWidthLayout from '@/layouts/FullWidthLayout';

import DataCard from '@/components/reusables/DataCard';
import RecipeCard from '@/components/reusables/RecipeCard';
import VerifiedBadge from '@/components/reusables/VerifiedBadge';

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
    const { recipes } = usePage<SharedPageProps>().props;
    const [isFavorited, setIsFavorited] = useState(true);
    const userFavorites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // TODO: Remove Debugmode when it's finished
    const isDebugMode = false;
    return (
        <FullWidthLayout title="Dashboard">
            <div className="bg-gray-200 dark:bg-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-17 md:grid-rows-2 lg:grid-rows-6 gap-px">
                    <div className={cn("lg:col-span-4 lg:row-span-3 bg-white p-3", isDebugMode && "bg-rose-200")}>
                        <h3 className="text-lg">Rezepte</h3>
                        <div className="test">
                            Du hast aktuell 23 Rezepte.
                            <Link href="test" className="underline">Neues Rezept</Link>
                        </div>
                    </div>
                    <div className={cn("lg:col-span-4 lg:row-span-3 bg-white p-3", isDebugMode && "bg-sky-200")}>
                        <h3 className="text-lg">Freie Box</h3>
                        <div className="test">
                            Freie Box
                        </div>
                    </div>
                    <div className={cn("lg:col-span-4 lg:row-span-3 bg-white p-3", isDebugMode && "bg-emerald-200")}>
                        <h3 className="text-lg">Freie Box</h3>
                        <div className="test">
                            Freie Box
                        </div>
                    </div>
                    <div className={cn("lg:col-span-5 lg:row-span-6 bg-white p-4 w-calc(100% + 2px)", isDebugMode && "bg-teal-200")}>
                        <h3 className="text-lg">Dein Anteil an Rezepten</h3>
                        <div className="mt-4">
                            <DonutChart />
                        </div>
                    </div>
                    <div className={cn("md:cols-span-4 lg:col-span-12 lg:row-span-3 bg-white p-3", isDebugMode && "bg-cyan-200")}>
                        <h3 className="text-lg">Rezepte</h3>
                        <div className="test">
                            Last Box.
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}    

