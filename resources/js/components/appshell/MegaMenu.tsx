'use client';

import { useState, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavButton from '@/components/reusables/NavButton';

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


interface MegaMenuItem {
    icon?: React.ReactNode;
    title: string;
    href: string;
    description?: string;
}

interface MegaMenuSection {
    categoryIcon?: React.ReactNode;
    title: string;
    items: MegaMenuItem[];
}

interface MegaMenuProps {
    sections: MegaMenuSection[];
    featured?: {
        title: string;
        description: string;
        href: string;
        image?: string;
    };
}

export default function MegaMenu({ sections, featured }: MegaMenuProps) {
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
                <div className="absolute top-full z-50 w-screen max-w-6xl mx-auto md:-translate-x-2/5 xl:-translate-x-1/4">
                    <div className="overflow-hidden border border-border shadow-lg  rounded-bl-xl rounded-br-xl p-1 bg-white/30 dark:bg-gray-900 backdrop-blur">
                        <div className="overflow-hidden">
                            <div className="grid gap-8 p-4 md:grid-cols-4">
                                {sections.map((section, idx) => (
                                    <div key={idx} className="space-y-4 bg-white p-4 rounded-xl">
                                        <h3 className="text-lg flex gap-2">
                                            {section.categoryIcon}
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>
                                                    <Link
                                                        href={item.href}
                                                        className="group block space-y-1 rounded-md p-2 transition-colors hover:bg-muted"
                                                    >
                                                        <div className="flex flex-start items-start">
                                                            <div className="px-3">{item.icon}</div>
                                                            <div className="asd">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-sm font-medium group-hover:text-primary">
                                                                        {item.title}
                                                                    </span>
                                                                    <ArrowRight className="-mt-[2px] h-3 w-3 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                                </div>
                                                                {item.description && (
                                                                    <p className="text-xs leading-relaxed text-gray-600">
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
                                    <div className="rounded-lg bg-secondary p-6">
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-semibold">
                                                {featured.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {featured.description}
                                            </p>
                                            <Link
                                                href={featured.href}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                                            >
                                                Learn more
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
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
