import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

import InputError from '@/components/reusables/InputError';
import InputLabel from '@/components/reusables/InputLabel';
import TextInput from '@/components/reusables/TextInput';
import { Button } from '@/components/ui/button';

import { GoPlus, GoPencil } from 'react-icons/go';
import { SlClose } from 'react-icons/sl';
import { cn } from '@/lib/utils';

import { Ingredient } from '@/types/Ingredient';

interface IngredientFormProps {
    ingredient?: Ingredient;
    className?: string;
    onFinished?: () => void;
}

export default function IngredientForm({ ingredient, className, onFinished }: IngredientFormProps) {
    const isEditing = Boolean(ingredient);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        id: ingredient?.id ?? null,
        name: ingredient?.name ?? '',
    });

    // sync wenn sich ingredient ändert
    useEffect(() => {
        setData({
            id: ingredient?.id ?? null,
            name: ingredient?.name ?? '',
        });
    }, [ingredient]);

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('ingredients.store'), {
            onSuccess: () => {
                reset();
                onFinished?.();
            },
            preserveScroll: true,
        });
    }

    function update(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!data.id) return;

        put(route('ingredients.update', data.id), {
            onSuccess: () => {
                reset();
                onFinished?.();
            },
            preserveScroll: true,
        });
    }

    function handleReset() {
        reset();
        onFinished?.();
    }

    return (
        <form
            onSubmit={isEditing ? update : submit}
            className={cn('flex flex-col justify-between items-center space-y-3', className)}
        >
            <div className="w-full flex justify-between items-center">
                <InputLabel htmlFor="name" value={isEditing ? "Zutat bearbeiten" : "Neue Zutat"} />
                {isEditing && (
                    <button
                        type="button"
                        onClick={handleReset}
                        className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition"
                    >
                        <SlClose className="w-4 h-4" />
                    </button>
                )}
            </div>

            <div className="w-full">
                <TextInput
                    id="name"
                    type="text"
                    value={data.name}
                    className="mt-1 py-3 px-2 flex w-full"
                    placeholder="z.B. Kartoffeln"
                    isFocused
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <Button variant="primary" className="w-full rounded" disabled={processing}>
                {isEditing ? (
                    <>
                        <GoPencil className="size-4 mr-1" /> Bearbeiten
                    </>
                ) : (
                    <>
                        <GoPlus className="size-4 mr-1" /> Hinzufügen
                    </>
                )}
            </Button>
        </form>
    );
}
