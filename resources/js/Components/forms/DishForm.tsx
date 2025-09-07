import { useForm, router } from '@inertiajs/react';
import { Dish } from '@/types/Dish';
import { useState, FormEvent } from 'react';
import { Difficulty } from '@/types/Difficulty';
import { Ingredient } from '@/types/Ingredient';
import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { GoPlus, GoPencil } from 'react-icons/go';
import { Slider } from '@/components/ui/slider';

import { UNITS } from '@/types/Units';
import { BsTrash3 } from 'react-icons/bs';
import { IngredientComboBox } from '@/components/forms/IngredientComboBox';

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
    // Pending key for creation uploads
    const [pendingKey] = useState<string>(() => (typeof crypto !== 'undefined' && (crypto as any).randomUUID ? (crypto as any).randomUUID() : Math.random().toString(36).slice(2)));

    // Local list of newly uploaded media (creation only)
    const [pendingMedia, setPendingMedia] = useState<Array<{ id: number; path: string; name: string; url?: string; pivot?: any }>>([]);
    const [liveMedia, setLiveMedia] = useState<Array<{ id: number; path: string; name: string; url?: string; pivot?: any }>>(dish?.media ?? []);

    const { data, setData, post, processing, reset } = useForm({
        id: dish?.id ?? null,
        name: dish?.name ?? '',
        slug: dish?.slug ?? '',
        punchline: dish?.punchline ?? '',
        description: dish?.description ?? '',
        difficulty: dish?.difficulty ?? Difficulty.EINFACH,
        rating: Number(dish?.rating ?? 0),
        preparation_time: Number(dish?.preparation_time ?? 0),
        pending_key: isEditing ? null : pendingKey,
        primary_media_id: (dish?.media?.find((m: any) => m?.pivot?.is_primary)?.id ?? null) as any,
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
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('dishes.store'), { forceFormData: true, onSuccess: () => reset(), preserveScroll: true });
    };

    const onUpdate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use POST + method spoofing so multipart/arrays are parsed reliably by PHP
        router.post(
            route('dishes.update', { dish: data.id }),
            { ...data, _method: 'put' },
            {
                preserveScroll: true,
            },
        );
    };

    return (
        <>
            {/* Uploader outside the form to avoid submit issues */}
            <div className="w-full space-y-3 mb-4">
                <InputLabel htmlFor="mediaUpload" value="Bilder hochladen" />
                <DishMediaUploader
                    dishId={isEditing ? (data.id as string) : undefined}
                    pendingKey={!isEditing ? pendingKey : undefined}
                    onUploadedJSON={(m) => {
                        if (!isEditing) {
                            setPendingMedia((prev) => [...prev, m]);
                            if (!data.primary_media_id) setData('primary_media_id', m.id as any);
                        } else {
                            setLiveMedia((prev) => [...prev, m]);
                            if (!data.primary_media_id) setData('primary_media_id', m.id as any);
                        }
                    }}
                />
            </div>

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
                        value={data.difficulty || Difficulty.EINFACH as string}
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

            {/* Medien */}
            <div className="w-full space-y-3">
                <InputLabel htmlFor="media" value="Bilder zum Gericht" />

                {/* Aktuelle Bilder (Edit) oder Pending-Uploads (Create) */}
                <div className="flex flex-wrap gap-3">
                    {isEditing
                        ? (liveMedia.map((m: any) => (
                            <label key={m.id} className="relative w-28 h-28 border rounded overflow-hidden bg-slate-100 cursor-pointer">
                                <img
                                    src={m.url ?? `/storage/${m.path}`}
                                    alt={m.name}
                                    className="w-full h-full object-cover"
                                />
                                <input
                                    type="radio"
                                    name="primary_media_id"
                                    value={m.id}
                                    checked={data.primary_media_id === m.id}
                                    onChange={() => setData('primary_media_id', m.id as any)}
                                    className="absolute top-1 left-1"
                                    title="Als Hauptbild auswählen"
                                />
                                {(m?.pivot?.is_primary || data.primary_media_id === m.id) && (
                                    <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white px-1 rounded">Aktuell</span>
                                )}
                            </label>
                        )) ?? [])
                        : (pendingMedia.length > 0
                            ? pendingMedia.map((m) => (
                                <label key={m.id} className="relative w-28 h-28 border rounded overflow-hidden bg-slate-100 cursor-pointer">
                                    <img
                                        src={m.url ?? `/storage/${m.path}`}
                                        alt={m.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <input
                                        type="radio"
                                        name="primary_media_id"
                                        value={m.id}
                                        checked={data.primary_media_id === (m.id as any)}
                                        onChange={() => setData('primary_media_id', m.id as any)}
                                        className="absolute top-1 left-1"
                                        title="Als Hauptbild auswählen"
                                    />
                                </label>
                            ))
                            : <p className="text-sm text-slate-500">Noch keine Bilder vorhanden.</p>
                        )}
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

                        <IngredientComboBox
                            options={ingredients}
                            value={di.ingredient_id}
                            triggerClassName="mt-1 w-80"
                            onChange={(val) => updateIngredient(idx, 'ingredient_id', val)}
                        />

                        <Button
                            variant="destructive"
                            className="mt-1.5 hover:cursor-pointer"
                            size="sm"
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
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={processing}>
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
        </>
    );
}

// Lightweight uploader that posts to /upload with dish_id so the file is attached via pivot
function DishMediaUploader({ dishId, pendingKey, onUploadedJSON }: { dishId?: string; pendingKey?: string; onUploadedJSON?: (m: { id: number; path: string; name: string; url?: string; pivot?: any }) => void }) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('collection', 'dish_images');
            if (dishId) formData.append('dish_id', dishId);
            if (pendingKey) formData.append('pending_key', pendingKey);
            const res = await (window.axios?.post?.('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
                withCredentials: true,
            }) ?? fetch('/upload', { method: 'POST', body: formData, headers: { Accept: 'application/json' }, credentials: 'include' }));

            if (res && 'data' in (res as any)) {
                const media = (res as any).data.media;
                onUploadedJSON?.(media);
            } else if (res instanceof Response) {
                const json = await res.json();
                onUploadedJSON?.(json.media);
            }

            setFile(null);
        } catch (e: any) {
            setError(e?.response?.data?.message || 'Upload fehlgeschlagen');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-3" onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}>
            <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Button type="button" onClick={handleUpload} disabled={loading || !file} className="hover:cursor-pointer">
                {loading ? 'Lädt…' : 'Bild hochladen'}
            </Button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}
