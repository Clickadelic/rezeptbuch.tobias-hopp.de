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
    const { auth } = usePage<SharedPageProps>().props;
    const { ingredientCount } = usePage<SharedPageProps>().props;
    const { recipeCount } = usePage<SharedPageProps>().props;
    const { userRecipes } = usePage<SharedPageProps>().props;
    const { totalRecipeCount } = usePage<SharedPageProps>().props;
    console.log(totalRecipeCount)
    let userRecipeCount:number = 0;


    if (Array.isArray(userRecipes)) {
        userRecipeCount = userRecipes.length;
    }
    
    return (
        <FullWidthLayout title="Dashboard">

                <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 sm:gap-4">
                    <div className="col-span-2 md:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl">
                        <DataCard title="Meine Rezepte" count={userRecipes ? userRecipeCount : 0} total={totalRecipeCount} trend="negative" increase="12" icon={<BsJournalBookmark className="size-6 text-primary" />} />


                    </div>
                    <div className="col-span-2 flex justify-between items-start gap-4 rounded-xl ">
                        asd
                    </div>
                    <div className="col-span-2 flex justify-between items-start gap-4 rounded-xl ">
                        asd
                    </div>
                </div>

        </FullWidthLayout>
    );
}
