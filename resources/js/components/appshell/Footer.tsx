import { Link } from '@inertiajs/react';
import BackToTopButton from '@/components/appshell/BackToTopButton';

import { BiCategory } from 'react-icons/bi';
import { BsChevronCompactRight } from 'react-icons/bs';

import { BsApp } from "react-icons/bs";
import { VscSymbolMisc } from 'react-icons/vsc';
import { GrNavigate } from 'react-icons/gr';
import { TbSalad } from 'react-icons/tb';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { CircularMenu } from '@/components/appshell/CircularMenu';
import { Button } from '@/components/ui/button';
import FooterColumn from '@/components/appshell/FooterColumn';

import { ChevronDown, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import appBro from '@images/svg/Install-App-bro.svg';


interface FooterProps {
    className?: string;
}

/**
 * Renders the footer section of the website, containing navigation links, FAQ,
 * quality assurance badge, and a newsletter subscription form. It also includes
 * site information and legal links at the bottom. The footer is responsive and
 * adapts to different screen sizes using a grid layout.
 */
export default function Footer({ className }: FooterProps) {

    const column1 = [
        {
            title: 'Start',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/',
        },
        {
            title: 'Rezepte',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/rezepte',
        },
        {
            title: 'Zutaten',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/zutaten',
        },
        {
            title: 'Community',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/community',
        },
    ];

    const column2 = [
        {
            title: 'Vorspeisen',
            icon: <TbSalad className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Vorspeise' }),
        },
        {
            title: 'Hauptgerichte',
            icon: <PiCookingPot className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Hauptgericht' }),
        },
        {
            title: 'Nachtisch',
            icon: <GiCakeSlice className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Nachtisch' }),
        },
        {
            title: 'Cocktails',
            icon: <LiaCocktailSolid className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Cocktail' }),
        },
        {
            title: 'Backen',
            icon: <RiCake3Line className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Backen' }),
        },
        {
            title: 'Snacks',
            icon: <GiCrystalBars className="mt-[2px] text-primary" />,
            href: route('recipes.search', { search: 'Snack' }),
        },
    ];

    const column3 = [
        {
            title: 'Ausstattung',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/ausstattung',
        },
        {
            title: 'Mis en place',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/mis-en-place',
        },
        {
            title: 'FAQ',
            icon: <BsChevronCompactRight className="mt-[2px] text-primary" />,
            href: '/faq',
        },

    ];

    const column4Content = (
        <div className="text-center flex flex-col gap-2">
            <p className="mx-auto inline-flex gap-2 text-primary"><span className="font-la-belle-aurore mt-[2px] text-xl">Toby's</span><span className="font-bold text-xl">Rezeptbuch</span></p>
            <img src={appBro} className="w-52 mb-3 mx-auto" alt="App-Installation" />
            <Button asChild className="w-56 mx-auto" variant="primary"><Link href="/app-installation" className="flex gap-1"><ArrowRight /> Zur Installationsanleitung</Link></Button>
            <p className="text-sm mt-2">Jetzt für iOS und Android erhältlich.</p>
        </div>
    );  


    return (
        <>
            <div
                className={cn(
                    'bg-gradient-to-b from-stone-800 to-stone-900 border-t-4 border-t-primary text-gray-100',
                    className,
                )}
            >
                <BackToTopButton />
                <footer className="mx-auto container px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-14 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6 border-b border-b-black">
                        <FooterColumn
                            title="Navigation"
                            columnIcon={<GrNavigate />}
                            className="mx-auto max-w-[21.5rem] sm:w-full"
                            items={column1}
                        />
                        <FooterColumn
                            title="Kategorien"
                            columnIcon={<BiCategory />}
                            className="mx-auto max-w-[21.5rem] sm:w-full"
                            items={column2}
                        />
                        <FooterColumn
                            title="Weitere Themen"
                            columnIcon={<VscSymbolMisc />}
                            className="mx-auto max-w-[21.5rem] sm:w-full"
                            items={column3}
                        />
                        <FooterColumn
                            title="Installier' die App"
                            columnIcon={<BsApp />}
                            className="mx-auto max-w-[21.5rem] sm:w-full"
                            children={column4Content}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-center border-t border-stone-700 pt-6">
                        <ul className="text-sm mx-auto text-center sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                            <li>
                                <Link
                                    href="/nutzungsbedingungen"
                                    className="hover:text-primary text-sm"
                                    title="Nutzungsbedingungen"
                                >
                                    Nutzungsbedingungen
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>
                                <Link
                                    href="/datenschutz"
                                    className="hover:text-primary text-sm"
                                    title="Datenschutz"
                                >
                                    Datenschutz
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>
                                <Link
                                    href="/cookie-hinweis"
                                    className="hover:text-primary text-sm"
                                    title="Cookie-Hinweis"
                                >
                                    Cookie-Hinweis
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>
                                <Link
                                    href="/kontakt"
                                    className="hover:text-primary text-sm"
                                    title="Kontakt"
                                >
                                    Kontakt
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>
                                <Link
                                    href="/impressum"
                                    className="hover:text-primary text-sm"
                                    title="Impressum"
                                >
                                    Impressum
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-center items-center pt-10">
                        <ul className="text-sm mx-auto text-center flex flex-col gap-3">
                            <li className="inline-flex gap-1 cursor-default">
                                Made with <FaRegHeart className="text-red-500 mt-0.5 mx-1" /> by{' '}
                                <a
                                    href="https://www.tobias-hopp.de/de"
                                    className="hover:text-primary text-sm target-white"
                                    title="Tobias Hopp"
                                    target="_blank"
                                >
                                    Tobias Hopp
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
            <CircularMenu />
        </>
    );
}
