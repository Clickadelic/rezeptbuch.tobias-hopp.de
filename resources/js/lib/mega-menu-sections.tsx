import { BsJournalBookmark } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbSalt } from 'react-icons/tb';
import { LuUsersRound } from 'react-icons/lu';
import { RiHomeLine } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { BiCategory } from "react-icons/bi";
import { IconMap } from './icon-map';
import { BsCardList } from "react-icons/bs";
export const megaMenuSections = [
    {
        title: 'Rezepte',
        categoryIcon: <BsJournalBookmark className="mt-1 text-primary" />,
        items: [
            {   
                icon: <BsCardList className="mt-1 text-primary" />,
                title: 'Alle Rezepte',
                href: '/rezepte',
                description: 'Alle Rezepte in der Übersicht.',
            },
            {
                icon: <TbSalt className="mt-1 text-primary" />,
                title: 'Zutaten',
                href: '/zutaten',
                description: 'Alles was rein kommt',
            },
            {
                icon: <LuUsersRound className="mt-1 text-primary" />,
                title: 'Community',
                href: '/community',
                description: 'Alle, die zum Rezeptbuch beitragen.',
            },
        ],
    },
    {
        title: 'Speisen',
        categoryIcon: <BiCategory className="mt-1 text-primary" />,
        items: [
            {
                icon: IconMap['vorspeise'],
                title: 'Vorspeisen',
                href: '#',
                description: 'für den kleinen Hunger.',
            },
            {
                icon: IconMap['hauptgericht'],
                title: 'Hauptgerichte',
                href: '#',
                description: 'für den großen Hunger.',
            },
            {   
                icon: IconMap['nachtisch'],
                title: 'Nachtisch',
                href: '#',
                description: 'für ein süßes Ende.',
            },
        ],
    },
    {
        title: 'Snacks & Getränke',
        categoryIcon: <BiCategory className="mt-1 text-primary" />,
        items: [
            {
                icon: IconMap['cocktail'],
                title: 'Cocktails',
                href: '/#',
                description: 'für einen schönen Abend.',
            },
            {
                icon: IconMap['backen'],
                title: 'Backen',
                href: '#',
                description: 'für eine gute Zeit',
            },
            {
                icon: IconMap['snack'],
                title: 'Snacks',
                href: '#',
                description: 'für zwischendurch',
            },
        ],
    },
];

export const featured = {
    title: 'Freie Box',
    description: 'Lorem Ipsum dolor sit amet consectutor.',
    href: '/dashboard',
};
