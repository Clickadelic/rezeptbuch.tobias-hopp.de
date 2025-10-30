import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';

import Avatar from '@/components/reusables/Avatar';
import CommentForm from '@/components/forms/CommentForm';
import { Textarea } from '@/components/ui/textarea';
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
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';

import { SharedPageProps } from '@/types';
import { usePermissions } from '@/hooks/usePermissions';
import { Comment } from '@/types/Comment';

import { MdOutlineModeEditOutline } from 'react-icons/md';
import { PiTrashLight } from 'react-icons/pi';
import { TbCancel } from 'react-icons/tb';
import { BsReply } from 'react-icons/bs';

import { cn } from '@/lib/utils';

interface CommentItemProps {
    comment: Comment;
    depth?: number; // für Einrückung
    onCommentAdded: (comment: Comment) => void;
    onCommentDeleted?: () => void;
    onCommentUpdated?: (comment: Comment) => void; // NEU
}

/**
 * CommentItem - displays a single comment with replies
 *
 * @param {CommentItemProps} props - comment, depth, onCommentAdded, onCommentDeleted, onCommentUpdated
 * @returns {JSX.Element} - a single comment with replies
 * @example
 * <CommentItem
 *     comment={comment}
 *     depth={1}
 *     onCommentAdded={(comment) => console.log(comment)}
 *     onCommentDeleted={() => console.log('Comment deleted')}
 *     onCommentUpdated={(comment) => console.log(comment)}
 * />
 */
export default function CommentItem({
    comment,
    depth = 0,
    onCommentAdded,
    onCommentDeleted,
    onCommentUpdated,
}: CommentItemProps) {
    const [replying, setReplying] = useState(false);
    const { user } = usePage<SharedPageProps>().props.auth;
    const { hasRole } = usePermissions();

    const [editing, setEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleDeleteDialog = () => setIsDeleteDialogOpen((prev) => !prev);

    /** Kommentar löschen */
    const handleDelete = async (commentId: Comment['id']) => {
        setIsLoading(true);
        try {
            await axios.delete(`/rezepte/comments/${commentId}`);
            if (onCommentDeleted) onCommentDeleted();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    /** Kommentar speichern (Edit) */
    const handleEditSave = async () => {
        if (editContent.trim() === '') return;
        setIsLoading(true);
        try {
            const response = await axios.patch(`/rezepte/comments/${comment.id}`, {
                content: editContent,
            });
            if (onCommentUpdated) onCommentUpdated(response.data); // Parent weiß über Update
            setEditing(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (editing) {
            setEditContent(comment.content);
        }
    }, [editing, comment.content]);

    return (
        <div className={`flex flex-col mt-4 gap-2 ${depth > 0 ? 'ml-6' : ''}`}>
            <div className="flex flex-col gap-2">
                {/* Header */}
                <div className="text-sm flex flex-start gap-1 sm:gap-3 pl-3 items-center">
                    <Avatar url={comment.user?.avatar} />
                    {comment.created_at && (
                        <div className="w-32 flex flex-col shrink-0 text-xs text-gray-500 dark:text-gray-400">
                            <div className="text-md text-gray-800 dark:text-gray-200">
                                {comment.user?.name}:
                            </div>
                            <div className="font-light text-xs">
                                {new Date(comment.created_at).toLocaleString()}
                            </div>
                        </div>
                    )}

                    {/* Buttons: Edit/Delete */}
                    {hasRole('user') && user.id === comment.user?.id && (
                        <div className="w-full flex flex-grow items-start justify-between sm:justify-end">
                            <ButtonGroup aria-label="Button group">
                                <Button
                                    variant="link"
                                    onClick={() => setEditing(true)}
                                    className="h-5 mt-[-1px] text-xs flex gap-1 text-primary hover:text-emerald-600 hover:underline"
                                >
                                    <MdOutlineModeEditOutline /> Bearbeiten
                                </Button>
                                <AlertDialog
                                    open={isDeleteDialogOpen}
                                    onOpenChange={setIsDeleteDialogOpen}
                                >
                                    <AlertDialogTrigger className="flex gap-1 text-xs text-rose-700 font-normal hover:text-rose-500 hover:underline underline-offset-4 hover:cursor-pointer">
                                        <PiTrashLight className="mt-[1px] size-4" /> Löschen
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Kommentar löschen?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Dies kann nicht rückgängig gemacht werden.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                                            <AlertDialogAction
                                                className="bg-rose-700 hover:bg-rose-500"
                                                onClick={() => handleDelete(comment.id)}
                                            >
                                                {isLoading ? 'Löschen...' : 'Kommentar löschen'}
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </ButtonGroup>
                        </div>
                    )}
                </div>

                {/* Comment Content / Edit */}
                <div
                    className={cn(
                        'bg-gray-100 dark:bg-gray-900 relative p-4 rounded-lg border-b border-gray-200 dark:border-gray-700 mt-3',
                    )}
                >
                    <div className="absolute -top-2 left-5 rotate-45 size-4 bg-gray-100 dark:bg-gray-900"></div>

                    {editing ? (
                        <div className="flex flex-col gap-2">
                            <Textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="w-full p-2 border rounded-md text-sm bg-white dark:bg-gray-800 dark:text-gray-200"
                                rows={3}
                            />
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    className="rounded"
                                    variant="primary"
                                    onClick={handleEditSave}
                                >
                                    {isLoading ? 'Lade...' : 'Kommentar speichern'}
                                </Button>
                                <Button
                                    size="sm"
                                    className="rounded"
                                    variant="secondary"
                                    onClick={() => setEditing(false)}
                                >
                                    Abbrechen
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p>{comment.content}</p>
                    )}
                </div>

                {/* Reply Toggle */}
                {hasRole('user') && !editing && (
                    <div className="flex flex-start">
                        <Button
                            onClick={() => setReplying(!replying)}
                            variant="link"
                            className={cn(
                                'text-sm flex gap-2',
                                replying ? 'text-rose-500' : 'text-primary',
                            )}
                        >
                            {replying ? <TbCancel /> : <BsReply />}
                            {replying ? 'Antwort abbrechen' : 'Antworten'}
                        </Button>
                    </div>
                )}
            </div>

            {/* Reply Form */}
            {replying && !editing && (
                <CommentForm
                    parentId={comment.id.toString()}
                    recipeId={comment.recipe_id}
                    onCommentAdded={onCommentAdded}
                />
            )}

            {/* Replies */}
            {comment?.replies && comment.replies.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            depth={depth + 1}
                            onCommentAdded={onCommentAdded}
                            onCommentDeleted={onCommentDeleted}
                            onCommentUpdated={onCommentUpdated}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
