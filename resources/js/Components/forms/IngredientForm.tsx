import { useForm } from '@inertiajs/react';

import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';

import { GoPlus, GoPencil } from 'react-icons/go';
import { cn } from '@/lib/utils';

import { Ingredient } from '@/types/Ingredient';

interface IngredientFormProps {
    ingredient?: Ingredient; // optional, für Create vs Edit
    className?: string;
}

export default function IngredientForm({ ingredient, className }: IngredientFormProps) {
    const isEditing = Boolean(ingredient);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        id: ingredient?.id ?? null,
        name: ingredient?.name ?? '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('ingredients.store'), {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    function update(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('ingredients.update', { ingredient: data.id }), {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    return (
        <form
            onSubmit={isEditing ? update : submit}
            className={cn('flex flex-col justify-between items-center space-y-3', className)}
        >
            {/* Zutatenname */}
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    value={data.name}
                    className="mt-1 flex w-full"
                    placeholder="z.B. Kartoffeln"
                    isFocused
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            {/* Submit */}
            <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                {ingredient ? <GoPencil className="size-4" /> : <GoPlus className="size-4" />}{' '}
                {ingredient ? 'Bearbeiten' : 'Hinzufügen'}
            </Button>
        </form>
    );
}
