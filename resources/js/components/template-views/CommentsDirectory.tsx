import { useEffect, useState } from 'react';
import { fetchComments } from '@/lib/comments';
import { Comment } from '@/types/Comment';
import CommentItem from './CommentItem';
import CommentForm from '@/components/forms/CommentForm';

import Seperator from '@/components/reusables/Seperator';
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
        <>  
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
                  <h3 className={cn('text-lg flex gap-2',)}>Kommentare</h3>
                <CommentForm recipeId={recipeId} onCommentAdded={handleCommentAdded} />
                {loading && <p>Lädt...</p>}

                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onCommentAdded={handleCommentAdded}
                    />
                ))}

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Zurück
                    </button>
                    <span>
                        Seite {page} von {lastPage}
                    </span>
                    <button
                        disabled={page >= lastPage}
                        onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Weiter
                    </button>
                </div>
            </div>
            <Seperator style="mix" />
        </>
    );
}
