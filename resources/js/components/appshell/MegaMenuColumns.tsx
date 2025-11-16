import { BsJournalBookmark } from 'react-icons/bs';

import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { GiCrystalBars } from 'react-icons/gi';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GoPlus } from 'react-icons/go';
// import featuredImg from '@images/svg/Top-Secret-bro.svg';
// import featuredImg from '@images/svg/File-synchronization-bro.svg';

import featuredImg from '@images/svg/Recipe-Book-bro.svg';

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
    }
];

export const featuredRecipes = {
    imageUrl: featuredImg,
    featuredIcon: <BsJournalBookmark className="text-primary size-4 mt-[5px]" />,
    title: 'Neues Rezept',
    description: 'Klicke hier und leg\' los.',
    href: '/rezepte/neu',
    label: 'Neues Rezept',
    icon: <GoPlus className="size-4 mt-[2px]" />,
}