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
import { cn } from '@/lib/utils';

import Ingredient from '@/interfaces/Ingredient';
import { Difficulty } from '@/types/Difficulty';

interface IngredientFormProps {
    inredient?: Ingredient;
    className?: string;
}

export default function IngredientForm({ inredient, className }: IngredientFormProps) {
    const isEditing = Boolean(inredient);

    // TODO <Dish> as useForm<Dish>
    const { data, setData, post, put, processing, errors } = useForm({
        id: inredient?.id ?? null,
        name: inredient?.name ?? '',
        // slug: dish?.slug ?? '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Post wird direkt verwendet
        post(route('inredients.store'), {
            forceFormData: true,
        });
        console.log(data);
    }

    function update(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Router versendet post request getarnt als put _method
        router.post(route('inredients.update', { inredient: data.id }), {
            _method: 'put',
            forceFormData: true,
        });
        console.log(data);
    }

    return (
        <form
            onSubmit={isEditing ? update : submit}
            className={cn('flex flex-col justify-between items-center space-y-3', className)}
        >

            {/* Upload */}
            <div className="w-full">
                <h3 className="block text-sm font-medium text-gray-700 mb-1">Vorschaubild</h3>
                {data.image && (
                    <img
                        src={preview ?? `../uploads/dishes/${data.image}`}
                        alt="Preview"
                        className="mt-2 max-h-40 rounded border"
                    />
                )}
                <label
                    htmlFor="image"
                    className={cn(
                        'w-full flex items-center justify-center rounded-lg border-2 border-dotted border-slate-400 focus-within:border-emerald-700 focus-within:ring-emerald-700 py-12 px-4 text-4xl text-slate-500 hover:cursor-pointer hover:text-emerald-700 hover:border-emerald-700',
                        className,
                    )}
                >
                    <div className="flex flex-col items-center space-y-2">
                        <GoPlus />
                        <span className="text-sm">Bild auswählen</span>
                    </div>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="image"
                        //@ts-ignore
                        onChange={(e) => setPreview(e.target.files[0])}
                        disabled={processing}
                    />
                </label>
                <InputError message={errors.image} className="mt-2" />
            </div>

            {/* Zahlenfelder */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <InputLabel htmlFor="rating" value="Bewertung" />
                    <TextInput
                        id="rating"
                        type="number"
                        min={0}
                        step={1}
                        max={5}
                        placeholder="0"
                        value={data.rating}
                        className="mt-1 flex w-full"
                        onChange={(e) => setData('rating', Number(e.target.value))}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" />
                    <Select
                        name="difficulty"
                        value={data.difficulty ?? Difficulty.EASY}
                        onValueChange={(val) => setData('difficulty', val as Difficulty)}
                    >
                        <SelectTrigger
                            className="w-full mt-1 py-6 border-slate-200 shadow-none bg-white"
                        >
                            <SelectValue placeholder="Schwierigkeitsgrad" />
                        </SelectTrigger>
                        <SelectContent className="bg-white p-3">
                            {[
                                { value: 'EASY', label: 'einfach' },
                                { value: 'MEDIUM', label: 'mittel' },
                                { value: 'HARD', label: 'schwer' },
                            ].map((d) => (
                                <SelectItem
                                    key={d.value}
                                    value={d.value}
                                    className="bg-white"
                                >
                                    {d.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.difficulty} className="mt-2" />
                </div>
            </div>

            {/* Submit */}
            <div className="w-full my-4 flex items-center justify-end">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    {dish ? <GoPencil className="size-4" /> : <GoPlus className="size-4" />}{' '}
                    {dish ? 'Bearbeiten' : 'Erstellen'}
                </Button>
            </div>
        </form>
    );
}
