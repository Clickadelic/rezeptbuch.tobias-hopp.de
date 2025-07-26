import { Link } from '@inertiajs/react'

import badgeSrc from '@images/Quality-Symbol.png';

import { BsChevronCompactRight } from "react-icons/bs";
import { TbMailHeart } from "react-icons/tb";
import { IoIosRibbon } from "react-icons/io";
import { FaQ } from "react-icons/fa6";
import { GrNavigate } from "react-icons/gr";

import AddButton from '@/Components/AddButton';


export default function Footer() {
  return (
    <>
        <div className="bg-stone-800 border border-t-4 border-t-emerald-800 text-slate-100">
            <footer className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="mb-8 text-2xl text-slate-100 flex gap-2"><GrNavigate className="mt-1" />Navigation</h2>
                        <ul className="space-y-2">
                            <li><Link href="/" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Start</Link></li>
                            <li><Link href="/rezepte" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Rezepte</Link></li>
                            <li><Link href="/cocktails" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Cocktails</Link></li>
                            <li><Link href="/impressum" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Impressum</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-8 text-2xl text-slate-100 flex gap-2"><FaQ className="mt-1" />FAQ</h2>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />About</Link></li>
                            <li><Link href="/zutaten" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Zutaten</Link></li>
                            <li><Link href="/" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Link</Link></li>
                            <li><Link href="/" className="flex gap-1 font-normal text-slate-100 hover:text-slate-400"><BsChevronCompactRight className="mt-1" />Link</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-8 text-2xl text-slate-100 flex gap-2"><IoIosRibbon className="mt-1" />100% Qualit&auml;t</h2>
                        <img src={badgeSrc} alt="100% Qualit&auml;t" className="mx-auto" />
                    </div>
                    <div>
                        <h2 className="mb-8 text-2xl text-slate-100 flex gap-2"><TbMailHeart className="mt-1" />Newsletter</h2>
                        <p className="mb-6">Bleib' auf dem Laufenden, wenn es Neuigkeiten gibt.</p>
                        <form>
                            <div className="flex flex-col space-y-2">
                                <input type="text" placeholder="Name" className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100" />
                                <input type="email" placeholder="Email" className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100" />
                                <button type="submit" className="px-2 py-1 rounded bg-emerald-800 text-slate-100 hover:bg-emerald-800">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center border-t border-t-stone-800 pt-6 mt-12">
                    <ul className="text-sm mx-auto text-center sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                        <li>Toby's Kochbuch</li>
                        <li className="hidden sm:inline-block">&middot;</li>
                        <li>Alle Rechte vorbehalten &copy; {new Date().getFullYear()}</li>
                        <li className="hidden sm:inline-block">&middot;</li>
                        <li><Link href="/impressum" className="hover:text-slate-400" title="Impressum">Impressum</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
        <AddButton />
    </>
  )
}
