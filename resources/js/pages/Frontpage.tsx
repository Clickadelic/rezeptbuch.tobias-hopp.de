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
    console.log(recipes);
    return (
        <FullWidthLayout title="Willkommen">
            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-5">
                    {recipes?.data.map((recipe: Recipe) => (
                        <li key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                    {recipes?.data.length === 0 && recipes?.data.map((recipe: Recipe) => (
                        <li key="id_placeholder"><p>Lege das erste Rezept an.</p></li>
                    ))}
                </ul>
            </div>
        </FullWidthLayout>
    );
}
