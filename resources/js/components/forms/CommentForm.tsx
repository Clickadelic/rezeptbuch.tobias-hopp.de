import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { addComment } from '@/lib/comments';
import { Comment } from '@/types/Comment';
import { Link, usePage } from '@inertiajs/react';

import { SharedPageProps } from '@/types';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { BsDoorOpen, BsJournalBookmark } from 'react-icons/bs';


import { FiCheckCircle } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface CommentFormProps {
    recipeId: string;
    parentId?: string;
    onCommentAdded: (comment: Comment) => void;
}

export default function CommentForm({ recipeId, parentId, onCommentAdded }: CommentFormProps) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { user } = usePage<SharedPageProps>().props;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newComment = await addComment(recipeId!, content, parentId);
            onCommentAdded(newComment);
            setContent('');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if(!user) {
        return (
            <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                    Bitte logge Dich ein um einen Kommentar zu schreiben.
                </h3>
                <div className="flex gap-2 mt-5">
                        <Link
                            href={route('register')}
                            className="flex gap-2 border border-gray-800 dark:border-gray-200 dark:hover:border-gray-400 text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 rounded px-3 py-1.5"
                        >
                            <FiCheckCircle className="size-4 mt-1" />
                            Registrieren
                        </Link>
                        <Link
                            href={route('login')}
                            className="flex gap-2 border border-transparent bg-primary text-white rounded px-3 py-1.5 hover:bg-emerald-700"
                        >
                            <BsDoorOpen className="size-4 mt-1" />
                            Login
                        </Link>
                    </div>
            </div>
        )
    }

    return (
        <>
            <h3 className={cn('text-lg flex gap-2',)}>Schreib' einen Kommentar</h3>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 inert:opacity-50 inert:pointer-events-none"
            >
                <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Kommentar schreiben..."
                    rows={4}
                    className="w-full"
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                >
                    {loading ? 'Senden...' : 'Kommentar hinzufügen'}
                </button>
            </form>
        </>
    );
}
