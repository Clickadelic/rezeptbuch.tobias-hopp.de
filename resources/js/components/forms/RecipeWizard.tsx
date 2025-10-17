import { useState, useRef, FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

import InputLabel from '@/components/forms/inputs/InputLabel';
import TextInput from '@/components/forms/inputs/TextInput';
import axios from 'axios';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { Switch } from "@/components/ui/switch";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { GoArrowLeft, GoArrowRight, GoPencil, GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { TbCancel, TbNumber1, TbNumber2, TbNumber3 } from 'react-icons/tb';
import { SlRefresh } from "react-icons/sl";
import { ImSpinner10 } from "react-icons/im";
import Seperator from '@/components/reusables/Seperator';
import CategoryGrid from '@/components/forms/CategoryToggle';
import { IngredientComboBox } from '@/components/forms/IngredientComboBox';
import { RecipeMediaUploader } from '@/components/forms/RecipeMediaUploader';

import { Recipe } from '@/types/Recipe';
import { UNITS } from '@/types/Units';
import { Difficulty } from '@/types/Difficulty';
import { Media } from '@/types/Media';
import { cn } from '@/lib/utils';

interface RecipeIngredientData {
    ingredient_id: string;
    quantity: string;
    unit: string;
}

interface RecipeWizardProps {
    recipe?: Recipe;
    className?: string;
}

export default function RecipeWizard({ recipe, className }: RecipeWizardProps) {
    const [step, setStep] = useState<number>(1);
    const formRef = useRef<HTMLFormElement>(null);

    /**
     * Smoothly scrolls the window to the top of the form.
     * @returns {void}
     */
    const scrollToTop = () => {
        if (formRef.current) {
            const top = formRef.current.getBoundingClientRect().top + window.scrollY - 20; // 20px Puffer
            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        }
    };

    // Pending key fuer Uploads vor dem Speichern (nur Create)
    const [pendingKey] = useState<string>(() =>
        typeof crypto !== 'undefined' && (crypto as any).randomUUID
            ? (crypto as any).randomUUID()
            : Math.random().toString(36).slice(2),
    );

    // Neue Bilder, die in diesem Durchlauf hochgeladen werden
    const [pendingMedia, setPendingMedia] = useState<Partial<Media>[]>([]);

    // Bereits gespeicherte Bilder (nur Edit)
    const [liveMedia, setLiveMedia] = useState<Array<any>>(recipe?.media ?? []);

    // useForm initialisieren → Create oder Edit
    const { data, setData, post, processing, errors, reset } = useForm({
        id: recipe?.id ?? null,
        name: recipe?.name ?? '',
        status: recipe?.status ?? 'draft',
        slug: recipe?.slug ?? '',
        punchline: recipe?.punchline ?? '',
        description: recipe?.description ?? '',
        difficulty: recipe?.difficulty ?? 'einfach',
        is_veggy: recipe?.is_veggy ?? false,
        rating: Number(recipe?.rating ?? 1),
        preparation_time: Number(recipe?.preparation_time ?? 15),
        preparation_instructions: recipe?.preparation_instructions ?? '',
        pending_key: recipe ? undefined : pendingKey,
        primary_media_id: recipe?.media?.find((m: any) => m?.pivot?.is_primary)?.id ?? null,
        recipe_ingredients:
            Array.isArray(recipe?.ingredients)
            ? recipe.ingredients.map((i) => ({
                ingredient_id: i.id!,
                quantity: i.pivot?.quantity ?? '',
                unit: i.pivot?.unit ?? 'gr',
            }))
            : [],
        category_id: recipe?.category_id,
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
        if (data.category_id === null) {
            return false;
        }

        // Prüfen ob Name mindestens 3 Zeichen hat
        if ((data.name?.trim()?.length ?? 0) < 3) {
            return false;
        }
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
                route('recipes.update', { recipe: recipe.slug }),
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
        <form onSubmit={handleSubmit} ref={formRef} className={cn('flex flex-col', className)}>
            {/* Progress Bar */}
            <ol className="flex justify-between items-center w-full space-y-4 sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-5">
                <li className="relative w-full mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 1 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                        <span
                            className={cn(
                                ' text-gray-600 dark:border-gray-600 dark:text-gray-600 rounded-full p-1',
                                step === 1
                                    ? 'bg-primary border-primary text-white dark:text-gray-200'
                                    : '',
                            )}
                        >
                            <TbNumber1 className="size-4" />
                        </span>
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 1 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                    </div>
                    <div className="hidden sm:block mt-0 sm:mt-5 sm:pe-8">
                        <h3
                            className={cn(
                                'text-center md:text-left text-xl text-gray-900 dark:text-white',
                                step === 1 ? 'text-primary' : '',
                            )}
                        >
                            Basics
                        </h3>
                        <p className="hidden lg:block  mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Name ist ein Pflichtfeld.
                        </p>
                    </div>
                </li>
                <li className="relative w-full mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 2 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                        <span
                            className={cn(
                                ' text-gray-600 dark:border-gray-600 dark:text-gray-600 rounded-full p-1',
                                step === 2 ? 'bg-primary text-white dark:text-gray-200' : '',
                            )}
                        >
                            <TbNumber2 className="size-4" />
                        </span>
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 2 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                    </div>
                    <div className="hidden sm:block mt-0 sm:mt-5 sm:pe-8">
                        <h3
                            className={cn(
                                'text-xl text-gray-900 dark:text-white',
                                step === 2 ? 'text-primary' : '',
                            )}
                        >
                            Zutaten
                        </h3>
                        <p className="hidden lg:block  mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Bearbeite die Zutatenliste.
                        </p>
                    </div>
                </li>
                <li className="relative w-full mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 3 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                        <span
                            className={cn(
                                ' text-gray-600 dark:border-gray-600 dark:text-gray-600 rounded-full p-1',
                                step === 3 ? 'bg-primary text-white dark:text-gray-200' : '',
                            )}
                        >
                            <TbNumber3 className="size-4" />
                        </span>
                        <div
                            className={cn(
                                'flex w-full bg-gray-200 h-0.5 dark:bg-gray-700',
                                step === 3 ? 'bg-primary dark:bg-primary' : '',
                            )}
                        ></div>
                    </div>
                    <div className="hidden sm:block mt-0 sm:mt-5 sm:pe-8">
                        <h3
                            className={cn(
                                'text-xl text-gray-900 dark:text-white',
                                step === 3 ? 'text-primary' : '',
                            )}
                        >
                            Details
                        </h3>
                        <p className="hidden lg:block  mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Bilder &amp; Zubereitung.
                        </p>
                    </div>
                </li>
            </ol>
            {!canNextFromStep1 && (
                <div
                    className="border border-sky-400 bg-sky-200 text-sm text-sky-700 px-4 py-3 mb-4 rounded relative"
                    role="alert"
                >
                    <p className="text-base">
                        Wähle eine Kategorie und gib einen Namen an um fortzufahren.
                    </p>
                </div>
            )}

            {/* STEP 1: Basics */}
            {step === 1 && (
                <section className="space-y-4">
                    {/* Name und Status */}
                    <div className="grid grid-cols-1 grid-rows-2 sm:flex sm:flex-end gap-3">
                        {/* Name */}
                        <div className="w-full">
                            <InputLabel htmlFor="name" value="Rezeptname" />
                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
                                placeholder="z.B. Ofengemüse mit Kartoffeln"
                                className="w-full"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        {/* Status */}
                        <div>
                            <InputLabel htmlFor="status" value="Status" />
                            <Select
                                name="status"
                                value={data.status}
                                onValueChange={(val) => setData('status', val)}
                            >
                                <SelectTrigger className="w-full sm:w-44 mt-1 py-.5 shadow-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary focus:ring-primary">
                                    <SelectValue placeholder="Status auswählen" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Entwurf</SelectItem>
                                    <SelectItem value="published">veröffentlicht</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                        </div>
                    </div>

                    {/* Kategorie */}
                    <div>
                        <CategoryGrid
                            selectedCategoryId={
                                recipe?.category_id ? Number(recipe.category_id) : undefined
                            }
                            onChange={(id) => setData('category_id', id)}
                        />
                    </div>
                    <Seperator style="mix" />

                    {/* Slug */}
                    {recipe && (
                        <div>
                            <InputLabel htmlFor="slug" value="URL / Slug" />
                            <div className="flex flex-col gap-1 mt-1">
                                <TextInput
                                    id="slug"
                                    type="text"
                                    value={`${data.slug || recipe.slug}`}
                                    placeholder="nudeln-mit-sauce"
                                    className="w-full"
                                    onChange={(e) => setData('slug', e.target.value)}
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Die URL kann hier geändert werden. Bitte nur Kleinbuchstaben, Bindestriche und keine Sonderzeichen verwenden.
                                </p>
                            </div>
                            {errors.slug && <p className="text-rose-500 mt-1">{errors.slug}</p>}
                        </div>
                    )}
                    
                    {/* Zahlenfelder: Zeit, Rating, Difficulty */}
                    <div className="grid grid-cols-2 grid-rows-1 lg:flex gap-4">
                        {/* Vegetarisch */}
                        <div className="mr-8">
                            <InputLabel htmlFor="is_veggy" value="Vegetarisches Rezept" />
                            <div className="flex items-center gap-2 mt-1">
                                <label htmlFor="is_veggy" className="mt-2">Nein</label>
                                <Switch className="mt-[6px] mx-4 hover:cursor-pointer data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700" checked={data.is_veggy} onCheckedChange={(checked) => setData('is_veggy', checked as boolean)} />
                                <label htmlFor="is_veggy" className="mt-2">Ja</label>
                            </div>
                        </div>
                        {/* Zubereitungszeit */}
                        <div>
                            <InputLabel htmlFor="preparation_time" value="Zubereitungszeit" />
                            <div className="flex flex-col xl:flex-row gap-5">
                                <div className="flex justify-end items-end">
                                    <span className="min-w-[50px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary py-[5px] px-3 placeholder:text-gray-600 dark:placeholder:text-gray-600 w-full mt-1 rounded-none border-r-0 rounded-tl rounded-bl">
                                        {data.preparation_time}
                                    </span>
                                    <span className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary py-[5px] px-3 placeholder:text-gray-600 dark:placeholder:text-gray-600 w-24 mt-1 rounded-none border-l-0 rounded-tr rounded-br">
                                        Minuten
                                    </span>
                                </div>
                                <Slider
                                    defaultValue={[data.preparation_time]}
                                    max={240}
                                    step={5}
                                    className="w-full sm:w-48 md:w-64 mt-2 hover:cursor-pointer"
                                    onValueChange={(value) => setData('preparation_time', value[0])}
                                />
                            </div>
                            {errors.preparation_time && (
                                <p className="text-rose-500">{errors.preparation_time}</p>
                            )}
                        </div>
                    </div>
                    <Seperator style="quote" />

                    {/* Punchline */}
                    <div className="grid grid-cols-1 grid-rows-2 sm:flex sm:flex-end gap-3">
                        <div className="w-full">
                            <InputLabel htmlFor="punchline" value="Punchline" />
                            <TextInput
                                id="punchline"
                                type="text"
                                value={data.punchline}
                                placeholder="z.B. Mediterran und frisch"
                                className="w-full"
                                onChange={(e) => setData('punchline', e.target.value)}
                            />
                            {errors.punchline && <p className="text-red-500">{errors.punchline}</p>}
                        </div>
                        {/* Schwierigkeitsgrad */}
                        <div>
                            <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" />
                            <Select
                                name="difficulty"
                                value={data.difficulty || Difficulty.EINFACH}
                                onValueChange={(val) => setData('difficulty', val as Difficulty)}
                            >
                                <SelectTrigger className="w-full sm:w-44 mt-1 py-.5 shadow-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
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

                    {/* Beschreibung */}
                    <div>
                        <InputLabel htmlFor="description" value="Kurze Beschreibung" />
                        <Textarea
                            value={data.description}
                            rows={5}
                            placeholder="z.B. Schnell und lecker für die ganze Familie..."
                            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2"
                            onChange={(e) => setData('description', e.target.value)}
                        />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>

                    <div className="flex justify-between gap-2 mt-8">
                        <Button
                            asChild
                            type="button"
                            variant="dangerOutline"
                            disabled={!canNextFromStep1}
                        >
                            <Link href={route('recipes.index')}>
                                <TbCancel className="mr-1" />
                                Abbrechen
                            </Link>
                        </Button>

                        <Button
                            type="button"
                            variant="primaryOutline"
                            onClick={() => handleStepChange(2)}
                            disabled={!canNextFromStep1}
                        >
                            Weiter
                            <GoArrowRight className="ml-1" />
                        </Button>
                    </div>
                </section>
            )}

            {/* STEP 2: Zutaten */}
            {step === 2 && (
                <section className="space-y-4">
                    <InputLabel htmlFor="ingredients" value="Zutaten bearbeiten" />
                    {data.recipe_ingredients?.map((di, idx) => (
                        <div key={idx} className="md:flex gap-2">
                            <div className="flex justify-start items-start gap-2">
                                <TextInput
                                    placeholder="Menge"
                                    value={di.quantity}
                                    className="font-medium w-full md:w-32 py-[5px] mt-1"
                                    type="number"
                                    onChange={(e) =>
                                        updateIngredient(idx, 'quantity', e.target.value)
                                    }
                                />
                                <Select
                                    value={di.unit}
                                    onValueChange={(value) => updateIngredient(idx, 'unit', value)}
                                >
                                    <SelectTrigger className="w-full sm:w-24 cursor-pointer mt-1 py-.5 shadow-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary focus:ring-primary">
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

                            <div className="md:w-full flex gap-2">
                                <IngredientComboBox
                                    value={di.ingredient_id}
                                    triggerClassName="w-full mt-1 shadow-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary focus:ring-primary"
                                    onChange={(val) => updateIngredient(idx, 'ingredient_id', val)}
                                />
                                <Button
                                    variant="destructive"
                                    className="mt-1.5 hover:cursor-pointer rounded-sm shadow-none"
                                    size="sm"
                                    type="button"
                                    onClick={() => removeIngredient(idx)}
                                >
                                    <BsTrash3 />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="primary"
                        onClick={addIngredient}
                        className="mt-5 hover:cursor-pointer hover:bg-emerald-700"
                    >
                        <GoPlus /> Zutat hinzufügen
                    </Button>
                    <div className="flex justify-between gap-2 mt-8">
                        <Button
                            type="button"
                            variant="primaryOutline"
                            onClick={() => handleStepChange(1)}
                        >
                            <GoArrowLeft className="ml-1" />
                            Zurück
                        </Button>
                        <Button
                            type="button"
                            variant="primaryOutline"
                            onClick={() => handleStepChange(3)}
                        >
                            Weiter
                            <GoArrowRight className="ml-1" />
                        </Button>
                    </div>
                </section>
            )}

            {/* STEP 3: Bilder & Abschluss */}
            {step === 3 && (
                <section className="space-y-4">
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
                    <Seperator style="image" />
                    {/* Vorschau */}
                    <div className="w-full space-y-3">
                        <InputLabel htmlFor="media" value="Vorschau der hochgeladenen Bilder" className="sr-only" />
                        <div className="flex flex-wrap gap-3 justify-center items-center">
                            {(recipe ? liveMedia : pendingMedia).length > 0 ? (
                                (recipe ? liveMedia : pendingMedia).map((m) => (
                                    <label
                                    key={m.id}
                                    className="relative w-full max-w-72 rounded-lg aspect-video border overflow-hidden bg-gray-100 cursor-pointer"
                                    >   {/* TODO: Pfade alle zusammenfassen bzw. grade biegen zu Storage */}
                                        <img
                                            src={`/storage/${m.path}`}
                                            alt={m.name}
                                            className=" object-cover"
                                            />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-1 right-1 bg-rose-600 hover:bg-rose-700 rounded"
                                            onClick={() => {
                                                if (!confirm('Möchtest du dieses Bild löschen?')) return;
                                                
                                                if (recipe) {
                                                    // Falls schon in DB
                                                    axios.delete(`/upload/${m.id}`).then(() => {
                                                        setLiveMedia((prev) => prev.filter((x) => x.id !== m.id));
                                                    });
                                                } else {
                                                    // Nur lokal pending
                                                    setPendingMedia((prev) => prev.filter((x) => x.id !== m.id));
                                                }
                                                
                                                if (data.primary_media_id === m.id) {
                                                    setData('primary_media_id', null);
                                                }
                                            }}
                                            >
                                            <BsTrash3 className="size-4" />
                                        </Button>
                                        <input
                                            type="radio"
                                            name="primary_media_id"
                                            value={m.id}
                                            checked={data.primary_media_id === (m.id as any)}
                                            onChange={() =>
                                                setData('primary_media_id', m.id as any)
                                            }
                                            className="absolute top-1 left-1 text-gray-200 dark:text-gray-800"
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
                                <div className="border-2 border-dotted border-gray-600 hover:cursor-not-allowed dark:border-gray-600 rounded-lg w-full max-w-72 flex items-center justify-center aspect-video">
                                    <p className="text-xs text-gray-500">
                                        Noch kein Bild vorhanden.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <Seperator style="info" />
                    {/* Zubereitung */}
                    <div className="w-full space-y-3">
                        <InputLabel
                            htmlFor="preparation_instructions"
                            value="Zubereitung, so geht's…"
                        />
                        <Textarea
                            id="preparation_instructions"
                            value={data.preparation_instructions}
                            rows={8}
                            placeholder="Beschreibung der Zubereitung"
                            className="mt-2 w-full rounded-lg border border-gray-400 shadow px-3 py-2"
                            onChange={(e) => setData('preparation_instructions', e.target.value)}
                        />
                        {errors.preparation_instructions && (
                            <p className="text-red-500">{errors.preparation_instructions}</p>
                        )}
                    </div>
                    <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
                    {/* Submit */}
                    <div className="flex justify-between gap-2">
                        <Button
                            type="button"
                            variant="primaryOutline"
                            onClick={() => handleStepChange(2)}
                        >
                            <GoArrowLeft className="ml-1" />
                            Zurück
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={processing}
                            className="w-48"
                        >
                            {recipe ? <SlRefresh /> : <GoPlus />}
                            {recipe ? 'Aktualisieren' : 'Erstellen'}
                        </Button>
                    </div>
                </section>
            )}
        </form>
    );
}
