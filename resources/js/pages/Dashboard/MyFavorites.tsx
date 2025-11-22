import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import UserSidebar from '@/components/sidebars/UserSidebar';

import AreaChart from '@/components/reusables/Charts/AreaChart';
import CategoryBarChart from '@/components/reusables/Charts/CategoryBarChart';
import DonutChart from '@/components/reusables/Charts/DonutChart';
import PopoverInfo from '@/components/reusables/PopoverInfo';
import FavoritesTable from '@/components/reusables/Tables/FavoritesTable';
import RecipesTable from '@/components/reusables/Tables/UserRecipesTable';
import IngredientPanel from '@/components/reusables/IngredientPanel';

import { TfiCommentAlt } from 'react-icons/tfi';
import { BsJournalBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { TbSalt } from 'react-icons/tb';
import { TbCategory } from 'react-icons/tb';
import { TfiLayoutListThumb } from 'react-icons/tfi';

import CommentsPanel from '@/components/reusables/CommentsPanel';

import { Ingredient } from '@/types/Ingredient';
import { Recipe } from '@/types/Recipe';
import { Comment } from '@/types/Comment';
import { SharedPageProps } from '@/types';

import { cn } from '@/lib/utils';

/**
 * The Dashboard page displays a variety of information about the user's recipes.
 * It includes a bar chart that shows the number of recipes, a donut chart that shows the distribution of recipes between the user and other users, and two tables that show the user's recipes and favorites.
 */
export default function MyRecipes() {

    return (
        <SidebarLeftLayout title="Favoriten" sidebar={<UserSidebar />}>
            <div className="asd">
                asd
            </div>
        </SidebarLeftLayout>
    );
}
