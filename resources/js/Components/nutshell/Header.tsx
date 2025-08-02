import AppLogo from '@/Components/nutshell/AppLogo';
import NavLink from '@/Components/reusables/NavLink';
import AuthLink from '@/Components/reusables/AuthLink';
import ResponsiveNavLink from '@/Components/reusables/ResponsiveNavLink';
import Dropdown from '@/Components/Dropdown';
import { BsHouse } from "react-icons/bs";
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { BsJournalBookmark } from "react-icons/bs";
import { LiaCocktailSolid } from "react-icons/lia";
import { FiCheckCircle } from "react-icons/fi";

const Header = () => {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <header className="border-b border-gray-100 bg-white shadow">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex justify-between sm:space-x-8 md:space-x-24 lg:space-x-44">
                        <div className="flex shrink-0">
                            <AppLogo className="py-2md:py-3 lg:py-4" />
                        </div>
                        <div className="hidden sm:-my-px sm:flex space-x-2 md:space-x-4 lg:space-x-8">
                            <NavLink href="/" active={window.location.pathname === '/'} className="py-4" icon={<BsHouse />}>
                                Start
                            </NavLink>
                            <NavLink href="/gerichte" active={window.location.pathname === '/gerichte'} icon={<BsJournalBookmark />}>
                                Gerichte
                            </NavLink>
                            <NavLink href="/cocktails" active={window.location.pathname === '/cocktails'} icon={<LiaCocktailSolid />}>
                                Cocktails
                            </NavLink>
                            {/* {user && (
                                <Button className="mt-2">
                                    Neues Rezept
                                </Button>
                            )} */}
                        </div>
                    </div>
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        {user ? (
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
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
                                        <Dropdown.Link href="/dashboard">
                                            Dashboard
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/profile">
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className="space-x-2">
                                <AuthLink href="/register" className="text-slate-700 hover:text-slate-500" icon={<FiCheckCircle />}>
                                    Register
                                </AuthLink>
                                <AuthLink href="/login" className="text-emerald-700 hover:text-slate-500" icon={<BsJournalBookmark />}>
                                    Login
                                </AuthLink>
                            </div>
                        )}
                    </div>
                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
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
                        <ResponsiveNavLink href="/rezepte" active={window.location.pathname === '/rezepte'}>
                            Rezepte
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/cocktails" active={window.location.pathname === '/cocktails'}>
                            Cocktails
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
                                <ResponsiveNavLink href="/dashboard">
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="/profile">
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href="/logout"
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href="/login">
                                    Login
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="/register">
                                    Register
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
  )
}

export default Header