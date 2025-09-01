import { useForm } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';

import { GoPlus, GoPencil } from 'react-icons/go';

import Ingredient from '@/interfaces/Ingredient';

import { cn } from '@/lib/utils';

interface IngredientFormProps {
    ingredient?: Ingredient; // optional, für Create vs Edit
    className?: string;
}

export default function DishForm({ ingredient, className }: IngredientFormProps) {
    const isEditing = Boolean(ingredient);

    const { data, setData, post, put, processing, errors } = useForm({
        id: ingredient?.id ?? null,
        name: ingredient?.name ?? '',
        amount: Number(ingredient?.amount ?? 0),
        unit: ingredient?.unit ?? '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('ingredients.store'));
    }

    function update(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('ingredients.update', { ingredient: data.id }));
    }

    return (
        <form
            onSubmit={isEditing ? update : submit}
            className={cn('flex flex-col justify-between items-center space-y-3', className)}
        >
            {/* Name */}
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    value={data.name}
                    className="mt-1 flex w-full"
                    placeholder="z.B. Ofengemüse mit Kartoffeln"
                    isFocused
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            {/* Submit */}
            <div className="w-full my-4 flex items-center justify-end">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    {ingredient ? <GoPencil className="size-4" /> : <GoPlus className="size-4" />}{' '}
                    {ingredient ? 'Bearbeiten' : 'Erstellen'}
                </Button>
            </div>
        </form>
    );
}
