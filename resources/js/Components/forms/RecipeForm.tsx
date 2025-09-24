import { useForm, router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';

import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { GoPlus, GoPencil } from 'react-icons/go';
import { Slider } from '@/components/ui/slider';

import { Recipe } from '@/types/Recipe';
import { Difficulty } from '@/types/Difficulty';
import { Ingredient } from '@/types/Ingredient';
import { UNITS } from '@/types/Units';

import { BsTrash3 } from 'react-icons/bs';
import { IngredientComboBox } from '@/components/forms/IngredientComboBox';

interface RecipeIngredientData {
    ingredient_id: string;
    quantity: string;
    unit: string;
}

interface RecipeFormProps {
    recipe?: Recipe;
    ingredients: Ingredient[];
    className?: string;
}

export default function RecipeForm({ recipe, ingredients, className }: RecipeFormProps) {
    const isEditing = Boolean(recipe);
    // Pending key for creation uploads
    const [pendingKey] = useState<string>(() =>
        typeof crypto !== 'undefined' && (crypto as any).randomUUID
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
    );

    // Local list of newly uploaded media (creation only)
    const [pendingMedia, setPendingMedia] = useState<
        Array<{ id: number; path: string; name: string; url?: string; pivot?: any }>
    >([]);
    const [liveMedia, setLiveMedia] = useState<
        Array<{ id: number; path: string; name: string; url?: string; pivot?: any }>
    >(recipe?.media ?? []);

    // @ts-ignore
    const { data, setData, post, processing, errors, reset } = useForm({
        id: recipe?.id ?? null,
        name: recipe?.name ?? '',
        slug: recipe?.slug ?? '',
        punchline: recipe?.punchline ?? '',
        description: recipe?.description ?? '',
        difficulty: recipe?.difficulty ?? 'einfach',
        rating: Number(recipe?.rating ?? 5),
        preparation_time: Number(recipe?.preparation_time ?? 15),
        preparation_instructions: recipe?.preparation_instructions ?? '',
        pending_key: isEditing ? null : pendingKey,
        primary_media_id: (recipe?.media?.find((m: any) => m?.pivot?.is_primary)?.id ?? null) as any,
        // ✅ sicherstellen, dass immer ein Array da ist
        recipe_ingredients:
            recipe?.ingredients?.map((i) => ({
                ingredient_id: i.id!,
                quantity: i.pivot?.quantity ?? '',
                unit: i.pivot?.unit ?? 'gr',
            })) ?? ([] as RecipeIngredientData[]),
    });

    // --- Zutatenlogik ---
    const addIngredient = () => {
        setData('recipe_ingredients', [
            ...data.recipe_ingredients,
            { ingredient_id: '', quantity: '', unit: 'gr' },
        ]);
    };

    const updateIngredient = (index: number, field: keyof RecipeIngredientData, value: string) => {
        const updated = [...data.recipe_ingredients];
        updated[index][field] = value;
        setData('recipe_ingredients', updated);
    };

    const removeIngredient = (index: number) => {
        const updated = [...data.recipe_ingredients];
        updated.splice(index, 1);
        setData('recipe_ingredients', updated);
    };

    // --- Submit ---
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted Data", data);
        post(route('recipes.store'), {
            forceFormData: true,
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    };

    const onUpdate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use POST + method spoofing so multipart/arrays are parsed reliably by PHP
        router.post(
            route('recipes.update', { recipe: data.id }),
            { ...data, _method: 'put' },
            {
                onSuccess: () => reset(),
                preserveScroll: true,
            },
        );
    };

    return (
        <>
            {/* Uploader outside the form to avoid submit issues */}
            <div className="w-full space-y-3 mb-4">
                <InputLabel htmlFor="mediaUpload" value="Bilder hochladen" />
                <RecipeMediaUploader
                    recipeId={isEditing ? (data.id as string) : undefined}
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
                {/* Medien */}
                <div className="w-full space-y-3">
                    <InputLabel htmlFor="media" value="Bilder zum Gericht" />
                    {/* Aktuelle Bilder (Edit) oder Pending-Uploads (Create) */}
                    <div className="flex flex-wrap gap-3">
                        {isEditing ? (
                            (liveMedia.map((m: any) => (
                                <label
                                    key={m.id}
                                    className="relative border rounded overflow-hidden bg-gray-100 cursor-pointer"
                                >
                                    <img
                                        src={m.url ?? `/storage/${m.path}`}
                                        alt={m.name}
                                        className="aspect-video w-12 object-cover"
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
                                        <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white px-1 rounded">
                                            Aktuell
                                        </span>
                                    )}
                                </label>
                            )) ?? [])
                        ) : pendingMedia.length > 0 ? (
                            pendingMedia.map((m) => (
                                <label
                                    key={m.id}
                                    className="relative w-28 h-28 border rounded overflow-hidden bg-gray-100 cursor-pointer"
                                >
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
                        ) : (
                            <p className="text-sm text-gray-500">Noch keine Bilder vorhanden.</p>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="w-full space-y-3">
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
                <div className="w-full space-y-3">
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
                <div className="w-full space-y-3">
                    <InputLabel htmlFor="description" value="Beschreibung" />
                    <Textarea
                        value={data.description}
                        rows={5}
                        placeholder="z.B. Schnell und lecker für die ganze Familie..."
                        className="mt-1 w-full rounded-lg border border-gray-400 px-3 py-2"
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
                                className="mt-1 flex-1 rounded-none border-r-0 border-gray-200 rounded-tl-lg rounded-bl-lg"
                                onChange={(e) =>
                                    setData('preparation_time', Number(e.target.value))
                                }
                            />
                            <span className="px-3 py-2 border border-l-0 rounded-r-lg border-gray-400">
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
                            // Wenn kein Wert gesetzt, nehme den Default aus dem Enum
                            value={data.difficulty ?? Difficulty.EINFACH}
                            onValueChange={(val) => setData('difficulty', val as Difficulty)}
                        >
                            <SelectTrigger className="w-full mt-1 py-2">
                                <SelectValue placeholder="Schwierigkeitsgrad" />
                            </SelectTrigger>
                            
                            <SelectContent>
                                {Object.entries(Difficulty).map(([key, val]) => (
                                    <SelectItem key={key} value={val}>
                                        {val}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {errors.difficulty && (
                            <p className="text-red-500 text-sm mt-1">{errors.difficulty}</p>
                        )}
                    </div>

                </div>

                {/* Zutaten */}
                <div className="w-full space-y-3">
                    <InputLabel htmlFor="ingredients" value="Zutaten" />
                    {data.recipe_ingredients?.map((di, idx) => (
                        <div key={idx} className="flex flex-row justify-start gap-2 items-start mb-3 ">
                            <TextInput
                                placeholder="Menge"
                                value={di.quantity}
                                className="w-36 bg-rose-200"
                                type="number"
                                onChange={(e) => updateIngredient(idx, 'quantity', e.target.value)}
                            />

                            <Select
                                value={di.unit}
                                onValueChange={(value) => updateIngredient(idx, 'unit', value)}
                            >
                                <SelectTrigger className="w-48 mt-1 py-2">
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
                                triggerClassName="mt-1 w-full"
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

                {/* Zubereitung */}
                <div className="w-full space-y-3 mt-4">
                    <InputLabel htmlFor="preparation_instructions" value="Zubereitung, so geht's&hellip;" />
                    <Textarea
                        id="preparation_instructions"
                        value={data.preparation_instructions}
                        rows={5}
                        placeholder="Beschreibung der Zubereitung"
                        className="mt-1 w-full rounded-lg border border-gray-400 px-3 py-2"
                        onChange={(e) => setData('preparation_instructions', e.target.value)}
                    />
                    {errors.preparation_instructions && <p className="text-red-500">{errors.preparation_instructions}</p>}
                </div>

                {/* Submit */}
                <div className="w-full mt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                    >
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

// Lightweight uploader that posts to /upload with recipe_id so the file is attached via pivot
function RecipeMediaUploader({
    recipeId,
    pendingKey,
    onUploadedJSON,
}: {
    recipeId?: string;
    pendingKey?: string;
    onUploadedJSON?: (m: {
        id: number;
        path: string;
        name: string;
        url?: string;
        pivot?: any;
    }) => void;
}) {
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
            formData.append('collection', 'recipe_images');
            if (recipeId) formData.append('recipe_id', recipeId);
            if (pendingKey) formData.append('pending_key', pendingKey);
            const res = await (window.axios?.post?.('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
                withCredentials: true,
            }) ??
                fetch('/upload', {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                    credentials: 'include',
                }));

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
        <div
            className="flex flex-col gap-3"
            onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
            }}
            tabIndex={0}
        >
            {/* Upload Bereich */}
            <label className="relative w-full flex flex-col items-center justify-center py-6 text-center border-2 border-dashed border-primary rounded-md hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <GoPlus className="text-primary text-4xl" />
                <span className="mt-2 text-sm text-gray-500">Bild auswählen</span>
                
                {/* Unsichtbares Input-Feld */}
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
            </label>

            {/* Upload-Button */}
            <Button
                type="button"
                onClick={handleUpload}
                disabled={loading || !file}
                className="w-full hover:cursor-pointer"
            >
                {loading ? 'Lädt…' : 'Bild hochladen'}
            </Button>

            {/* Fehleranzeige */}
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}
