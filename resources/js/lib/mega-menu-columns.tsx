import { BsJournalBookmark } from 'react-icons/bs';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbSalt } from 'react-icons/tb';
import { LuUsersRound } from 'react-icons/lu';
import { RiHomeLine } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { BiCategory } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';

import { IconMap } from './icon-map';

export const recipesMegaMenu = [
    {
        title: 'Rezepte',
        items: [
            {
                icon: <BsJournalBookmark className="text-primary" />,
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
                icon: IconMap['vorspeise'],
                title: 'Vorspeisen',
                href: route('recipes.search', { search: 'Vorspeise' }),
                description: 'für den kleinen Hunger',
            },
            {
                icon: IconMap['hauptgericht'],
                title: 'Hauptgerichte',
                href: route('recipes.search', { search: 'Hauptgericht' }),
                description: 'für den großen Hunger',
            },
            {
                icon: IconMap['nachtisch'],
                title: 'Nachtisch',
                href: route('recipes.search', { search: 'Nachtisch' }),
                description: 'für ein süßes Ende',
            },
        ],
    },
    {
        items: [
            {
                icon: IconMap['cocktail'],
                title: 'Cocktails',
                href: route('recipes.search', { search: 'Cocktail' }),
                description: 'für einen schönen Abend',
            },
            {
                icon: IconMap['backen'],
                title: 'Backen',
                href: route('recipes.search', { search: 'Backen' }),
                description: 'für eine gute Zeit',
            },
            {
                icon: IconMap['snack'],
                title: 'Snacks',
                href: route('recipes.search', { search: 'Snack' }),
                description: 'für zwischendurch',
            },
        ],
    },
    
];

export const featuredRecipes = {
    icon: <RiDashboardHorizontalLine className="mt-[2px]" />,
    title: 'Dashboard',
    description: 'Deine Rezepte, Deine Zahlen.',
    label: 'Dashboard',
    href: '/dashboard',
};