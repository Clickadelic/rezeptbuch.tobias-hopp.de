import { useEffect, useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import axios from 'axios'; // Importieren Sie Axios für manuelle Requests

import CommentForm from '@/components/forms/CommentForm';
import CommentItem from '@/components/reusables/CommentItem';
import Pagination from '@/components/reusables/Pagination';
import Seperator from '@/components/reusables/Seperator';

import Paginated from '@/types/Paginated';
import { Comment } from '@/types/Comment'; // Paginator-Typ angenommen

import { cn } from '@/lib/utils';

interface CommentsDirectoryProps {
    recipeId: string;
    commentData: Paginated<Comment>;
    className?: string;
}

export default function CommentsDirectory({ recipeId, commentData, className }: CommentsDirectoryProps) {
    console.log("CommentData", commentData);
    return (
        <div className={cn("w-full max-w-4xl mx-auto flex flex-col gap-2", className)}>
            <h3 className={cn("text-lg flex gap-2")}>Kommentare</h3>
            <CommentForm recipeId={recipeId} parentId={undefined} onCommentAdded={() => {}} />
            {commentData.data.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
}