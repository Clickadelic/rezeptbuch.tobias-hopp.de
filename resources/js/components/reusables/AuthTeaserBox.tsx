import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsDoorOpen, BsJournalBookmark } from 'react-icons/bs';

import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { FiCheckCircle } from "react-icons/fi";

export default function AuthTeaserBox () {
    const { auth } = usePage<SharedPageProps>().props;
    return (
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
                        <Link href={route('register')} className="flex gap-2 border border-gray-800 dark:border-gray-200 dark:hover:border-gray-400 text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 rounded px-3 py-1.5">
                            <FiCheckCircle className="size-4 mt-1" />Registrieren
                        </Link>
                        <Link href={route('login')} className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700">
                            <BsDoorOpen className="size-4 mt-1" />
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}