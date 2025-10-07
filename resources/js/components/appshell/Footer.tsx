import { Link } from '@inertiajs/react';

import BackToTopButton from '@/components/appshell/BackToTopButton/Index';
import NewsletterForm from '../forms/NewsletterForm';

import badgeSrc from '@images/Quality-Symbol.png';

import { BsChevronCompactRight } from 'react-icons/bs';
import { TbMailHeart } from 'react-icons/tb';
import { IoIosRibbon } from 'react-icons/io';
import { FaQ } from 'react-icons/fa6';
import { GrNavigate } from 'react-icons/gr';

import { CircularMenu } from '@/components/appshell/CircularMenu';
import { cn } from '@/lib/utils';

interface FooterProps {
    className?: string
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
            <BackToTopButton />
            
            <div className={cn("bg-gradient-to-b from-stone-800 to-stone-900 border-t-4 border-t-primary text-gray-100", className)}>
                <footer className="mx-auto container px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-b-black ">
                        <div>
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <GrNavigate />
                                <span className="font-medium">Navigation</span>
                            </h2>
                            <ul className="pt-4 space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start border-t border-stone-700">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                        title="Startseite"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Startseite
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/rezepte"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                        title="Rezepte"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Rezepte
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/zutaten"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                        title="Zutaten"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Zutaten
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                                <FaQ />
                                <span className="font-medium">Weiteres</span>
                            </h2>
                            <ul className="pt-4 space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start border-t border-stone-700">
                                <li>
                                    <a
                                        href="https://www.tobias-hopp.de"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
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
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex gap-1 text-gray-100 hover:text-gray-400"
                                    >
                                        <BsChevronCompactRight className="mt-1" />
                                        Link
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
                                    Alle Rezepte wurden entweder schon mal gekocht oder für gut befunden und probiert.
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
                                    Bleib' auf dem Laufenden, wenn es Neuigkeiten zu meinem Rezeptbuch
                                    gibt.
                                </p>
                                <NewsletterForm />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center border-t border-stone-700 pt-6">
                        <ul className="text-sm mx-auto text-center sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                            <li>
                                <Link
                                    href="/impressum"
                                    className="hover:text-gray-400 text-sm"
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
