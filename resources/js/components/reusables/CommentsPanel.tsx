import Paginated from '@/types/Paginated';
import Pagination from '@/components/reusables/Pagination';

import { TfiCommentAlt } from 'react-icons/tfi';

import { Comment } from '@/types/Comment';
import { cn } from '@/lib/utils';

interface CommentsPanelProps {
    comments: Paginated<Comment>;
    className?: string;
}

export default function CommentsPanel({ comments, className }: CommentsPanelProps) {
    return (
        <div
            className={cn(
                'col-span-1 xl:col-span-5 bg-gray-100 dark:bg-gray-900 border border-transparent border-b-gray-200 dark:border-b-gray-700 rounded-lg p-4',
                className,
            )}
        >
            <h3 className="text-lg mb-3 flex gap-2">
                <TfiCommentAlt className="mt-1 text-primary" /> Kommentare {comments?.total || 0}
            </h3>
            {comments?.data?.map((comment: Comment) => (
                <div key={comment.id} className="mb-2">
                    <span className={cn('text-gray-500 dark:text-gray-400')}>
                        {comment.content}
                    </span>
                </div>
            ))}
            <Pagination links={comments?.links || []} className="mt-4" />
        </div>
    );
}
