import { useState, useRef, FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'; // ✅ Richtig, extra Import
import { Button } from '@/components/ui/button';
import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { IngredientComboBox } from '@/components/forms/IngredientComboBox';
import { RecipeMediaUploader } from '@/components/forms/RecipeMediaUploader';
import { Difficulty } from '@/types/Difficulty';
import { Ingredient } from '@/types/Ingredient';
import { UNITS } from '@/types/Units';
import { GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { Link } from '@inertiajs/react';

interface RecipeIngredientData {
    ingredient_id: string;
    quantity: string;
    unit: string;
}

interface RecipeCreateWizardProps {
    recipe?: Recipe;
    ingredients: Ingredient[];
    className?: string;
}

export default function RecipeCreateWizard({
    recipe,
    ingredients,
    className,
}: RecipeCreateWizardProps) {

    const [step, setStep] = useState<number>(1);
    const formRef = useRef<HTMLFormElement>(null);
    const scrollToTop = () => {
    if (formRef.current) {
            const top = formRef.current.getBoundingClientRect().top + window.scrollY - 20; // 20px Puffer
            window.scrollTo({
            top,
            behavior: "smooth",
            });
        }
    };
    // Pending key für Uploads vor dem Speichern (nur Create)
    const [pendingKey] = useState<string>(() =>
        typeof crypto !== 'undefined' && (crypto as any).randomUUID
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
    );

    // Neue Bilder, die in diesem Durchlauf hochgeladen werden
    const [pendingMedia, setPendingMedia] = useState<
        Array<{ id: number; path: string; name: string; url?: string; pivot?: any }>
    >([]);

    // Bereits gespeicherte Bilder (nur Edit)
    const [liveMedia, setLiveMedia] = useState<Array<any>>(recipe?.media ?? []);

    // useForm initialisieren → Create oder Edit
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
        pending_key: recipe ? null : pendingKey, // <-- bei Edit KEIN pending_key
        primary_media_id: recipe?.media?.find((m: any) => m?.pivot?.is_primary)?.id ?? null,
        recipe_ingredients:
            recipe?.ingredients?.map((i) => ({
                ingredient_id: i.id!,
                quantity: i.pivot?.quantity ?? '',
                unit: i.pivot?.unit ?? 'gr',
            })) ?? [],
    });

    // Zutaten-Helpers
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

    // Step 1 Validierung
    const canNextFromStep1 = (() => {
        if ((data.name?.trim()?.length ?? 0) < 3) return false;
        if ((data.description?.trim()?.length ?? 0) < 10) return false;
        return true;
    })();

    const handleStepChange = (newStep: number) => {
        setStep(newStep);
        setTimeout(scrollToTop, 50); // minimaler Delay, damit DOM updatet
    };

    // Submit Handler → unterscheidet Create vs Edit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!recipe) {
            // Create
            post(route('recipes.store'), {
                forceFormData: true,
                onSuccess: () => reset(),
                preserveScroll: true,
            });
        } else {
            // Edit → Method Spoofing
            router.post(
                route('recipes.update', { recipe: recipe.id }),
                {
                    ...data,
                    _method: 'put',
                },
                {
                    forceFormData: true,
                    onSuccess: () => reset(),
                    preserveScroll: true,
                },
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className={cn('flex flex-col', className)}>
            {/* Progress Bar */}
            <ol className="flex items-center justify-between text-sm">
                <li
                    className={cn(
                        'flex-1',
                        step >= 1 ? 'font-semibold text-primary' : 'text-slate-400',
                    )}
                >
                    1 · Basics
                </li>
                <li
                    className={cn(
                        'flex-1 text-center',
                        step >= 2 ? 'font-semibold text-primary' : 'text-slate-400',
                    )}
                >
                    2 · Zutaten
                </li>
                <li
                    className={cn(
                        'flex-1 text-right',
                        step >= 3 ? 'font-semibold text-primary' : 'text-slate-400',
                    )}
                >
                    3 · Bilder & Abschluss
                </li>
            </ol>
            <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
            {!canNextFromStep1 && (
                <div
                    className="border border-sky-400 bg-sky-200 text-sm text-sky-700 px-4 py-3 mb-4 rounded relative"
                    role="alert"
                >
                    <p className="text-sm">
                        Bitte bei Name mindestens 3 Zeichen und Beschreibung mindestens 10 Zeichen
                        ausfüllen.
                    </p>
                </div>
            )}
            {/* STEP 1: Basics */}
            {step === 1 && (
                <section className="space-y-4">
                    {/* Name */}
                    <div>
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
                    <div>
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
                    <div>
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

                    {/* Zahlenfelder: Zeit, Rating, Difficulty */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                onValueChange={(value) => setData('preparation_time', value[0])}
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
                    <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
                    <div className="flex justify-between gap-2">
                        <Button
                            asChild
                            type="button"
                            variant="primaryOutline"
                            
                            disabled={!canNextFromStep1}
                        >
                            <Link href={route('recipes.index')}>Abbrechen</Link>
                        </Button>
                        
                        
                        <Button
                            type="button"
                            variant="primaryOutline"
                            onClick={() => handleStepChange(2)}
                            disabled={!canNextFromStep1}
                        >
                            Weiter
                        </Button>
                    </div>
                </section>
            )}

            {/* STEP 2: Zutaten */}
            {step === 2 && (
                <section className="space-y-4">
                    <InputLabel htmlFor="ingredients" value="Zutatenliste bearbeiten" />
                    {data.recipe_ingredients?.map((di, idx) => (
                        <div
                            key={idx}
                            className="flex flex-row justify-between gap-2 items-start mb-3"
                        >
                            <div className="asd">
                                <TextInput
                                    placeholder="Menge"
                                    value={di.quantity}
                                    className="asd"
                                    type="number"
                                    onChange={(e) => updateIngredient(idx, 'quantity', e.target.value)}
                                />

                                <Select
                                    value={di.unit}
                                    onValueChange={(value) => updateIngredient(idx, 'unit', value)}
                                >
                                    <SelectTrigger className="asd mt-1 py-2">
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
                            </div>

                            <div className="asda">
                                <IngredientComboBox
                                    options={ingredients}
                                    value={di.ingredient_id}
                                    triggerClassName="asd mt-1"
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
                        </div>
                    ))}

                    <Button type="button" onClick={addIngredient} className="hover:cursor-pointer">
                        <GoPlus /> Zutat hinzufügen
                    </Button>
                    <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
                    <div className="flex justify-between gap-2">
                        <Button type="button" variant="primaryOutline" onClick={() => handleStepChange(1)}>
                            Zurück
                        </Button>
                        <Button type="button" variant="primaryOutline" onClick={() => handleStepChange(3)}>
                            Weiter
                        </Button>
                    </div>
                </section>
            )}

            {/* STEP 3: Bilder & Abschluss */}
            {step === 3 && (
                <section className="space-y-5">
                    {/* Uploader */}
                    <div className="w-full space-y-3">
                        <InputLabel htmlFor="mediaUpload" value="Bilder hochladen" />
                        <RecipeMediaUploader
                            recipeId={recipe?.id}
                            pendingKey={!recipe ? pendingKey : undefined}
                            onUploadedJSON={(m) => {
                                if (!recipe) {
                                    setPendingMedia((prev) => [...prev, m]);
                                } else {
                                    setLiveMedia((prev) => [...prev, m]);
                                }
                                if (!data.primary_media_id)
                                    setData('primary_media_id', m.id as any);
                            }}
                        />
                    </div>

                    {/* Vorschau */}
                    <div className="w-full space-y-3">
                        <InputLabel htmlFor="media" value="Bilder zum Gericht" />
                        <div className="flex flex-wrap gap-3">
                            {(recipe ? liveMedia : pendingMedia).length > 0 ? (
                                (recipe ? liveMedia : pendingMedia).map((m) => (
                                    <label
                                        key={m.id}
                                        className="relative w-48 rounded-lg aspect-video border overflow-hidden bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src={m.url ?? `/storage/${m.path}`}
                                            alt={m.name}
                                            className=" object-cover"
                                        />
                                        <input
                                            type="radio"
                                            name="primary_media_id"
                                            value={m.id}
                                            checked={data.primary_media_id === (m.id as any)}
                                            onChange={() =>
                                                setData('primary_media_id', m.id as any)
                                            }
                                            className="absolute top-1 left-1"
                                            title="Als Hauptbild auswählen"
                                        />
                                        {data.primary_media_id === m.id && (
                                            <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white px-1 rounded">
                                                Aktuell
                                            </span>
                                        )}
                                    </label>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">
                                    Noch keine Bilder vorhanden.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Zubereitung */}
                    <div className="w-full space-y-3">
                        <InputLabel
                            htmlFor="preparation_instructions"
                            value="Zubereitung, so geht's…"
                        />
                        <Textarea
                            id="preparation_instructions"
                            value={data.preparation_instructions}
                            rows={5}
                            placeholder="Beschreibung der Zubereitung"
                            className="mt-1 w-full rounded-lg border border-gray-400 px-3 py-2"
                            onChange={(e) => setData('preparation_instructions', e.target.value)}
                        />
                        {errors.preparation_instructions && (
                            <p className="text-red-500">{errors.preparation_instructions}</p>
                        )}
                    </div>
                    <hr className="my-5 bg-gray-300 dark:bg-gray-700" />   
                    {/* Submit */}
                    <div className="flex justify-between gap-2">
                        <Button type="button" variant="primaryOutline" onClick={() => handleStepChange(2)}>
                            Zurück
                        </Button>
                        <Button type="submit" variant="primary" disabled={processing} className="w-48">
                            {recipe ? 'Speichern' : 'Erstellen'}
                        </Button>
                    </div>
                </section>
            )}
        </form>
    );
}


