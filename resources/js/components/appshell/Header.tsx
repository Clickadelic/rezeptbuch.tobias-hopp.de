import { useState } from 'react';
import { usePage } from '@inertiajs/react';

import { Button } from '@/components/ui/button';

import AppLogo from '@/components/appshell/AppLogo';
import NavLink from '@/components/reusables/NavLink';
import NavButton from '@/components/reusables/NavButton';
import ResponsiveNavLink from '@/components/reusables/ResponsiveNavLink';
import Dropdown from '@/components/reusables/Dropdown';
import ModeToggle from '@/components/appshell/ModeToggle';
import DraftAlert from '@/components/appshell/DraftAlert';
import Avatar from '@/components/reusables/Avatar';
import MegaMenu from '@/components/appshell/MegaMenu';

import { recipesMegaMenu, featuredRecipes } from '@/components/appshell/MegaMenuColumns';

import { FiUsers } from 'react-icons/fi';
import { LuUsersRound } from 'react-icons/lu';
import { BsJournalBookmark } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbSalt } from 'react-icons/tb';
import { BiExit } from 'react-icons/bi';
import { RiHomeLine } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';
import { BsBell } from 'react-icons/bs';

import { usePermissions } from '@/hooks/usePermissions';

import { SharedPageProps } from '@/types';

/**
 * The application header.
 *
 * @return {JSX.Element} The header.
 */
export default function Header() {
    const { auth, drafts } = usePage<SharedPageProps>().props;
    const { hasRole } = usePermissions();
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState<boolean>(false);
    return (
        <header className="bg-white dark:bg-gray-800 shadow-lg">
            <div className="mx-auto container px-6 py-2 lg:py-0">
                <div className="flex justify-between">
                    <div className="w-full flex justify-between">
                        <div className="relative flex shrink-0">
                            <AppLogo className="mx-auto mt-2 lg:mt-[14px] mr-1 sm:mr-3" />
                        </div>
                        <div className="relative hidden lg:flex lg:gap-1 xl:gap-4 mx-auto">
                            <NavLink
                                href="/"
                                active={window.location.pathname === '/'}
                                title="Zur Startseite"
                                className="p-4 font-medium text-gray-800 dark:text-gray-200"
                                icon={<RiHomeLine className="size-4 text-primary" />}
                            >
                                Start
                            </NavLink>
                            <MegaMenu
                                title="Rezepte"
                                icon={<BsJournalBookmark className="size-4" />}
                                columns={recipesMegaMenu}
                                featured={featuredRecipes}
                            />
                            <NavLink
                                href="/zutaten"
                                active={window.location.pathname.startsWith('/zutaten')}
                                className="p-4 text-gray-800 dark:text-gray-200"
                                icon={<TbSalt className="size-4 text-primary" />}
                            >
                                Zutaten
                            </NavLink>
                            <NavLink
                                href="/community"
                                active={window.location.pathname.startsWith('/community')}
                                className="p-4 font-medium text-gray-800 dark:text-gray-200"
                                icon={<LuUsersRound className="size-4 text-primary" />}
                            >
                                Community
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden lg:ms-2 lg:flex lg:items-center gap-1 md:gap-2 lg:gap-3">
                        {auth.user ? (
                            <>
                                <DraftAlert drafts={drafts} />
                                <NavButton
                                    href="/dashboard"
                                    active={window.location.pathname.startsWith('/dashboard')}
                                    icon={<RiDashboardHorizontalLine className="size-4" />}
                                    className="relative bg-primary text-white hover:bg-emerald-600"
                                >
                                    Dashboard
                                </NavButton>
                                <div className="relative sm:flex sm:flex-row sm:gap-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex mt-1">
                                                <Button
                                                    type="button"
                                                    variant="flat"
                                                    className="text-gray-800 hover:text-primary dark:text-gray-200 text-base dark:hover:text-gray-400"
                                                >
                                                    <Avatar url={auth?.user?.avatar} />
                                                    {auth.user?.name}
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
                                                </Button>
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            {hasRole('admin') && (
                                                <Dropdown.Link href="/admin" className="flex gap-2">
                                                    <MdOutlineAdminPanelSettings className="size-4 mt-1 text-primary" />
                                                    Admin
                                                </Dropdown.Link>
                                            )}
                                            <Dropdown.Link href="/profile" className="flex gap-2">
                                                <RiAccountPinBoxLine className="size-4 mt-1 text-primary" />
                                                Profil
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="flex gap-2 hover:cursor-pointer"
                                            >
                                                <BiExit className="size-4 mt-1 text-primary" />
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </>
                        ) : (
                            <div className="flex gap-3">
                                <NavButton
                                    href="/register"
                                    className="border border-gray-800 text-gray-800 hover:text-gray-400 hover:border-gray-400 dark:text-gray-400 dark:border-gray-400 dark:hover:border-gray-600"
                                    icon={<FiCheckCircle className="asd" />}
                                >
                                    Registrieren
                                </NavButton>
                                <NavButton
                                    href="/login"
                                    className="bg-primary border border-primary text-white hover:text-gray-200 hover:border-gray-600 dark:text-white dark:border-primary dark:hover:border-primary"
                                    icon={<BsDoorOpen />}
                                >
                                    Login
                                </NavButton>
                            </div>
                        )}
                        <ModeToggle />
                    </div>
                    <div className="-me-2 flex gap-2 items-center lg:hidden">
                        <ModeToggle />
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown((previousState) => !previousState)
                            }
                            aria-label="Mobile Navigation"
                            title="Mobile Navigation"
                            className="inline-flex items-center justify-center rounded p-1 text-primary transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
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
                <div className="md:hidden border-b-2 border-primary">
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href="/"
                            className="flex gap-2"
                            active={window.location.pathname === '/'}
                        >
                            <RiHomeLine className="size-4 mt-1" /> Start
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/rezepte"
                            className="flex gap-2"
                            active={window.location.pathname.startsWith('/rezepte')}
                        >
                            <BsJournalBookmark className="size-4 mt-1" /> Rezepte
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/zutaten"
                            className="flex gap-2"
                            active={window.location.pathname === '/zutaten'}
                        >
                            <TbSalt className="size-4 mt-1" /> Zutaten
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/community"
                            className="flex gap-2"
                            active={window.location.pathname === '/community'}
                        >
                            <FiUsers className="size-4 mt-1" /> Community
                        </ResponsiveNavLink>
                    </div>

                    {auth.user ? (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="ps-3 pe-4 flex items-start justify-start gap-2">
                                <Avatar url={auth.user.avatar} className="mt-1" />
                                <div className="flex flex-col">
                                    <span>{auth.user.name}</span>
                                    <span className="text-xs">{auth.user.email}</span>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                {hasRole('admin') && (
                                    <ResponsiveNavLink
                                        href="/admin"
                                        className="flex gap-2"
                                        active={window.location.pathname === '/admin'}
                                    >
                                        <MdOutlineAdminPanelSettings className="size-4 mt-1" />{' '}
                                        Admin
                                    </ResponsiveNavLink>
                                )}
                                <ResponsiveNavLink
                                    href="/dashboard"
                                    className="flex gap-2"
                                    title="Dashboard"
                                    aria-label="Dashbaord"
                                >
                                    <RiDashboardHorizontalLine className="size-4 mt-1" /> Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href="/profile"
                                    className="flex gap-2"
                                    title="Dashboard"
                                    aria-label="Dashbaord"
                                >
                                    <RiAccountPinBoxLine className="size-4 mt-1" /> Profil
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href="/logout"
                                    className="flex gap-2"
                                    as="button"
                                >
                                    <RxExit className="size-4 mt-1" /> Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href="/register" className="flex gap-2">
                                    <FiCheckCircle className="size-4 mt-1" /> Registrieren
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="/login" className="flex gap-2">
                                    <BsDoorOpen className="size-4 mt-1" /> Login
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
