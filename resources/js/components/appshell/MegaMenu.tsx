'use client';

import { useState, useEffect, useRef } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import decorationSvg from "@images/svg/Pina-colada-bro.svg";

import { cn } from '@/lib/utils';
import { useBlurStore } from '@/stores/useBlurStore'; // 🔹 Import für Blur
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
    icon?: React.ReactNode;
    title: string;
    className?: string;
    columns: MegaMenuColumn[];
    featured?: {
        title: string;
        description: string;
        imageUrl?: string;
        href: string;
        icon?: React.ReactNode;
    };
}

export default function MegaMenu({ icon, title, className, columns, featured }: MegaMenuProps) {
    const [active, setActive] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { setBlurred } = useBlurStore(); // 🔹 Zugriff auf globalen Blur-Zustand
    const url = usePage().url;

    // Close click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Bottom border aktivieren, falls URL beginnt mit /rezepte
    useEffect(() => {
        if (url.startsWith('/rezepte')) setActive(true);
    }, [url]);

    // 🔹 Blur synchronisieren
    useEffect(() => {
        setBlurred(isOpen);
    }, [isOpen, setBlurred]);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <div
            ref={menuRef}
            className={cn(
                'relative inline-block mx-auto items-center justify-between md:gap-2 sm:px-1 md:px-2 rounded-sm',
            )}
        >
            <button
                onClick={toggleMenu}
                className={cn(
                    'flex mt-px pt-4 pb-4 px-1 items-center gap-2 hover:cursor-pointer focus:outline-none border-b-2 border-transparent text-gray-800 hover:text-primary dark:text-gray-200 text-base dark:hover:text-gray-400',
                    isOpen ? 'text-primary' : 'text-gray-800 dark:text-gray-200',
                    active ? 'border-b-primary' : 'border-b-transparent',
                )}
                title={title}
                aria-label={title}
            >
                <span className="hidden md:inline-flex text-primary">{icon}</span>
                <span className="inline-flex">{title}</span>
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-200 ease-in-out',
                        isOpen && 'rotate-180',
                    )}
                />
            </button>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="hidden sm:block absolute top-full w-screen z-50 mt-3 max-w-5xl mx-auto sm:-left-72">
                    <div className="overflow-hidden shadow-lg rounded-xl p-1 bg-white/30 dark:bg-gray-800/30 backdrop-blur">
                        <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg">
                            {decorationSvg && <img src={decorationSvg} alt="Menu ´background image" className="absolute left-16 bottom-8 size-28" />}
                            <div className="grid gap-4 p-4 md:grid-cols-4">
                                {columns.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        {(section.title || section.categoryIcon) && (
                                            <h3 className="text-base flex gap-2 items-center ml-3.5">
                                                {section.categoryIcon}
                                                {section.title}
                                            </h3>
                                        )}
                                        {!section.title && !section.categoryIcon && (
                                            <div className="h-6"></div>
                                        )}
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>
                                                    <Link
                                                        href={item.href}
                                                        className="group block space-y-1 rounded-md p-2 pl-3  border border-transparent hover:border-primary"
                                                        aria-label={item.title}
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex gap-2 items-center">
                                                                    {item.icon}
                                                                    <span className="text-md font-medium group-hover:text-primary">
                                                                        {item.title}
                                                                    </span>
                                                                </div>
                                                                <ArrowRight className="-mt-[3px] h-4 w-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                            </div>
                                                            {item.description && (
                                                                <p className="text-md font-la-belle-aurore text-gray-600 dark:text-gray-300">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {featured && (
                                    <div className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4">
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                                    {featured.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {featured.description}
                                                </p>
                                                <div className="aspect-video bg-gray-200 rounded-lg mt-4 overflow-hidden">
                                                    <img src={featured.imageUrl} alt={featured.title} className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <Button asChild variant="primary" className="group">
                                                <Link
                                                    href={featured.href}
                                                    className="group-hover:text-white flex justify-start"
                                                >
                                                    <div className="flex justify-start items-center gap-2 group-hover:text-white group-hover:border-primary">
                                                        <span className="flex gap-2 text-md font-medium group-hover:text-white">
                                                            {featured.icon}
                                                            {featured.title}
                                                        </span>
                                                        <ArrowRight className="-mt-[3px] h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                    </div>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}
