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
      <div className="p-2 border rounded bg-gray-50">
        <div className="text-sm font-semibold">{comment.user?.name || 'Anonym'}</div>
        <div className="text-gray-700">{comment.content}</div>
        <button
          onClick={() => setReplying(!replying)}
          className="text-xs text-blue-500 mt-1"
        >
          {replying ? 'Antwort abbrechen' : 'Antworten'}
        </button>
      </div>

      {replying && (
        <CommentForm
          parentId={comment.id.toString()}
          recipeId={comment.recipe_id.toString()}
          onCommentAdded={onCommentAdded}
        />
      )}

      {comment?.replies && (
        <div className="flex flex-col gap-2 mt-2">
          {comment.replies?.map(reply => (
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
