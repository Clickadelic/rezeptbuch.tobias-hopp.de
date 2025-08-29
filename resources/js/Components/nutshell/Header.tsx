import AppLogo from '@/Components/nutshell/AppLogo';
import NavLink from '@/Components/reusables/NavLink';
import NavButton from '@/Components/reusables/NavButton';
import ResponsiveNavLink from '@/Components/reusables/ResponsiveNavLink';
import Dropdown from '@/Components/Dropdown';
import { BsHouse } from 'react-icons/bs';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { BsJournalBookmark } from 'react-icons/bs';
import { LiaCocktailSolid } from 'react-icons/lia';
import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { TbSalt } from 'react-icons/tb';
import { RxAvatar } from 'react-icons/rx';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import { GoPlus } from 'react-icons/go';
/**
 * The application header.
 *
 * @return {JSX.Element} The header.
 */

const Header = () => {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <header className="bg-white shadow-lg">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex justify-start md:justify-between sm:space-x-4 md:space-x-16 lg:space-x-44">
                        <div className="flex shrink-0">
                            <AppLogo className="my-4" />
                        </div>
                        <div className="hidden sm:flex sm:space-x-1 md:space-x-2 lg:space-x-8">
                            <NavLink
                                href="/"
                                active={window.location.pathname === '/'}
                                className="py-4"
                                icon={<BsHouse />}
                            >
                                Start
                            </NavLink>
                            <NavLink
                                href="/gerichte"
                                active={window.location.pathname === '/gerichte'}
                                icon={<BsJournalBookmark />}
                            >
                                Gerichte
                            </NavLink>
                            <NavLink
                                href="/cocktails"
                                active={window.location.pathname === '/cocktails'}
                                icon={<LiaCocktailSolid />}
                            >
                                Cocktails
                            </NavLink>
                            <NavLink
                                href="/zutaten"
                                active={window.location.pathname === '/zutaten'}
                                icon={<TbSalt />}
                            >
                                Zutaten
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden sm:ms-2 sm:flex sm:items-center">
                        {user ? (
                            <div className="relative ms-3 sm:flex sm:flex-row sm:gap-3">
                                <Button variant="primary" asChild>
                                    <Link
                                        href="/gerichte/neues-gericht"
                                        className="flex items-center gap-2"
                                    >
                                        <GoPlus className="size-4" />
                                        Neu
                                    </Link>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-slate-800 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none gap-2"
                                            >
                                                <RxAvatar className="size-4 hidden md:flex" />
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/dashboard">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/profile">Profile</Dropdown.Link>
                                        <Dropdown.Link href="/logout" method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className="space-x-1 sm:space-x-2 md:space-x-3">
                                <NavButton
                                    href="/register"
                                    className="text-slate-800 hover:text-slate-500 border border-emerald-600 "
                                    icon={<FiCheckCircle className="text-slate-800" />}
                                >
                                    Registrierung
                                </NavButton>
                                <NavButton
                                    href="/login"
                                    className="text-white border border-emerald-700 bg-emerald-700 hover:bg-emerald-600 hover:text-slate-200 hover:border-emerald-600"
                                    icon={<BsDoorOpen />}
                                >
                                    Login
                                </NavButton>
                            </div>
                        )}
                    </div>
                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown((previousState) => !previousState)
                            }
                            className="inline-flex items-center justify-center rounded p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {showingNavigationDropdown && (
                <div className="sm:hidden">
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href="/" active={window.location.pathname === '/'}>
                            Start
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/gerichte"
                            active={window.location.pathname === '/gerichte'}
                        >
                            Gerichte
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/cocktails"
                            active={window.location.pathname === '/cocktails'}
                        >
                            Cocktails
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/zutaten"
                            active={window.location.pathname === '/zutaten'}
                        >
                            Zutaten
                        </ResponsiveNavLink>
                    </div>

                    {user ? (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href="/dashboard">Dashboard</ResponsiveNavLink>
                                <ResponsiveNavLink href="/profile">Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href="/logout" as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href="/login">Login</ResponsiveNavLink>
                                <ResponsiveNavLink href="/register">Register</ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
