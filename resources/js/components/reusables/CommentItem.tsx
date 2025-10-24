import { useState } from 'react';
import { Comment } from '@/types/Comment';
import CommentForm from '@/components/forms/CommentForm';

interface CommentItemProps {
  comment: Comment;
  recipeId: string;
  onCommentAdded: (comment: Comment) => void;
}

export default function CommentItem({ comment, recipeId, onCommentAdded }: CommentItemProps) {
  const [replyFormVisible, setReplyFormVisible] = useState(false);

  return (
    <div className="border rounded p-3 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{comment.user?.name ?? 'Anonym'}</span>
        <span className="text-xs text-gray-500">
          {comment.created_at ? new Date(comment.created_at).toLocaleString() : ''}
        </span>
      </div>

      <p className="mt-2">{comment.content}</p>

      {/* Antworten Button */}
      <div className="mt-2">
        <button
          className="text-sm text-blue-500 hover:underline"
          onClick={() => setReplyFormVisible(prev => !prev)}
        >
          {replyFormVisible ? 'Antwort verbergen' : 'Antworten'}
        </button>
      </div>

      {/* Reply Form */}
      {replyFormVisible && (
        <div className="mt-2 ml-4">
          <CommentForm
            recipeId={recipeId}
            parentId={comment.id.toString()}
            onCommentAdded={(newComment) => {
              setReplyFormVisible(false);
              onCommentAdded(newComment);
            }}
          />
        </div>
      )}

      {/* Replies */}

      {(comment.replies ?? []).length > 0 && (
        <div className="mt-3 ml-4 space-y-2">
          {(comment.replies ?? []).map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              recipeId={recipeId}
              onCommentAdded={onCommentAdded}
            />
          ))}
        </div>
      )}

    </div>
  );
}
