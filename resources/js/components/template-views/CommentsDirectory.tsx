import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

import CommentItem from './CommentItem';
import CommentForm from '@/components/forms/CommentForm';

import { Comment } from '@/types/Comment';
import { fetchComments } from '@/lib/comments';
import { cn } from '@/lib/utils';
import { FaHeart, FaSpinner } from 'react-icons/fa6';
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
            <div className="flex flex-col gap-2">
                <h3 className={cn('text-lg flex gap-2')}>
                    {loading && <><FaSpinner className="animate-spin size-3 mt-2" />Lade Kommentare...</>}
                    {!loading && (
                        <>
                            {comments.length} Kommentar
                            {comments.length > 1 && 'e'}
                        </>
                    )} 
                </h3>
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onCommentAdded={handleCommentAdded}
                        onCommentDeleted={loadComments}
                    />
                ))}
            </div>
            {/* Pagination, nur wenn mehr als eine Seite Kommentare */}
            {page > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    <Button
                        disabled={page <= 1}
                        type="button"
                        variant="link"
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        className="px-3 py-1 text-xs rounded transition-colors duration-200 dark:primary bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-gray-800 hover:bg-primary hover:text-white"
                    >
                        Zurück
                    </Button>
                    <div className="text-xs text-gray-800 dark:text-gray-400">
                        Seite {page} von {lastPage}
                    </div>
                    <Button
                        disabled={page >= lastPage}
                        type="button"
                        variant="link"
                        onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
                        className="px-3 py-1 text-xs rounded transition-colors duration-200 dark:primary bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-gray-800 hover:bg-primary hover:text-white"
                    >
                        Weiter
                    </Button>
                </div>
            )}
        </div>
    );
}
