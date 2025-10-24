import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

import CommentItem from './CommentItem';
import CommentForm from '@/components/forms/CommentForm';
import Seperator from '@/components/reusables/Seperator';

import { Comment } from '@/types/Comment';
import { fetchComments } from '@/lib/comments';
import { cn } from '@/lib/utils';

interface CommentsDirectoryProps {
    recipeId: string;
}

export default function CommentsDirectory({ recipeId }: CommentsDirectoryProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        loadComments(page);
    }, [page]);

    const loadComments = async (page = 1) => {
        setLoading(true);
        try {
            // Erwartet <Paginated<Comment>>
            const data = await fetchComments(recipeId, page);
            setComments(data.data);
            setLastPage(data.last_page);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCommentAdded = (comment: Comment) => {
        setComments((prev) => [comment, ...prev]);
    };

    return ( 
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
            
            <CommentForm recipeId={recipeId} onCommentAdded={handleCommentAdded} />
            {loading && <div className="w-full flex flex-col items-center justify-center">Lade Kommentare...</div>}
            <div className="flex flex-col gap-2">
                <h3 className={cn('text-lg flex gap-2',)}>{comments.length} Kommentar{comments.length === 1 ? '' : 'e'}</h3>
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onCommentAdded={handleCommentAdded}
                    />
                ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-4">
                <Button
                    disabled={page <= 1}
                    type="button"
                    variant="link"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="px-3 py-1 border rounded disabled:opacity-50 text-xs"
                >
                    Zurück
                </Button>
                <div className="text-xs text-gray-200 dark:text-gray-400">
                    Seite {page} von {lastPage}
                </div>
                <Button
                    disabled={page >= lastPage}
                    type="button"
                    variant="link"
                    onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
                    className="px-3 py-1 border rounded disabled:opacity-50 text-xs"
                >
                    Weiter
                </Button>
            </div>
        </div>
    );
}
