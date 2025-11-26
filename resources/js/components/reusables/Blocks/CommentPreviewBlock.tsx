import { TfiCommentAlt } from 'react-icons/tfi';
import { BsJournalBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { TbSalt } from 'react-icons/tb';
import { TbCategory } from 'react-icons/tb';
import { TfiLayoutListThumb } from 'react-icons/tfi';

import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';

interface CommentPreviewBlockProps {
    className?: string;
    recipe: Recipe;
}

export default function CommentPreviewBlock({ recipe, className }: CommentPreviewBlockProps) {
    return (
        <span className={cn('flex justify-start gap-2 items-center text-sm', className)}>
            <TfiCommentAlt className="text-gray-600 dark:text-gray-400" />
            <span>
                {recipe.comments_count ?? 0}{' '}
                {recipe.comments_count === 1 ? 'Kommentar' : 'Kommentare'}
            </span>
        </span>
    );
}
