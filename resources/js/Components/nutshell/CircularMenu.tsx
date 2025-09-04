import { useState } from 'react';
import { usePage } from '@inertiajs/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';

import { ResponsiveDialog } from '@/Components/reusables/ResponsiveDialog';

import { TbSalt } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';
import { BsJournalBookmark } from 'react-icons/bs';
import { LiaCocktailSolid } from 'react-icons/lia';

import { cn } from '@/lib/utils';

import DishForm from '@/Components/forms/DishForm';
import CocktailForm from '@/Components/forms/CocktailForm';
import IngredientForm from '@/Components/forms/IngredientForm';

export function CircularMenu() {
    const { auth } = usePage().props;
    
    const [showCircularMenu, setShowCircularMenu] = useState(false);

    const [isCocktailDialogOpen, setCocktailDialogOpen] = useState(false);
    const [isDishDialogOpen, setDishDialogOpen] = useState(false);
    const [isIngredientDialogOpen, setIngredientDialogOpen] = useState(false);

    if (!auth.user) return null;

    return (
        <div className="fixed right-4 bottom-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 max-w-12">
            <div
                className={cn(
                    'absolute -top-36 left-[4px] flex flex-col items-center space-y-2 transition-all',
                    showCircularMenu ? 'opacity-100' : 'opacity-0 pointer-events-none',
                )}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild data-state="instant-open">
                            <button
                                className="rounded-full bg-emerald-700 hover:bg-emerald-700/90 text-white p-3 hover:cursor-pointer shadow-lg"
                                onClick={() => setDishDialogOpen(true)}
                            >
                                <BsJournalBookmark />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Neues Gericht</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ResponsiveDialog
                    icon={<BsJournalBookmark />}
                    title="Gericht hinzufügen"
                    description="Füge ein Gericht hinzu"
                    editTitle="Gericht bearbeiten"
                    editDescription="Ändere Titel oder andere Dinge"
                    isOpen={isDishDialogOpen}
                    setIsOpen={setDishDialogOpen}
                >
                    <DishForm ingredients={[]} />
                </ResponsiveDialog>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild data-state="instant-open">
                            <button
                                className="rounded-full bg-emerald-700 hover:bg-emerald-700/90 text-white p-3 hover:cursor-pointer shadow-lg"
                                onClick={() => setCocktailDialogOpen(true)}
                            >
                                <LiaCocktailSolid />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Neuer Cocktail</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ResponsiveDialog
                    icon={<LiaCocktailSolid />}
                    title="Cocktail hinzufügen"
                    description="Füge einen Cocktail hinzu"
                    editTitle="Cocktail bearbeiten"
                    editDescription="Ändere Titelandere Dinge"
                    isOpen={isCocktailDialogOpen}
                    setIsOpen={setCocktailDialogOpen}
                >
                    <CocktailForm />
                </ResponsiveDialog>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild data-state="instant-open">
                            <button
                                className="rounded-full bg-emerald-700 hover:bg-emerald-700/90 text-white p-3 hover:cursor-pointer shadow-lg"
                                onClick={() => setIngredientDialogOpen(true)}
                            >
                                <TbSalt />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Neue Zutat</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ResponsiveDialog
                    icon={<TbSalt />}
                    title="Zutat hinzufügen"
                    description="Füge eine Zutat hinzu"
                    editTitle="Zutat bearbeiten"
                    editDescription="Ändere Titelandere Dinge"
                    isOpen={isIngredientDialogOpen}
                    setIsOpen={setIngredientDialogOpen}
                >
                    <IngredientForm />
                </ResponsiveDialog>
            </div>

            {/* Haupt-Button */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild data-state="instant-open">
                        <button
                            aria-label="Neuen Inhalt anlegen"
                            onClick={() => setShowCircularMenu((prev) => !prev)}
                            className="bg-emerald-700 hover:bg-emerald-700/90 hover:cursor-pointer text-white p-4 text-lg rounded-full transition shadow-lg"
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
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

export default CircularMenu;
