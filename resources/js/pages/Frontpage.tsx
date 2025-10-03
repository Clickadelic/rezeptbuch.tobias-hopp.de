import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { useState } from 'react';

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BsBookmarkHeart } from 'react-icons/bs';
import { cn } from "@/lib/utils";
import { Category } from '@/types/Category';

import chefkoch from '@images/svg/Chef-Tobias.svg';
import CategoryGrid from '@/components/forms/CategoryGrid';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';

import AppLogo from '@/components/appshell/AppLogo';
import Carousel from '@/components/reusables/Carousel/Index';

import RecipeCard from '@/components/reusables/RecipeCard';
import { Recipe } from '@/types/Recipe';

const iconMap: Record<string, JSX.Element> = {
  vorspeise: <TbSalad className="size-4 inline-flex" />,
  hauptgericht: <GiKnifeFork className="size-4 inline-flex" />,
  nachtisch: <RiCake3Line className="size-4 inline-flex" />,
  cocktail: <LiaCocktailSolid className="size-4 inline-flex" />,
  backen: <GiCakeSlice className="size-4 inline-flex" />,
  snack: <GiCrystalBars className="size-4 inline-flex" />,
};


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
    return (
        <FullWidthLayout aria-label="" title="Willkommen" showTitle={false}>
            <div className="flex flex-col gap-5 items-center justify-center my-16">
                <h2 className="flex gap-2 text-3xl font-roboto-condensed"><BsBookmarkHeart className="text-primary size-6 mt-1" />Willkommen</h2>
                
                <h3 className="text-2xl text-gray-600 font-la-belle-aurore">Was darf's sein?</h3>
            </div>
            <div className="asd">
                <div className={cn("bg-gray-200 dark:bg-gray-900 transition-all duration-500 ease my-8")}>
                    <ul className={cn("grid grid-cols-3 gap-[1px]")} aria-roledescription="navigation">
                        <li>
                            <Link href={route('recipes.search', { search: 'Vorspeise' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white dark:bg-gray-900 py-12")} aria-label="Vorspeisen" title="Vorspeisen">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <TbSalad className="size-7 text-primary" />Vorspeisen
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für den kleinen Hunger</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipes.search', { search: 'Hauptgericht' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white py-12")} aria-label="Hauptgerichte" title="Hauptgerichte">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <GiKnifeFork className="size-7 text-primary" />Hauptgerichte
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für den großen Hunger</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipes.search', { search: 'Nachtisch' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white py-12")} aria-label="Nachtisch" title="Nachtisch">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <RiCake3Line className="size-7 text-primary" />Nachtisch
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für ein süßes Ende</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipes.search', { search: 'Cocktail' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white py-12")} aria-label="Cocktails" title="Cocktails">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <LiaCocktailSolid className="size-7 text-primary" />Cocktails
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für einen guten Abend</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipes.search', { search: 'Backen' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white py-12")} aria-label="Backen" title="Backen">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <GiCakeSlice className="size-7 text-primary" />Backen
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für die gute Zeit</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipes.search', { search: 'Snack' })} className={cn("flex flex-col justify-center items-center text-2xl font-roboto-condensed text-gray-800 bg-white py-12")} aria-label="Snacks" title="Snacks">
                                <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                    <GiCrystalBars className="size-7 text-primary" />Snacks
                                </span>
                                <span className="font-la-belle-aurore text-gray-600">für zwischendurch</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </FullWidthLayout>
    );
}
