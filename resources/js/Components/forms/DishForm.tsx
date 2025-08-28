import { useForm } from '@inertiajs/react';
import { Textarea } from '@/Components/ui/textarea';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';

import { Button } from '@/Components/ui/button';
import { GoPlus } from 'react-icons/go';
import Dish from '@/types/Dish';
import { cn } from '@/lib/utils';

interface DishFormProps {
    dish: Dish;
    className?: string;
}

export default function DishForm({ dish, className }: DishFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        id: dish.id,
        name: dish.name || '',
        punchline: dish.punchline || '',
        description: dish.description || '',
        image: dish.image || '',
        difficulty: dish.difficulty || 0,
        rating: dish.rating || 0,
        preparation_time: dish.preparation_time || 0,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/gerichte'); // Post Route, die dein Controller erwartet
    }

    return (
        <form onSubmit={submit} className={cn('space-y-3', className)}>
            <div>
                <h3 className="block text-sm font-medium text-gray-700 mb-1">Vorschaubild</h3>
                <label
                    htmlFor="file-upload"
                    className={cn(
                        "w-full flex items-center justify-center rounded-lg border-2 border-dotted border-slate-400 focus-within:border-emerald-700 focus-within:ring-emerald-700 py-12 px-4 text-4xl text-slate-500 hover:cursor-pointer hover:text-emerald-700 hover:border-emerald-700",
                        className
                    )}
                    >
                    <div className="flex flex-col items-center space-y-2">
                        <GoPlus />
                        <span className="text-sm">Bild auswählen</span>
                    </div>
                    <input
                        id="file-upload"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        aria-label="Datei auswählen"
                    />
                </label>
            </div>
            <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 flex w-full"
                    placeholder="z.B. Ofengemüse mit Kartoffeln"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="punchline" value="Punchline" />
                <TextInput
                    id="punchline"
                    type="text"
                    name="punchline"
                    value={data.punchline}
                    className="mt-1 flex w-full"
                    autoComplete="punchline"
                    placeholder="z.B. lecker und frisch"
                    isFocused={true}
                    onChange={(e) => setData('punchline', e.target.value)}
                />
                <InputError message={errors.punchline} className="mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <InputLabel htmlFor="preparation-time" value="Zubereitungszeit in Minuten" />
                    <TextInput
                        id="preparation-time"
                        type="number"
                        min="0"
                        max="240"
                        name="preparation_time"
                        value={data.preparation_time}
                        className="mt-1 flex w-full"
                        autoComplete="punchline"
                        placeholder="25"
                        isFocused={true}
                        onChange={(e) => setData('preparation_time', e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="rating" value="Bewertung" />
                    <TextInput
                        id="rating"
                        type="number"
                        min="0"
                        max="5"
                        name="rating"
                        value={data.rating}
                        className="mt-1 flex w-full"
                        isFocused={true}
                        onChange={(e) => setData('rating', e.target.value)}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" />
                    <Select name="difficulty" defaultValue="einfach" onValueChange={(e) => setData('difficulty', e)}>
                        <SelectTrigger className="w-full text-base rounded bg-white py-6 border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 mt-1">
                            <SelectValue placeholder="Schwierigkeitsgrad" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="einfach">einfach</SelectItem>
                            <SelectItem value="normal">normal</SelectItem>
                            <SelectItem value="mittel">mittel</SelectItem>
                            <SelectItem value="fortgeschritten">fortgeschritten</SelectItem>
                            <SelectItem value="zeitaufwendig">zeitaufwendig</SelectItem>
                            <SelectItem value="expert">expert</SelectItem>
                            <SelectItem value="schwer">schwer</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <InputLabel htmlFor="description" value="Beschreibung" />
                <Textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="rounded border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 py-3 px-4 "
                    placeholder="Man nehme..."
                    rows={5}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="my-4 flex items-center justify-end">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    <GoPlus />
                    Neues Gericht
                </Button>
            </div>
        </form>
    );
}
