import { Comment } from '@/types/Comment';
import Paginated from '@/types/Paginated';

interface UserCommentsTableProps {
    comments: Paginated<Comment>;
}

export default function UserCommentsTable({ comments }: UserCommentsTableProps) {
    return (
        <div>
            <h3>
                Deine Kommentare
                {comments && comments?.data?.length >= 1 && (
                    <span className="text-gray-400 dark:text-gray-400">
                        ({comments.data.length})
                    </span>
                )}
            </h3>
        </div>
    );
}
