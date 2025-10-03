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
import { IoMdArrowForward } from "react-icons/io";
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
            <div className="flex flex-col gap-2 items-center justify-center my-16">
                <h2 className="flex gap-1 text-3xl font-roboto-condensed"><BsBookmarkHeart className="text-primary size-6 mt-1" />Willkommen</h2>
                <h3 className="text-2xl text-gray-600 font-la-belle-aurore">Was darf's sein?</h3>
            </div>
            <div className={cn("bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease my-8")}>
                <ul className={cn("grid grid-cols-2 lg:grid-cols-3 gap-[1px]")} aria-roledescription="navigation">
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <TbSalad className="size-7 text-primary" />Vorspeisen
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für den kleinen Hunger</span>
                            <Link
                                href={route('recipes.search', { search: 'Vorspeise' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zu den Vorspeisen"
                                aria-label="Zu den Vorspeisen"
                                >Zu den Vorspeisen<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <GiKnifeFork className="size-7 text-primary" />Hauptgerichte
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für den großen Hunger</span>
                            <Link
                                href={route('recipes.search', { search: 'Hauptgericht' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zu den Hauptgerichten"
                                aria-label="Zu den Hauptgerichten"
                                >Zu den Hauptgerichten<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <RiCake3Line className="size-7 text-primary" />Nachtisch
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für ein süßes Ende</span>
                            <Link
                                href={route('recipes.search', { search: 'Nachtisch' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zum Nachtisch"
                                aria-label="Zum Nachtisch"
                                >Zum Nachtisch<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <LiaCocktailSolid className="size-7 text-primary" />Cocktails
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für einen guten Abend</span>
                            <Link
                                href={route('recipes.search', { search: 'Cocktail' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zu den Cocktails"
                                aria-label="Zu den Cocktails"
                                >Zu den Cocktails<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <GiCakeSlice className="size-7 text-primary" />Backen
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für eine gute Zeit</span>
                            <Link
                                href={route('recipes.search', { search: 'Backen' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zum Backen"
                                aria-label="Zum Backen"
                                >Zum Backen<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className={cn("flex flex-col justify-center items-center font-roboto-condensed text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 py-12")}>
                            <span className="flex flex-col items-center justify-center gap-3 mb-1">
                                <GiCrystalBars className="size-7 text-primary" />Snacks
                            </span>
                            <span className="font-la-belle-aurore text-gray-600 ">für zwischendurch</span>
                            <Link
                                href={route('recipes.search', { search: 'Snack' })}
                                className="flex items-center justify-center w-64 gap-2 text-base  hover:bg-emerald-700 dark:hover:text-gray-200 dark:hover:bg-emerald-600 font-medium text-white mt-4 font-roboto-condensed rounded bg-primary px-6 py-2"
                                title="Zu den Snacks"
                                aria-label="Zu den Snacks"
                                >Zu den Snacks<IoMdArrowForward className="asd" />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </FullWidthLayout>
    );
}
