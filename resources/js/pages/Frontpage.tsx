import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import { Category } from '@/types/Category';

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";

import { cn } from "@/lib/utils";

const iconMap: Record<string, JSX.Element> = {
  vorspeise: <TbSalad className="size-4 inline-flex" />,
  nachtisch: <RiCake3Line className="size-4 inline-flex" />,
  hauptgang: <GiKnifeFork className="size-4 inline-flex" />,
  cocktail: <LiaCocktailSolid className="size-4 inline-flex" />,
  backen: <GiCakeSlice className="size-4 inline-flex" />,
  snack: <GiCrystalBars className="size-4 inline-flex" />,
};
import chefkoch from '@images/svg/Chef-Tobias.svg';
import CategoryGrid from '@/components/forms/CategoryGrid';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import RecipeSearch from '@/components/appshell/RecipeSearch';
import { Recipe } from '@/types/Recipe';
import RecipeCard from '@/components/reusables/RecipeCard';
import AppLogo from '@/components/appshell/AppLogo';
import Carousel from '@/components/reusables/Carousel/Index';

/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const categories = usePage<SharedPageProps>().props.categories;
    const recipes = usePage<SharedPageProps>().props.recipes;
    const [open, setOpen] = useState<boolean>(false);
    return (
        <FullWidthLayout title="Willkommen">
            <div className="grid grid-cols-12 grid-rows-2">
                <div className="col-span-6 row-span-2 flex flex-col items-center">
                    <img src={chefkoch} alt="Chef Tobias" className="w-2/4 mt-12" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-xl font-medium text-gray-400 font-oswald mb-3">...auf</h1>
                        <AppLogo className="mb-4" />
                        <p className="text-xl text-gray-800 dark:text-gray-200 font-la-belle-aurore">Dein Chefkoch 2.0</p>
                    </div>
                </div>
                <div className="col-span-6">
                    <Carousel wrapperClassname="asd" carouselClassName="asd" itemClassName="card" recipes={recipes?.data} />
                </div>
                
            </div>
        </FullWidthLayout>
    );
}
