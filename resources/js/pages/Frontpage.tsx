import FullWidthLayout from '@/layouts/FullWidthLayout';
import { usePage } from '@inertiajs/react';
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
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    console.log(selectedCategoryId)
    return (
        <FullWidthLayout title="Willkommen">
            <div className="flex flex-col sm:flex-row justify-start items-start gap-14">
                asd
            </div>
        </FullWidthLayout>
    );
}
