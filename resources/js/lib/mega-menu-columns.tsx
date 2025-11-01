import { BsJournalBookmark } from 'react-icons/bs';
import { RiDashboardHorizontalLine } from 'react-icons/ri';

import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { LuUsersRound } from 'react-icons/lu';
import { RiHomeLine } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';

import { BiCategory } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { GiCrystalBars } from 'react-icons/gi';


import megaMenuFeaturedImage from '@images/webp/MegaMenu-Featured-Image.webp';

export const recipesMegaMenu = [
    {
        title: 'Rezepte',
        items: [
            {
                icon: <BsJournalBookmark className="size-4 text-primary" />,
                title: 'Alle Rezepte',
                href: '/rezepte',
                description: 'Alle Rezepte als Übersicht',
            },
        ],
    },
    {
        title: 'Kategorien',
        items: [
            {
                icon: <TbSalad className="size-4 text-primary" />,
                title: 'Vorspeisen',
                href: route('recipes.search', { search: 'Vorspeise' }),
                description: 'für den kleinen Hunger',
            },
            {
                icon: <PiCookingPot className="size-4 text-primary" />,
                title: 'Hauptgerichte',
                href: route('recipes.search', { search: 'Hauptgericht' }),
                description: 'für den großen Hunger',
            },
            {
                icon: <RiCake3Line className="size-4 text-primary" />,
                title: 'Nachtisch',
                href: route('recipes.search', { search: 'Nachtisch' }),
                description: 'für ein süßes Ende',
            },
        ],
    },
    {
        items: [
            {
                icon: <LiaCocktailSolid className="size-4 text-primary" />,
                title: 'Cocktails',
                href: route('recipes.search', { search: 'Cocktail' }),
                description: 'für einen schönen Abend',
            },
            {
                icon: <GiCakeSlice className="size-4 text-primary" />,
                title: 'Backen',
                href: route('recipes.search', { search: 'Backen' }),
                description: 'für eine gute Zeit',
            },
            {
                icon: <GiCrystalBars className="size-4 text-primary" />,
                title: "Snacks",
                href: route('recipes.search', { search: 'Snack' }),
                description: 'für zwischendurch',
            },
        ],
    },
    
];

export const featuredRecipes = {
    icon: <RiDashboardHorizontalLine className="mt-[2px]" />,
    imageUrl: megaMenuFeaturedImage,
    title: 'Zufallsrezept',
    description: 'Eine Empfehlung für Dich',
    label: 'Dashboard',
    href: '/dashboard',
};