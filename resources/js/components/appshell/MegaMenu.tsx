"use client";

import { useState, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

import { BsJournalBookmark } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { BsDoorOpen } from 'react-icons/bs';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbSalt } from 'react-icons/tb';
import { LuUsersRound } from 'react-icons/lu';
import { RiHomeLine } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

interface MegaMenuItem {
    icon?: React.ReactNode;
    title: string;
    href: string;
    description?: string;
}

interface MegaMenuColumn {
    categoryIcon?: React.ReactNode;
    title?: string;
    items: MegaMenuItem[];
}

interface MegaMenuProps {
    columns: MegaMenuColumn[];
    featured?: {
        title: string;
        description: string;
        href: string;
        icon?: React.ReactNode;
    };
}

export default function MegaMenu({ columns, featured }: MegaMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    return (
        <div className="relative mt-px mx-auto inline-flex items-center justify-between md:gap-2 sm:px-1 md:px-2 py-1 rounded-sm " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className={cn(
                    'flex items-center gap-2 hover:cursor-pointer',
                    isOpen ? 'text-primary' : ' text-gray-800 dark:text-gray-200',
                )}
                title="Zu den Rezepten"
            >
                <BsJournalBookmark className="size-4" />
                Rezepte
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-200 ease-in-out',
                        isOpen && 'rotate-180',
                    )}
                />
            </button>
            {isOpen && (
                <div className="absolute top-full -left-36 z-50 w-screen max-w-4xl">
                    <div className="overflow-hidden shadow-lg  rounded-bl-xl rounded-br-xl px-1 pb-1 bg-white/30 dark:bg-gray-800/30 backdrop-blur">
                        <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-bl-lg rounded-br-lg">
                            <div className="grid gap-4 px-4 pb-3 pt-2 md:grid-cols-4">
                                {columns.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        {(section.title || section.categoryIcon) && (
                                            <h3 className="text-base flex">
                                                {section.categoryIcon}
                                                {section.title}
                                            </h3>  
                                        )}
                                        {(!section.title && !section.categoryIcon) && (
                                            <div className="text-lg flex h-[1.75rem]"></div>  
                                        )}
                                        
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>
                                                    <Link
                                                        href={item.href}
                                                        className="group block space-y-1 rounded-md p-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-900"
                                                    >
                                                        <div className="flex flex-start items-start">
                                                            
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="flex gap-2 justify-start items-center">
                                                                        <span>{item.icon}</span>
                                                                        <span className="text-md font-medium group-hover:text-primary">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                    <ArrowRight className="-mt-[3px] h-4 w-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                                </div>
                                                                {item.description && (
                                                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                                        {item.description}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                {featured && (
                                    <div className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4">
                                        <div className="h-full flex flex-col justify-between items-start">
                                            <div className="asd">
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                                    {featured.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {featured.description}
                                                </p>
                                            </div>
                                            <div className="asd">
                                                <Link
                                                    href={featured.href}
                                                    className="group block space-y-1 rounded-md p-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-900"
                                                >
                                                    <div className="flex flex-start items-start">
                                                        
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex gap-2 justify-start items-center">
                                                                    <span>{featured.icon}</span>
                                                                    <span className="text-md font-medium group-hover:text-primary">
                                                                        {featured.title}
                                                                    </span>
                                                                </div>
                                                                <ArrowRight className="-mt-[3px] h-4 w-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                            </div>
                                                            {featured.description && (
                                                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                                    {featured.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
