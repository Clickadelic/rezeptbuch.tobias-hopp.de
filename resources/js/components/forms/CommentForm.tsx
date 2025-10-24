import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { addComment } from '@/lib/comments';
import { Comment } from '@/types/Comment';

interface CommentFormProps {
    recipeId: string;
    parentId?: string;
    onCommentAdded: (comment: Comment) => void;
}

export default function CommentForm({ recipeId, parentId, onCommentAdded }: CommentFormProps) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    return (
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
    );
}
