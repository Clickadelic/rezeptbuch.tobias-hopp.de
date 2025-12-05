
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import UserSidebar from '@/components/sidebars/UserSidebar';
import CategoryBarChart from '@/components/reusables/Charts/CategoryBarChart';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import PopoverInfo from '@/components/reusables/PopoverInfo';


import { TfiCommentAlt } from 'react-icons/tfi';
import { BsJournalBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { TbSalt } from 'react-icons/tb';
import { TbCategory } from 'react-icons/tb';
import { TfiLayoutListThumb } from 'react-icons/tfi';

import { RecipeDataTable } from '@/components/reusables/Tables/RecipeDataTable';

import { Ingredient } from '@/types/Ingredient';
import { Recipe } from '@/types/Recipe';
import { Comment } from '@/types/Comment';
import { SharedPageProps } from '@/types';
import Paginated from '@/types/Paginated';
import { cn } from '@/lib/utils';


interface RecipesPanelProps {
    recipes: Paginated<Recipe>
    title?: string
    icon?: React.ReactNode
    className?: string
    tableClasses?: string
}

/**
 * Renders a panel containing a table of recipes
 * 
 * @param {RecipesPanelProps} props - The props object
 * @param {Paginated<Recipe>} props.recipes - The paginated recipes data
 * @param {string} [props.title] - The title of the panel
 * @param {React.ReactNode} [props.icon] - The icon of the panel
 * @param {string} [props.className] - The additional CSS classes of the panel
 * @param {string} [props.tableClasses] - The additional CSS classes of the table
 * @returns {React.ReactElement} - The rendered panel
 */
export default function RecipesPanel({ recipes, title, icon, className, tableClasses }: RecipesPanelProps) {
    return (
        <div
            className={cn(
                'w-full overflow-hidden bg-gray-100 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 rounded-xl',
                className,
            )}
        >
            <div className="flex justify-between">
                <h3 className={cn('text-lg mb-3 flex gap-2')}>
                    {icon}
                    {title || 'Daten'}
                    {recipes && recipes?.data?.length >= 1 && (
                        <span className="text-gray-400 dark:text-gray-400">({recipes.total})</span>
                    )}
                </h3>
                <div className="flex gap-2">
                    Button und Filter
                </div>
            </div>
            <RecipeDataTable data={recipes as Paginated<Recipe>} tableClasses={tableClasses} />
        </div>
    )
}