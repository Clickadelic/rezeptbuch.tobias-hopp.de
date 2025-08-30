import { useForm } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

import { Button } from '@/Components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';

import { GoPlus } from 'react-icons/go';
import { GoPencil } from 'react-icons/go';
import Dish from '@/types/Dish';
import { cn } from '@/lib/utils';

interface DishFormProps {
    dish?: Dish;           // optional, für Create vs Edit
    className?: string;
}

export default function DishForm({ dish, className }: DishFormProps) {

    const isEditing = Boolean(dish);

    const { data, setData, post, put, processing, errors } = useForm({
        id: dish?.id ?? null,
        name: dish?.name ?? '',
        punchline: dish?.punchline ?? '',
        description: dish?.description ?? '',
        //image: null as File | null,
        difficulty: dish?.difficulty ?? 'einfach',
        rating: Number(dish?.rating ?? 0),
        preparation_time: Number(dish?.preparation_time ?? 0),
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('dishes.store'));
    }
    
    function update(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('dishes.update', { dish: data.id }));
    }
    
    return (
        <form onSubmit={isEditing ? update : submit} className={cn('flex flex-col justify-between items-center space-y-3', className)}>

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
                    placeholder="z.B. lecker und frisch"
                    className="mt-1 flex w-full"
                    onChange={(e) => setData('punchline', e.target.value)}
                />
                <InputError message={errors.punchline} className="mt-2" />
            </div>

            {/* Zahlenfelder */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <InputLabel htmlFor="preparation-time" value="Zubereitungszeit in Minuten" />
                    <TextInput
                        id="preparation-time"
                        type="number"
                        min={0}
                        max={240}
                        value={data.preparation_time}
                        className="mt-1 flex w-full"
                        onChange={(e) => setData('preparation_time', Number(e.target.value))}
                    />
                    <InputError message={errors.preparation_time} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="rating" value="Bewertung" />
                    <TextInput
                        id="rating"
                        type="number"
                        min={0}
                        max={5}
                        value={data.rating}
                        className="mt-1 flex w-full"
                        onChange={(e) => setData('rating', Number(e.target.value))}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" />
                    <Select
                        value={data.difficulty}
                        onValueChange={(val: string) => setData('difficulty', val)}
                    >
                        <SelectTrigger className="w-full text-base rounded bg-white py-6 border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 mt-1">
                            <SelectValue placeholder="Schwierigkeitsgrad" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {['einfach','normal','mittel','fortgeschritten','zeitaufwendig','expert','schwer'].map(d => (
                                <SelectItem key={d} value={d}>{d}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.difficulty} className="mt-2" />
                </div>
            </div>

            {/* Beschreibung */}
            <div className="w-full">
                <InputLabel htmlFor="description" value="Beschreibung" />
                <Textarea
                    value={data.description}
                    className="rounded border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 py-3 px-4"
                    placeholder="Man nehme..."
                    rows={5}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            {/* Submit */}
            <div className="w-full my-4 flex items-center justify-end">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    {dish ? <GoPencil className="size-4" /> : <GoPlus className="size-4" />} {dish ? 'Bearbeiten' : 'Erstellen'}
                </Button>
            </div>
        </form>
    );
}