import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from "@/components/ui/button";
import AppLogo from '@/components/AppLogo';

import Dropdown from '@/components/Dropdown';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink from '@/components/ResponsiveNavLink';

import { VscAccount } from "react-icons/vsc";
import { PiHouseLineThin } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { LiaCocktailSolid } from "react-icons/lia";
import { BiPlus } from "react-icons/bi";

export default function AppHeader () {
    const { auth } = usePage().props as { auth: { user?: any } };
    const user = auth?.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <header className="border-b border-gray-100 bg-white">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <nav className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex shrink-0 items-center">
                            <AppLogo classNames="my-8 sm:mr-4 md:mr-8 lg:mr-12" href="/" title="Toby&apos;s Rezeptbuch" />
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink href="/" active={window.location.pathname === '/'} className="flex flex-row gap-2 items-center">
                                <PiHouseLineThin />Start
                            </NavLink>
                            <NavLink href="/gerichte" active={window.location.pathname === '/gerichte'} className="flex flex-row gap-2 items-center">
                                <BiDish />Gerichte
                            </NavLink>
                            <NavLink href="/cocktails" active={window.location.pathname === '/cocktails'} className="flex flex-row gap-2 items-center">
                                <LiaCocktailSolid />Cocktails
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        {user ? (
                            <>
                                <Button variant="primary" size="sm" className="font-normal" onClick={() => alert("Add new recipe")}>
                                    <BiPlus />Neues Rezept
                                </Button>
                                
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                >
                                                    <VscAccount className="mr-2" />
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
                            </>
                        ) : (
                            <div className="space-x-2">
                                <Link href="/login" className="text-gray-700 hover:text-emerald-800">
                                    Login
                                </Link>
                                <Link href="/register" className="text-gray-700 hover:text-emerald-800">
                                    Registrierung
                                </Link>
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
                </nav>
            </div>
            {showingNavigationDropdown && (
                <nav className="sm:hidden">
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href="/" active={window.location.pathname === '/'}>
                            Start
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/gerichte" active={window.location.pathname === '/gerichte'}>
                            Gerichte
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
                </nav>
            )}
        </header>
    );
}