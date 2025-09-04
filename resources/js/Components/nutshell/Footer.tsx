import { Link } from '@inertiajs/react';

import badgeSrc from '@images/Quality-Symbol.png';

import { BsChevronCompactRight } from 'react-icons/bs';
import { TbMailHeart } from 'react-icons/tb';
import { IoIosRibbon } from 'react-icons/io';
import { FaQ } from 'react-icons/fa6';
import { GrNavigate } from 'react-icons/gr';

import { CircularMenu } from '@/Components/nutshell/CircularMenu';

/**
 * Renders the footer section of the website, containing navigation links, FAQ,
 * quality assurance badge, and a newsletter subscription form. It also includes
 * site information and legal links at the bottom. The footer is responsive and
 * adapts to different screen sizes using a grid layout.
 */

export default function Footer() {
    return (
        <>
            <div className="bg-gradient-to-b from-stone-800 to-stone-900 border-t-4 border-t-emerald-800 text-slate-100">
                <footer className="mx-auto container px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h2 className="mb-8 text-2xl text-slate-100 flex gap-2 font-secondary items-center justify-center sm:justify-start">
                                <GrNavigate className="mt-1" />
                                <span className="font-medium font-oswald">Navigation</span>
                            </h2>
                            <ul className="space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                        title="Startseite"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Startseite
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/gerichte"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                        title="Gerichte"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Gerichte
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cocktails"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                        title="Cocktails"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Cocktails
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/zutaten"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                        title="Zutaten"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Zutaten
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-8 text-2xl text-slate-100 flex gap-2 font-secondary items-center justify-center sm:justify-start">
                                <FaQ className="mt-1" />
                                <span className="font-medium font-oswald">Weiteres</span>
                            </h2>
                            <ul className="space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start">
                                <li>
                                    <a
                                        href="https://www.tobias-hopp.de"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                        title="Portfolio"
                                        target="_blank"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex gap-1 text-slate-100 hover:text-slate-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto max-w-[21.5rem] sm:w-full">
                            <h2 className="mb-8 text-2xl text-slate-100 flex gap-2 font-secondary items-center justify-center sm:justify-start">
                                <IoIosRibbon className="mt-1" />
                                <span className="font-medium font-oswald">100% Qualit&auml;t</span>
                            </h2>
                            <p className="mb-8 sm:mb-1">
                                Alle Gerichte wurden selbstverständlich vorher von mir gekocht,
                                probiert und verfeinert.
                            </p>
                            <img src={badgeSrc} alt="100% Qualit&auml;t" className="mx-auto" />
                        </div>
                        <div className="mx-auto max-w-[21.5rem] sm:w-full">
                            <h2 className="mb-8 text-2xl text-slate-100 flex gap-2 font-secondary items-center justify-center sm:justify-start">
                                <TbMailHeart className="mt-1" />
                                <span className="font-medium font-oswald">Newsletter</span>
                            </h2>
                            <p className="mb-8">
                                Bleib' auf dem Laufenden, wenn es Neuigkeiten zu meinem Rezeptbuch
                                gibt.
                            </p>
                            <form>
                                <div className="flex flex-col space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100"
                                    />
                                    <button
                                        type="submit"
                                        className="px-2 py-1 rounded bg-emerald-800 text-slate-100 hover:bg-emerald-800"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center border-t border-t-stone-500 pt-6 mt-12">
                        <ul className="text-sm mx-auto text-center sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                            <li>
                                <Link
                                    href="/impressum"
                                    className="hover:text-slate-400 text-sm"
                                    title="Impressum"
                                >
                                    Impressum
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>Toby's Rezeptbuch</li>
                            <li className="hidden sm:inline-block">&middot;</li>
                            <li>Alle Rechte vorbehalten &copy; {new Date().getFullYear()}.</li>
                        </ul>
                    </div>
                </footer>
            </div>
            <CircularMenu />
        </>
    );
}
