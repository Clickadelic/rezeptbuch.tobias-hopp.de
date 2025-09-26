import { useState } from 'react';
import { usePage, Link } from '@inertiajs/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

import { TbSalt } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';
import { BsJournalBookmark } from 'react-icons/bs';

import { cn } from '@/lib/utils';

export function CircularMenu() {
    const { auth } = usePage().props;

    if (!auth.user ||
        window.location.pathname.endsWith('/neues-rezept') ||
        window.location.pathname.endsWith('/edit')) {
        return null;
    }

    const [showCircularMenu, setShowCircularMenu] = useState(false);

    return (
        <div className="fixed right-4 bottom-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 max-w-12">
            <div
                className={cn(
                    'absolute -top-24 left-[4px] flex flex-col items-center space-y-2 z-30 transition-all',
                    showCircularMenu ? 'opacity-100' : 'opacity-0 pointer-events-none',
                )}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild data-state="instant-open">
                            <Link
                                className="rounded-full bg-primary hover:bg-primary/90 text-white p-3 hover:cursor-pointer shadow-lg"
                                href={route('recipes.create')}
                            >
                                <BsJournalBookmark />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Neues Gericht</p>
                            <TooltipArrow className="arrow-primary" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild data-state="instant-open">
                            <Link
                                className="rounded-full bg-primary hover:bg-primary/90 text-white p-3 hover:cursor-pointer shadow-lg"
                                href={route('ingredients.index')}
                            >
                                <TbSalt />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Neue Zutat</p>
                            <TooltipArrow className="arrow-primary" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            {/* Haupt-Button */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild data-state="instant-open">
                        <button
                            aria-label="Neuen Inhalt anlegen"
                            onClick={() => setShowCircularMenu((prev) => !prev)}
                            className="bg-primary hover:bg-primary/90 hover:cursor-pointer text-white p-4 text-lg rounded-full transition shadow-lg"
                        >
                            <FiPlus
                                className={cn(
                                    'transition-transform',
                                    showCircularMenu ? 'rotate-45' : '',
                                )}
                            />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        <p>Neuen Inhalt anlegen</p>
                        <TooltipArrow className="arrow-primary" />
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

export default CircularMenu;
