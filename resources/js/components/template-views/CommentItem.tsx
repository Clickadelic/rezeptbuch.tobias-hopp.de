import { useState } from 'react';
import { usePage } from '@inertiajs/react';

import Avatar from '@/components/reusables/Avatar';
import CommentForm from '@/components/forms/CommentForm';
import axios from 'axios';
import { BsArrow90DegUp } from 'react-icons/bs';

import { usePermissions } from '@/hooks/usePermissions';
import { SharedPageProps } from '@/types';
import { Comment } from '@/types/Comment';
import { cn } from '@/lib/utils';
import { BsTrash3 } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { BsReply } from 'react-icons/bs';
import { BsArrow90DegDown } from 'react-icons/bs';
import { TbCancel } from 'react-icons/tb';
import { fetchComments } from '@/lib/comments';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface CommentItemProps {
    comment: Comment;
    depth?: number; // für Einrückung
    onCommentAdded: (comment: Comment) => void;
    onCommentDeleted?: () => void; // NEU: Callback für Löschung
}

export default function CommentItem({ comment, depth = 0, onCommentAdded, onCommentDeleted }: CommentItemProps) {
    const [replying, setReplying] = useState(false);
    const { user } = usePage<SharedPageProps>().props.auth;
    const { hasRole } = usePermissions();

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleDeleteDialog = () => setIsDeleteDialogOpen(prev => !prev);

    const handleDelete = async (commentId: Comment['id']) => {
        setIsLoading(true);
        try {
            await axios.delete(`/comments/${commentId}`);
            if (onCommentDeleted) {
                onCommentDeleted(); // ruft jetzt loadComments im Parent auf
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`flex flex-col gap-2 ${depth > 0 ? 'ml-6' : ''}`}>
            <div className="rounded-xl bg-gray-100 dark:bg-gray-900 p-4 flex flex-col gap-2">
                {/* Comment Header */}
                <div className="text-sm font-semibold flex flex-start gap-3">
                    <Avatar url={comment.user?.avatar} />
                    {comment.created_at && (
                        <div className="w-32 flex flex-col text-xs text-gray-500 dark:text-gray-400">
                            <div className="text-md text-gray-800 dark:text-gray-200">
                                {comment.user?.name}
                            </div>
                            <div className="font-light text-xs">
                                {new Date(comment.created_at).toLocaleString()}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-grow items-start justify-end">
                        {hasRole('user') && user.id === comment.user?.id && (
                            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                                <AlertDialogTrigger title="Kommentar löschen" className="text-sm text-rose-500 font-normal hover:underline hover:cursor-pointer">
                                    Kommentar löschen
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Bist Du Dir sicher, dass Du den Kommentar löschen möchtest?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Dies kann nicht rückgängig gemacht werden.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDelete(comment.id)}>
                                            {isLoading ? 'Löschen...' : 'Kommentar löschen'}
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )}
                    </div>
                </div>

                {/* Comment Content */}
                <div className={cn('text-gray-800 dark:text-gray-200 pl-4 mt-4')}>
                    {comment.content}
                </div>

                {/* Reply Toggle */}
                {hasRole('user') && (
                    <div className="flex flex-start">
                        <Button
                            onClick={() => setReplying(!replying)}
                            variant="link"
                            className={cn('text-sm flex gap-2', replying ? 'text-rose-500' : 'text-primary')}
                        >
                            {replying ? <TbCancel /> : <BsReply />}
                            {replying ? 'Antwort abbrechen' : 'Antworten'}
                        </Button>
                    </div>
                )}
            </div>

            {/* Reply Form */}
            {replying && (
                <CommentForm
                    parentId={comment.id.toString()}
                    recipeId={comment.recipe_id}
                    onCommentAdded={onCommentAdded}
                />
            )}

            {/* Replies */}
            {comment?.replies && (
                <div className="flex flex-col gap-2 mt-2">
                    {comment.replies.map(reply => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            depth={depth + 1}
                            onCommentAdded={onCommentAdded}
                            onCommentDeleted={onCommentDeleted} // weiterreichen
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
