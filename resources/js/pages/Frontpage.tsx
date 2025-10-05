import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import Carousel from '@/components/reusables/Carousel/Index';
import Seperator from '@/components/reusables/Seperator';

import chefkoch from '@images/svg/Chef-Tobias.svg';

import { FaRegHeart } from "react-icons/fa";
import { FiCheckCircle } from 'react-icons/fi';


import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line, RiDashboardHorizontalLine } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BsBookmarkHeart, BsDoorOpen, BsJournalBookmark } from 'react-icons/bs';



import { cn } from "@/lib/utils";
import GridLinkItem from '@/components/reusables/GridLinkItem';
import SingleRecipeView from '@/components/reusables/SingleRecipeView';

/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const { auth } = usePage<SharedPageProps>().props;
    const recipes = usePage<SharedPageProps>().props.recipes;
    return (
        <FullWidthLayout title="Willkommen" showTitle={false}>
            <div className="flex flex-col gap-2 items-center justify-center my-8">
                <h2 className="flex gap-2 text-3xl font-roboto-condensed">
                    <FaRegHeart className="text-primary size-6 mt-1" />Willkommen
                </h2>
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">Was darf's sein?</h3>
            </div>
            <div className={cn("bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease my-8")}>
                <ul className={cn("grid grid-cols-2 lg:grid-cols-3 gap-px")} aria-roledescription="navigation">
                    <li><GridLinkItem icon={<TbSalad className="size-6 text-primary" />} title="Vorspeisen" punchline="für den kleinen Hunger" buttonText="Zu den Vorspeisen" href={route('recipes.search', { search: 'Vorspeise' })} /></li>
                    <li><GridLinkItem icon={<PiCookingPot className="size-6 text-primary" />} title="Hauptgerichte" punchline="für den großen Hunger" buttonText="Zu den Hauptgerichten" href={route('recipes.search', { search: 'Hauptgericht' })} /></li>
                    <li><GridLinkItem icon={<GiCakeSlice className="size-6 text-primary" />} title="Nachtisch" punchline="für ein süßes Ende" buttonText="Zum Nachtisch" href={route('recipes.search', { search: 'Nachtisch' })} /></li>
                    <li><GridLinkItem icon={<LiaCocktailSolid className="size-6 text-primary" />} title="Cocktails" punchline="für einen schönen Abend" buttonText="Zu den Cocktails"href={route('recipes.search', { search: 'Cocktail' })} /></li>
                    <li><GridLinkItem icon={<RiCake3Line className="size-6 text-primary" />} title="Backen" punchline="für eine gute Zeit" buttonText="Zum Backen" href={route('recipes.search', { search: 'Backen' })} /></li>
                    <li><GridLinkItem icon={<GiCrystalBars className="size-6 text-primary" />} title="Snacks" punchline="für zwischendurch" buttonText="Zu den Snacks" href={route('recipes.search', { search: 'Snack' })} /></li>
                </ul>
            </div>
            <Seperator />
            <div className="flex flex-col gap-2 items-center justify-center my-16">
                <h2 className="flex gap-2 text-3xl font-roboto-condensed">
                    <BsJournalBookmark className="text-primary size-6 mt-1" />Rezeptbuch
                </h2>
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">praktisch - digital</h3>
                <div className="flex gap-2 mt-5">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700"><RiDashboardHorizontalLine className="size-4 mt-1" />Zum Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('register')} className="flex gap-2 border border-gray-800 dark:border-gray-200 dark:hover:border-gray-400 text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 rounded px-3 py-1.5"><FiCheckCircle className="size-4 mt-1" />Registrieren</Link>
                            <Link href={route('login')} className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700"><BsDoorOpen className="size-4 mt-1" />Login</Link>
                        </>
                    )}
                </div>
            </div>
            <Seperator />
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-3xl">Tagestipps</h2>
                    <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">vom Chef persönlich</h3>
                    <img src={chefkoch} className="w-full mx-auto sm:w-1/2 md:w-3/4" alt="Chef Tobias" />
                </div>
                <Carousel wrapperClassname="lg:mt-40 col-span-2" carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800" itemClassName="card" recipes={recipes?.data} />
            </div>

            <Seperator />
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2">
                    <SingleRecipeView />
                </div>
                <div className="col-span-1">
                    <div className="bg-rose-200">
                        <h2 className="text-3xl">Rezept der Woche</h2>
                        <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">der Woche</h3>
                        <div className="w-full h-full">
                            bla
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}