import Paginated from '@/types/Paginated';
import Pagination from '@/components/reusables/Pagination';

import { TfiCommentAlt } from 'react-icons/tfi';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { GoPlus } from 'react-icons/go';
import { Comment } from '@/types/Comment';
import { cn } from '@/lib/utils';
import { BsEye } from 'react-icons/bs';

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
            {/* Wenn keine Kommentare vorhanden */}
            {(!comments || comments.data.length === 0) && (
                <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-gray-600 dark:text-gray-400 text-center mb-2">
                        Du hast noch keine Kommentare hinterlassen.
                    </h4>
                    <Button asChild variant="primary" className="hover:bg-emerald-700">
                        <Link href={route('recipes.index')} title="Erstelle ein Rezept">
                            <BsEye /> Rezepte ansehen
                        </Link>
                    </Button>
                </div>
            )}
            {comments?.data?.map((comment: Comment) => (
                <div key={comment.id} className="mb-2">
                    <span className={cn('text-gray-500 dark:text-gray-400')}>
                        {comment.content}
                    </span>
                </div>
            ))}
            {comments && comments?.data?.length >= 1 && <Pagination links={comments.links} />}
        </div>
    );
}
