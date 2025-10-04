

import DataCard from '@/components/reusables/DataCard';
import RecipeCard from '@/components/reusables/RecipeCard';
import VerifiedBadge from '@/components/reusables/VerifiedBadge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import FullWidthLayout from '@/layouts/FullWidthLayout';
import { cn } from '@/lib/utils';
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

import Chart from '@/components/reusables/Chart';

export default function Dashboard() {
    
    const { latestRecipe, categories, totalUserRecipeCount, totalRecipeCount, totalIngredientCount } = usePage<SharedPageProps>().props;
    console.log("categories", categories);
    console.log("latestRecipe", latestRecipe);
    console.log("totalIngredientCount", totalIngredientCount);
    return (
        <FullWidthLayout title="Dashboard">
            <div className={cn("bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease my-8")}>
                <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3 gap-px")} aria-roledescription="navigation">
                    <div className="bg-rose-200">
                        <Chart />
                    </div>
                    <div className="bg-sky-200">
                        Test
                    </div>
                    <div className="bg-fuchsia-200">
                        Test
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}    

