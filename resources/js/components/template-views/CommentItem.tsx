import { useState } from 'react';
import CommentForm from '@/components/forms/CommentForm';
import { Comment } from '@/types/Comment';
import { BsArrow90DegUp } from 'react-icons/bs';
import Avatar from '@/components/reusables/Avatar';

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
                
                {/* Comment Header */}
                <div className="text-sm font-semibold flex gap-3">
                  <div className="flex gap-2">
                    <Avatar url={comment.user?.avatar} />
                  </div>
                  {comment.created_at && (
                    <div className="w-32 flex flex-col text-xs text-gray-500 dark:text-gray-400">
                      <div className="text-md">{comment.user?.name}</div>
                      <div className="font-light text-xs">{new Date(comment.created_at).toLocaleString()}</div>
                    </div>
                  )}
                  <div className="flex-grow">
                    &nbsp;
                  </div>
                </div>

                {/* Comment Content */}
                <div className="text-gray-800 dark:text-gray-200 py-4">{comment.content}</div>

                {/* Reply Toggle */}
                <button
                    onClick={() => setReplying(!replying)}
                    className="text-xs text-primary mt-2 flex gap-2"
                >
                    <BsArrow90DegUp /> {replying ? 'Antwort abbrechen' : 'Antworten'}
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
