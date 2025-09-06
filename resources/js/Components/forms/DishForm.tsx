import { useForm, router } from '@inertiajs/react';
import { Dish } from '@/types/Dish';
import { Difficulty } from '@/types/Difficulty';
import { Ingredient } from '@/types/Ingredient';
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
import { cn } from '@/lib/utils';
import { GoPlus, GoPencil } from 'react-icons/go';
import { Slider } from '@/Components/ui/slider';

import { UNITS } from '@/types/Units';
import { BsTrash3 } from 'react-icons/bs';
import { ComboBox } from '@/Components/forms/ComboBox';

interface DishIngredientData {
    ingredient_id: string;
    quantity: string;
    unit: string;
}

interface DishFormProps {
    dish?: Dish;
    ingredients: Ingredient[];
    className?: string;
}

export default function DishForm({ dish, ingredients, className }: DishFormProps) {
    const isEditing = Boolean(dish);

    const { data, setData, post, processing, errors } = useForm({
        id: dish?.id ?? null,
        name: dish?.name ?? '',
        slug: dish?.slug ?? '',
        punchline: dish?.punchline ?? '',
        description: dish?.description ?? '',
        difficulty: dish?.difficulty ?? Difficulty.EINFACH,
        rating: Number(dish?.rating ?? 0),
        preparation_time: Number(dish?.preparation_time ?? 0),
        // ✅ sicherstellen, dass immer ein Array da ist
        dish_ingredients:
            dish?.ingredients?.map((i) => ({
                ingredient_id: i.id!,
                quantity: i.pivot?.quantity ?? '',
                unit: i.pivot?.unit ?? 'gr',
            })) ?? ([] as DishIngredientData[]),
    });

    // --- Zutatenlogik ---
    const addIngredient = () => {
        setData('dish_ingredients', [
            ...data.dish_ingredients,
            { ingredient_id: '', quantity: '', unit: 'gr' },
        ]);
    };

    const updateIngredient = (index: number, field: keyof DishIngredientData, value: string) => {
        const updated = [...data.dish_ingredients];
        updated[index][field] = value;
        setData('dish_ingredients', updated);
    };

    const removeIngredient = (index: number) => {
        const updated = [...data.dish_ingredients];
        updated.splice(index, 1);
        setData('dish_ingredients', updated);
    };

    // --- Submit ---
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('dishes.store'), { forceFormData: true });
    };

    const onUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.put(route('dishes.update', { dish: data.id }), data, {
            forceFormData: true,
        });
    };

    return (
        <form
            onSubmit={isEditing ? onUpdate : onSubmit}
            className={cn('flex flex-col space-y-3', className)}
        >
            {/* Name */}
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    value={data.name}
                    placeholder="z.B. Ofengemüse mit Kartoffeln"
                    className="mt-1 w-full"
                    isFocused
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            {/* Punchline */}
            <div className="w-full">
                <InputLabel htmlFor="punchline" value="Punchline" />
                <TextInput
                    id="punchline"
                    type="text"
                    value={data.punchline}
                    placeholder="z.B. Mediterran und frisch"
                    className="mt-1 w-full"
                    onChange={(e) => setData('punchline', e.target.value)}
                />
                {errors.punchline && <p className="text-red-500">{errors.punchline}</p>}
            </div>

            {/* Beschreibung */}
            <div className="w-full">
                <InputLabel htmlFor="description" value="Beschreibung" />
                <Textarea
                    value={data.description}
                    rows={5}
                    placeholder="z.B. Schnell und lecker für die ganze Familie..."
                    className="mt-1 w-full rounded-lg border border-slate-400 px-3 py-2"
                    onChange={(e) => setData('description', e.target.value)}
                />
                {errors.description && <p className="text-red-500">{errors.description}</p>}
            </div>

            <hr className="my-5" />
            <h3 className="text-lg font-medium mb-5">Zubereitung</h3>

            {/* Zahlenfelder: Zubereitungszeit, Bewertung, Difficulty */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Zubereitungszeit */}
                <div>
                    <InputLabel htmlFor="preparation_time" value="Zubereitungszeit" />
                    <div className="flex items-end">
                        <TextInput
                            id="preparation_time"
                            type="number"
                            min={0}
                            step={5}
                            max={600}
                            value={data.preparation_time}
                            placeholder="0"
                            className="mt-1 flex-1 rounded-none border-r-0 border-slate-200 rounded-tl-lg rounded-bl-lg"
                            onChange={(e) => setData('preparation_time', Number(e.target.value))}
                        />
                        <span className="px-3 py-3 border border-l-0 rounded-r-lg border-slate-400">
                            Minuten
                        </span>
                    </div>
                    <Slider
                        defaultValue={[data.preparation_time]}
                        max={240}
                        step={5}
                        className="my-5"
                        onValueChange={(value) => {
                            setData('preparation_time', value[0]); // erster Wert aus dem Array
                        }}
                    />
                    {errors.preparation_time && (
                        <p className="text-red-500">{errors.preparation_time}</p>
                    )}
                </div>

                {/* Bewertung */}
                <div>
                    <InputLabel htmlFor="rating" value="Bewertung" />

                    <TextInput
                        id="rating"
                        type="number"
                        min={1}
                        max={5}
                        value={data.rating}
                        onChange={(e) => setData('rating', Number(e.target.value))}
                        className="mt-1 w-full"
                    />

                    {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                </div>

                {/* Difficulty */}
                <div>
                    <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" />
                    <Select
                        name="difficulty"
                        value={data.difficulty || undefined}
                        onValueChange={(val) => setData('difficulty', val as Difficulty)}
                    >
                        <SelectTrigger className="w-full mt-1 py-2">
                            <SelectValue placeholder="Schwierigkeitsgrad" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(Difficulty).map(([key, val]) => (
                                <SelectItem key={key} value={key}>
                                    {val}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.difficulty && <p className="text-red-500">{errors.difficulty}</p>}
                </div>
            </div>

            {/* Zutaten */}
            <div className="w-full space-y-2">
                <InputLabel htmlFor="ingredients" value="Zutaten" />
                {data.dish_ingredients?.map((di, idx) => (
                    <div key={idx} className="flex flex-row gap-2 items-start">
                        <TextInput
                            placeholder="Menge"
                            value={di.quantity}
                            className="w-28"
                            type="number"
                            onChange={(e) => updateIngredient(idx, 'quantity', e.target.value)}
                        />

                        <Select
                            value={di.unit}
                            onValueChange={(value) => updateIngredient(idx, 'unit', value)}
                        >
                            <SelectTrigger className="w-24 mt-1 py-2">
                                <SelectValue placeholder="Einheit auswählen" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(UNITS).map(([key, val]) => (
                                    <SelectItem key={key} value={val}>
                                        {val}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={di.ingredient_id}
                            onValueChange={(val) => updateIngredient(idx, 'ingredient_id', val)}
                        >
                            <SelectTrigger className="w-64 mt-1 py-2">
                                <SelectValue placeholder="Zutat auswählen" />
                            </SelectTrigger>
                            <SelectContent>
                                {ingredients.map((i) => (
                                    <SelectItem key={i.id} value={i.id}>
                                        {i.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            variant="destructive"
                            className="mt-1"
                            type="button"
                            onClick={() => removeIngredient(idx)}
                        >
                            <BsTrash3 />
                        </Button>
                    </div>
                ))}
                <Button type="button" onClick={addIngredient} className="hover:cursor-pointer">
                    <GoPlus /> Zutat hinzufügen
                </Button>
            </div>

            {/* Submit */}
            <div className="w-full mt-4">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    {isEditing ? (
                        <>
                            <GoPencil /> Bearbeiten
                        </>
                    ) : (
                        <>
                            <GoPlus /> Erstellen
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}
