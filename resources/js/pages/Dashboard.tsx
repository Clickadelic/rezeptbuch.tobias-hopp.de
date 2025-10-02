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
export default function Dashboard() {
    const { latestRecipe, categories, totalUserRecipeCount, totalRecipeCount, totalIngredientCount } = usePage<SharedPageProps>().props;
    console.log("categories", categories);
    console.log("latestRecipe", latestRecipe);
    console.log("totalIngredientCount", totalIngredientCount);
    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 sm:gap-4">
                <div className="col-span-2 md:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl">
                    <DataCard
                        icon={<BiDish className="text-primary size-6" />}
                        title="Rezepte"
                        userCount={totalUserRecipeCount as number}
                        totalCount={totalRecipeCount as number}
                    />
                    <DataCard
                        icon={<TbSalt className="text-primary size-6" />}
                        title="Zutaten"
                        userCount={totalUserRecipeCount as number}
                        totalCount={totalIngredientCount as number}
                    />
                    <DataCard
                        icon={<BiDish className="text-primary size-6" />}
                        title="Rezepte"
                        userCount={totalUserRecipeCount as number}
                        totalCount={totalRecipeCount as number}
                    />
                </div>
                <div className="col-span-2 flex justify-between items-start gap-4 rounded-xl ">
                    &nbsp;
                </div>
                <div className="col-span-2 flex justify-between items-start gap-4 rounded-xl ">
                    &nbsp;
                </div>
            </div>
        </FullWidthLayout>
    );
}
