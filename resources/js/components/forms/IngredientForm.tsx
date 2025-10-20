import { useForm, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
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

import InputError from '@/components/forms/inputs/InputError';
import InputLabel from '@/components/forms/inputs/InputLabel';
import TextInput from '@/components/forms/inputs/TextInput';
import { Button } from '@/components/ui/button';
import { GoPlus, GoPencil } from 'react-icons/go';
import { SlClose } from 'react-icons/sl';
import { BsTrash3 } from 'react-icons/bs';
import { cn } from '@/lib/utils';
import { Ingredient } from '@/types/Ingredient';

interface IngredientFormProps {
    ingredient?: Ingredient;
    className?: string;
    onFinished?: () => void;
}

/**
 * Formular zum Erstellen oder Bearbeiten einer Zutat.
 */
export default function IngredientForm({ ingredient, className, onFinished }: IngredientFormProps) {
    const isEditing = Boolean(ingredient);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        id: ingredient?.id ?? null,
        name: ingredient?.name ?? '',
    });

    // Sync mit geändertem Ingredient
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            preserveScroll: true,
        });
    }

    function handleReset() {
        reset();
        onFinished?.();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleDelete() {
        if (!data.id) return;

        router.delete(route('ingredients.destroy', data.id), {
            onSuccess: () => {
                setIsDeleteDialogOpen(false);
                reset();
                onFinished?.();
            },
            onError: (err) => {
                console.error('Löschen fehlgeschlagen:', err);
                alert('Diese Zutat kann nicht gelöscht werden, da sie in Rezepten verwendet wird.');
            },
        });
    }

    return (
        <form
            onSubmit={isEditing ? update : submit}
            className={cn('flex flex-col justify-between items-center space-y-3', className)}
        >
            <div className="w-full flex justify-between items-center">
                <InputLabel htmlFor="name" value={isEditing ? 'Zutat bearbeiten' : 'Neue Zutat'} />
            </div>

            <div className="w-full">
                <div className={cn('flex', isEditing && 'items-end gap-2')}>
                    <TextInput
                        id="name"
                        type="text"
                        value={data.name}
                        className="mt-1 py-3 px-2 flex w-full"
                        placeholder="z. B. Kartoffeln"
                        isFocused
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {isEditing && (
                        <Button
                            type="button"
                            variant="default"
                            onClick={handleReset}
                            className="border-0 hover:bg-gray-400 transition"
                        >
                            <SlClose className="size-4" />
                        </Button>
                    )}
                </div>
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className={cn('w-full flex', isEditing && 'items-end gap-2')}>
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

                {isEditing && (
                    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                        <AlertDialogTrigger asChild>
                            <Button
                                type="button"
                                variant="destructive"
                                className="bg-rose-500"
                                aria-label="Zutat löschen"
                                onClick={() => setIsDeleteDialogOpen(true)}
                            >
                                <BsTrash3 className="size-4" />
                            </Button>
                        </AlertDialogTrigger>

                        <AlertDialogContent className="bg-gray-100 dark:bg-gray-900">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-gray-800 dark:text-gray-200">
                                    Bist du sicher, dass du diese Zutat löschen möchtest?
                                </AlertDialogTitle>
                                <AlertDialogDescription className="mb-3">
                                    Diese Aktion kann nicht rückgängig gemacht werden.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="dark:text-gray-200">
                                    Abbrechen
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    className="text-white bg-rose-500 hover:bg-rose-600 hover:text-white"
                                    onClick={handleDelete}
                                >
                                    <BsTrash3 className="size-5 mr-1" /> Löschen
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>
        </form>
    );
}
