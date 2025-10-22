import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import { Recipe } from '@/types/Recipe';
import { Comment } from '@/types/Comment';
import { Textarea } from '@/components/ui/textarea';
import InputLabel from '@/components/forms/inputs/InputLabel';
import { cn } from '@/lib/utils';

interface CommentFormProps {
    recipeId: Recipe['id'];
    parentId?: number | null;
    onCommentAdded?: () => void;
    className?: string
}

/**
 * Form to add a comment to a recipe.
 *
 * @param {CommentFormProps} props The props for this component.
 * @param {Recipe['id']} props.recipeId The id of the recipe to add a comment to.
 * @param {number | null} props.parentId The id of the parent comment.
 * @param {() => void} props.onCommentAdded A callback to be called when a comment is added successfully.
 * @returns {JSX.Element} The form element.
 */
export default function CommentForm({ recipeId, parentId = null, onCommentAdded, className }: CommentFormProps) {
  
    const { data, setData, post, processing, reset } = useForm({
        parent_id: parentId,
        content: '',
    });

    const submit = (e: React.FormEvent) => {
      e.preventDefault();
      post(`/rezepte/${recipeId}/comments`, {
        onSuccess: () => {
          reset();
          onCommentAdded?.(); // parent-Komponente kann Liste aktualisieren
        },
      });
    };

    return (
      <div className={cn("asd",className)}>
        <form onSubmit={submit} className="flex flex-col gap-3">
            <InputLabel className="text-lg" value="Kommentare" />
            <Textarea
              className="w-full border rounded p-2"
              placeholder="Schreibe einen Kommentar..."
              value={data.content}
              rows={4}
              onChange={(e) => setData('content', e.target.value)}
            />
            <Button type="submit" variant="primary" disabled={processing}>Kommentar senden</Button>
        </form>
      </div>
    );
}