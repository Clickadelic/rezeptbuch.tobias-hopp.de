import { useState } from 'react';
import CommentForm from '@/components/forms/CommentForm';
import { Comment } from '@/types/Comment';

interface CommentItemProps {
    comment: Comment;
    depth?: number; // für Einrückung
    onCommentAdded: (comment: Comment) => void;
}

export default function CommentItem({ comment, depth = 0, onCommentAdded }: CommentItemProps) {
    const [replying, setReplying] = useState(false);

    return (
        <div className={`flex flex-col gap-2 ${depth > 0 ? 'ml-6' : ''}`}>
            <div className="rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
                <div className="text-sm font-semibold">{comment.user?.name}</div>

                {/* Comment Content */}
                <div className="text-gray-700">{comment.content}</div>

                {/* Reply Toggle */}
                <button
                    onClick={() => setReplying(!replying)}
                    className="text-xs text-primary mt-1"
                >
                    {replying ? 'Antwort abbrechen' : 'Antworten'}
                </button>
            </div>

            {/* Replyformular */}
            {replying && (
                <CommentForm
                    parentId={comment.id.toString()}
                    recipeId={comment.recipe_id}
                    onCommentAdded={onCommentAdded}
                />
            )}

            {comment?.replies && (
                <div className="flex flex-col gap-2 mt-2">
                    {comment.replies?.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            depth={depth + 1} // Tiefe erhöhen für Einrückung
                            onCommentAdded={onCommentAdded}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
