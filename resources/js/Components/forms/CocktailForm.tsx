import { useForm, router } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';

import { GoPlus, GoPencil } from 'react-icons/go';
import { cn, assetPath } from '@/lib/utils';

import { Cocktail } from '@/types/Cocktail';
import { Difficulty } from '@/types/Difficulty';

interface CocktailFormProps {
    cocktail?: Cocktail;
    className?: string;
}

/**
 * @description
 * A form to create or update a dish. If no dish is provided, a new dish
 * will be created. If a dish is provided, the form will be prefilled with
 * the data of the dish. The form will be submitted to the dishes.store or
 * dishes.update route accordingly.
 *
 * @param {Dish} [dish] - The dish to be edited or created. If not provided,
 * a new dish will be created.
 * @param {string} [className] - The class name to be applied to the form.
 * @returns {JSX.Element} - The form component.
 */
export default function CocktailForm({ cocktail, className }: CocktailFormProps) {
    const isEditing = Boolean(cocktail);

    // TODO: <cocktail> as useForm<cocktail>
    const { data, setData, post, put, processing, errors, progress } = useForm({
        id: cocktail?.id ?? null,
        name: cocktail?.name ?? '',
        slug: cocktail?.slug ?? '',
        punchline: cocktail?.punchline ?? '',
        description: cocktail?.description ?? '',
        image: null as File | null,
        difficulty: cocktail?.difficulty ?? Difficulty.EINFACH,
        rating: Number(cocktail?.rating ?? 0),
        preparation_time: Number(cocktail?.preparation_time ?? 0),
    });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Post wird direkt verwendet
        post(route('cocktails.store'), {
            forceFormData: true,
        });
        console.log(data);
    }

    function onUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Router versendet post request getarnt als put _method
        router.post(route('cocktails.update', { dish: data.id }), {
            _method: 'put',
            forceFormData: true,
        });
        console.log(data);
    }

    return (
        <>
            <form
                onSubmit={isEditing ? onUpdate : onSubmit}
                className={cn('flex flex-col justify-between items-center space-y-3', className)}
            >
                {/* Upload */}
                <div className="w-full">
                    <h3 className="block text-sm font-medium text-gray-700 mb-1">Vorschaubild</h3>

                    <label
                        htmlFor="image"
                        className={cn(
                            'w-full flex items-center justify-center rounded-lg border-2 border-dotted border-slate-400 focus-within:border-primary focus-within:ring-primary py-12 px-4 text-4xl text-slate-500 hover:cursor-pointer hover:text-primary hover:border-primary',
                            className,
                        )}
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <GoPlus />
                            <span className="text-sm">Bild auswählen</span>
                        </div>

                        <input
                            type="file"
                            className="hidden"
                            id="image"
                            accept="image/*"
                            disabled={processing}
                            onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                        />
                        {progress && (
                            <div className="w-full my-2 bg-slate-200 h-5 rounded-lg">
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            </div>
                        )}
                    </label>
                    <InputError message={errors.image} className="mt-2" />
                </div>

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

                {/* Punchline */}
                <div className="w-full">
                    <InputLabel htmlFor="punchline" value="Punchline" />
                    <TextInput
                        id="punchline"
                        type="text"
                        value={data.punchline}
                        placeholder="z.B. Mediterran und frisch"
                        className="mt-1 flex w-full"
                        onChange={(e) => setData('punchline', e.target.value)}
                    />
                    <InputError message={errors.punchline} className="mt-2" />
                </div>

                {/* Beschreibung */}
                <div className="w-full">
                    <InputLabel htmlFor="description" value="Beschreibung" className="mb-1" />
                    <Textarea
                        value={data.description}
                        className="rounded-lg border border-slate-400 focus:border-primary focus:ring-primary py-3 px-4"
                        placeholder="z.B. Schnell und lecker für die ganze Familie..."
                        rows={5}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>

                {/* Submit */}
                <div className="w-full my-4 flex items-center justify-end">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full hover:cursor-pointer"
                        disabled={processing}
                    >
                        {cocktail ? <GoPencil className="size-4" /> : <GoPlus className="size-4" />}{' '}
                        {cocktail ? 'Bearbeiten' : 'Erstellen'}
                    </Button>
                </div>
            </form>
        </>
    );
}
