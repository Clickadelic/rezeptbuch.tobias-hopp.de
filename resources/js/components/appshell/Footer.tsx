import { Link } from '@inertiajs/react';

import BackToTopButton from '@/components/appshell/BackToTopButton/Index';
import NewsletterForm from '../forms/NewsletterForm';

import badgeSrc from '@images/Quality-Symbol.png';
import { BiCategory } from 'react-icons/bi';
import { BsChevronCompactRight } from 'react-icons/bs';
import { TbMailHeart } from 'react-icons/tb';
import { IoIosRibbon } from 'react-icons/io';
import { GrNavigate } from 'react-icons/gr';
import { TbSalad } from 'react-icons/tb';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';

import { CircularMenu } from '@/components/appshell/CircularMenu';
import { cn } from '@/lib/utils';

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-b-black">
                        <div>
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <GrNavigate />
                                <span className="font-medium">Navigation</span>
                            </h2>
                            <ul className="pt-4 space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start border-t border-stone-700">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                        title="Startseite"
                                    >
                                        <BsChevronCompactRight className="mt-1 text-primary" />
                                        Startseite
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/rezepte"
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                        title="Rezepte"
                                    >
                                        <BsChevronCompactRight className="mt-1 text-primary" />
                                        Rezepte
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/zutaten"
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                        title="Zutaten"
                                    >
                                        <BsChevronCompactRight className="mt-1 text-primary" />
                                        Zutaten
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/community"
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                        title="Community"
                                    >
                                        <BsChevronCompactRight className="mt-1 text-primary" />
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <BiCategory />
                                <span className="font-medium">Kategorien</span>
                            </h2>
                            <ul className="pt-4 space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start border-t border-stone-700">
                                <li>
                                    <a
                                        href={route('recipes.search', { search: 'Vorspeise' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                        title="Vorspeisen"
                                    >
                                        <TbSalad className="mt-1 text-primary" />
                                        Vorspeisen
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href={route('recipes.search', { search: 'Hauptgericht' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                    >
                                        <PiCookingPot className="mt-1 text-primary" />
                                        Hauptgerichte
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('recipes.search', { search: 'Nachtisch' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                    >
                                        <RiCake3Line className="mt-1 text-primary" />
                                        Nachtisch
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('recipes.search', { search: 'Cocktail' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                    >
                                        <LiaCocktailSolid className="mt-1 text-primary" />
                                        Cocktails
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('recipes.search', { search: 'Backen' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                    >
                                        <GiCakeSlice className="mt-1 text-primary" />
                                        Backen
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('recipes.search', { search: 'Snack' })}
                                        className="flex gap-3 text-gray-100 hover:text-gray-400"
                                    >
                                        <GiCrystalBars className="mt-1 text-primary" />
                                        Snacks
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto max-w-[21.5rem] sm:w-full">
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <IoIosRibbon />
                                <span className="font-medium">100% Qualit&auml;t</span>
                            </h2>
                            <div className="pt-4 border-t border-stone-700">
                                <p className="mb-5 text-center sm:text-left">
                                    Alle Rezepte wurden entweder schon mal gekocht oder für gut
                                    befunden und probiert.
                                </p>
                                <img src={badgeSrc} alt="100% Qualit&auml;t" className="mx-auto" />
                            </div>
                        </div>
                        <div className="mx-auto max-w-[21.5rem] sm:w-full">
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <TbMailHeart />
                                <span className="font-medium">Newsletter</span>
                            </h2>
                            <div className="border-t border-stone-700 pt-4">
                                <p className="pb-4 text-center sm:text-left mx-5 sm:mx-0">
                                    Bleib' auf dem Laufenden, wenn es Neuigkeiten zu meinem
                                    Rezeptbuch gibt.
                                </p>
                                <NewsletterForm />
                            </div>
                        </div>
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
