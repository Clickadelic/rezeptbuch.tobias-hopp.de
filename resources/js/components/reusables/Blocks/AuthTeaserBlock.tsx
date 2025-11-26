import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { BsDoorOpen, BsJournalBookmark } from 'react-icons/bs';

import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { FiCheckCircle } from 'react-icons/fi';

import { cn } from '@/lib/utils';

interface AuthTeaserBlockProps {
    className?: string;
}

/**
 * A teaser box for the authentication system.
 * If the user is logged in, it renders a link to the dashboard.
 * If the user is not logged in, it renders two links: one to register and one to login.
 */
export default function AuthTeaserBox({ className }: AuthTeaserBlockProps) {
    const { auth } = usePage<SharedPageProps>().props;
    return (
        <div className={cn('flex flex-col gap-2 items-center justify-center my-16', className)}>
            <h2 className="flex gap-2 text-2xl font-roboto-condensed">
                <BsJournalBookmark className="text-primary size-6 mt-1" />
                Rezeptbuch
            </h2>
            <h3 className="text-xl text-gray-500 dark:text-gray-400 font-yellowtail">
                praktisch - digital
            </h3>
            <div className="flex gap-2 mt-5">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700"
                    >
                        <RiDashboardHorizontalLine className="size-4 mt-1" />
                        Zum Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('register')}
                            className="flex gap-2 border border-gray-800 dark:border-gray-200 dark:hover:border-gray-400 text-gray-800 hover:text-gray-400 hover:border-gray-400 dark:text-gray-200 dark:hover:text-gray-400 rounded px-3 py-1.5"
                            title="Registrieren"
                            aria-label="Registrieren"
                        >
                            <FiCheckCircle className="size-4 mt-1" />
                            Registrieren
                        </Link>
                        <Link
                            href={route('login')}
                            className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700"
                            title="Login"
                            aria-label="Login"
                        >
                            <BsDoorOpen className="size-4 mt-1" />
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
