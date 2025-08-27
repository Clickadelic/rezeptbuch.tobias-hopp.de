import { useState } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ResponsiveDialog } from '@/Components/nutshell/ResponsiveDialog';
import { LiaCocktailSolid } from 'react-icons/lia';
import { BsJournalBookmark } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { TooltipArrow } from '@radix-ui/react-tooltip';

export const CircularMenu = () => {
  const [showCircularMenu, setShowCircularMenu] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDishesDialogOpen, setDishesDialogOpen] = useState(false);
  const [isCocktailsDialogOpen, setCocktailsDialogOpen] = useState(false);

  const toggleCircularMenu = () => {
    setShowCircularMenu((previousState) => !previousState);
  };
  return (
    <div className="fixed right-4 bottom-12 md:bottom-8 md:right-8 max-w-12 shadow-sm">
      <div
        className={cn(
          'absolute -top-[95px] text-center space-y-2',
          showCircularMenu ? 'block' : 'hidden',
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild data-state="instant-open">
              <button
                onClick={() => setCocktailsDialogOpen(true)}
                className="rounded-full bg-emerald-700 hover:bg-mantis-primary/90 text-white p-3"
              >
                <LiaCocktailSolid />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Neuer Cocktail</p>
              <TooltipArrow className="arrow-emerald-700" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ResponsiveDialog
          isOpen={isCocktailsDialogOpen}
          setIsOpen={setCocktailsDialogOpen}
          title="Neuer Cocktail"
          description="Füge einen neuen Cocktail hinzu"
          icon={<LiaCocktailSolid />}
        >
          Neuer Cocktail Form
        </ResponsiveDialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild data-state="instant-open">
              <button
                onClick={() => setDishesDialogOpen(true)}
                className="rounded-full bg-emerald-700 hover:bg-mantis-primary/90 text-white p-3"
              >
                <BsJournalBookmark />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Neues Gericht</p>
              <TooltipArrow className="arrow-emerald-700" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ResponsiveDialog
          isOpen={isDishesDialogOpen}
          setIsOpen={setDishesDialogOpen}
          title="Neues Gericht"
          description="Füge ein neues Gericht hinzu"
          icon={<BsJournalBookmark />}
        >
          Neues Gericht Form
        </ResponsiveDialog>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild data-state="instant-open">
            <button
              aria-label="Neuen Inhalt anlegen"
              className="bg-emerald-700 hover:bg-emerald-600 text-white p-4 text-lg rounded-full"
              onClick={() => toggleCircularMenu()}
            >
              <FiPlus className={cn('transition', showCircularMenu ? 'rotate-45' : '')} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Neuen Inhalt anlegen</p>
            <TooltipArrow className="arrow-emerald-700" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
