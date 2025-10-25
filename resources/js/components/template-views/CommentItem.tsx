import { useState } from 'react';
import { usePage } from '@inertiajs/react';

import Avatar from '@/components/reusables/Avatar';
import CommentForm from '@/components/forms/CommentForm';
import axios from 'axios';
import { BsArrow90DegUp } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from "react-icons/md";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { usePermissions } from '@/hooks/usePermissions';
import { SharedPageProps } from '@/types';
import { Comment } from '@/types/Comment';
import { cn } from '@/lib/utils';
import { BsTrash3 } from 'react-icons/bs';
import { PiTrashLight } from "react-icons/pi";
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

    const [editing, setEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);
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
            <div className="flex flex-col gap-2">
                {/* Comment Header */}
                <div className="text-sm font-semibold flex flex-start gap-3 pl-3">
                    <Avatar url={comment.user?.avatar} />
                    {comment.created_at && (
                        <div className="w-32 flex flex-col text-xs text-gray-500 dark:text-gray-400">
                            <div className="text-md text-gray-800 dark:text-gray-200">
                                {comment.user?.name}:
                            </div>
                            <div className="font-light text-xs">
                                {new Date(comment.created_at).toLocaleString()}
                            </div>
                        </div>
                    )}
                    {hasRole('user') && user.id === comment.user?.id && (
                        <div className="flex flex-grow items-start justify-end">
                            <ButtonGroup aria-label="Button group">
                                <Button variant="link" onClick={() => setEditing(true)} className="h-5 mt-[-1px] text-xs flex gap-1 text-primary hover:text-emerald-600 hover:underline">
                                    <MdOutlineModeEditOutline /> Bearbeiten
                                </Button>
                                <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                                    <AlertDialogTrigger title="Kommentar löschen" className="flex gap-1 text-xs text-rose-700 font-normal hover:text-rose-500 hover:underline underline-offset-4 hover:cursor-pointer">
                                        <PiTrashLight className="mt-[1px] size-4" /> <div className="mt-[1px]">Löschen</div>
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
                            </ButtonGroup>
                        </div>
                    )}
                </div>

                {/* Comment Content */}
                <div className={cn('bg-gray-100 dark:bg-gray-900 relative p-4 rounded-lg mt-3')}>
                    <div className="absolute -top-2 left-5 rotate-45 size-4 bg-gray-100 dark:bg-gray-900"></div>
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
