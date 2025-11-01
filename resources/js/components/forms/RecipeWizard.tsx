import { useState, useRef, FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import axios from 'axios';

import Seperator from '@/components/reusables/Seperator';

import InputLabel from '@/components/forms/inputs/InputLabel';
import TextInput from '@/components/forms/inputs/TextInput';

import UserStarRating from '@/components/forms/inputs/UserStarRating';
import StatusSelect from '@/components/forms/inputs/StatusSelect';
import CategorySelect from '@/components/forms/inputs/CategorySelect';
import DifficultySelect from '@/components/forms/inputs/DifficultySelect';

import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

import { GoArrowLeft, GoArrowRight, GoPencil, GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { TbCancel, TbNumber1, TbNumber2, TbNumber3 } from 'react-icons/tb';
import { SlRefresh } from 'react-icons/sl';
import { GiBroccoli } from "react-icons/gi";

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
        rating: Number(recipe?.rating ?? 0),
        preparation_time: Number(recipe?.preparation_time ?? 5),
        preparation_instructions: recipe?.preparation_instructions ?? '',
        pending_key: recipe ? undefined : pendingKey,
        primary_media_id: recipe?.media?.find((m: any) => m?.pivot?.is_primary)?.id ?? null,
        recipe_ingredients: Array.isArray(recipe?.ingredients)
            ? recipe.ingredients.map((i) => ({
                  ingredient_id: i.id!,
                  quantity: i.pivot?.quantity ?? '',
                  unit: i.pivot?.unit ?? 'cl',
              }))
            : [],
        category_id: recipe?.category_id,
    });

    // Zutaten-Helpers
    const addIngredient = () => {
        setData('recipe_ingredients', [
            ...data.recipe_ingredients,
            { ingredient_id: '', quantity: '1', unit: 'gr' },
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
        if (data.category_id === null || data.category_id === undefined) {
            return false;
        }

        // Prüfen ob Name mindestens 3 Zeichen hat
        if ((data.name?.trim()?.length ?? 0) < 3) {
            return false;
        }
        return true;
    })();

    const hasInvalidIngredient = data.recipe_ingredients.some(
        (i) => i.quantity && !i.ingredient_id
    );

    const handleStepChange = (newStep: number) => {
        setStep(newStep);
        setTimeout(scrollToTop, 50);
    };

    const handleRatingChange = (newRating: number) => {
        setData('rating', newRating);
    }

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

            {/* STEP 1: Basics */}
            {step === 1 && (

                <section className="space-y-5 mt-5">
                    <CategorySelect className="w-full max-w-xl mx-auto" selectedCategoryId={data.category_id} onChange={(id) => setData('category_id', id)} />
                    
                    {/* Name */}
                    <div className="w-full max-w-xl mx-auto flex flex-col">
                        <InputLabel
                            htmlFor="name"
                            value="Rezeptname"
                            description="Pflichtfeld - das Rezept benötigt einen Namen."
                        />

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

                    {/* Slug */}
                    {recipe && (
                        <div className="w-full max-w-xl mx-auto flex flex-col">
                            <InputLabel
                                htmlFor="slug"
                                value="Slug"
                                description="Pflichtfeld - die URL-Schreibweise für den Link."
                            />
                            <InputGroup className="py-6 bg-gray-100 dark:bg-gray-900">
                                <InputGroupAddon>
                                    <InputGroupText className="">https://rezeptbuch.tobias-hopp.de/rezepte/</InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput className="!pl-0.5 !text-lg" id="slug"
                                        type="text"
                                        value={`${data.slug || recipe.slug}`}
                                        placeholder="nudeln-mit-sauce"
                                        onChange={(e) => setData('slug', e.target.value)} />
                            </InputGroup>
                            {errors.slug && <p className="text-rose-700 mt-1">{errors.slug}</p>}
                        </div>
                    )}

                    <div className="w-full max-w-xl mx-auto flex flex-col gap-5">
                        <div>
                            <InputLabel htmlFor="difficulty" value="Schwierigkeitsgrad" description="Wähle wie aufwendig bzw. schwierig das Rezept ist." />
                            <DifficultySelect selectedDifficulty={data.difficulty} onChange={(difficulty: string) => setData('difficulty', difficulty)} />
                            {errors.difficulty && (
                                <p className="text-red-500 text-sm mt-1">{errors.difficulty}</p>
                            )}
                        </div>
                        <div>
                            <InputLabel htmlFor="react-select-4-input" value="Status" description="Du kannst das Rezept als Entwurf speichern und später veröffentlichen."  />
                            <StatusSelect selectedStatus={data.status} onChange={(status: string) => setData('status', status)} />
                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                            )}
                        </div>
                    </div>

                    {/* Vorbereitungszeit */}
                    <div className="w-full max-w-xl mx-auto">
                        <InputLabel htmlFor="preparation_time" value="Vorbereitungszeit" description="Wie lange dauert die Vorbereitung in etwa?" />
                        <div className="w-full flex flex-col xl:flex-row gap-5 mb-3 sm:mb-0">
                            <div className="flex justify-end items-end">
                                <span className="w-12 px-3 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary placeholder:text-gray-600 dark:placeholder:text-gray-600 mt-1 rounded-none border-r-0 rounded-tl rounded-bl">
                                    {data.preparation_time}
                                </span>
                                <span className="bg-gray-100 px-3 py-2 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary placeholder:text-gray-600 dark:placeholder:text-gray-600 w-24 mt-1 rounded-none border-l-0 rounded-tr rounded-br">
                                    Minuten
                                </span>
                            </div>
                            <Slider
                                defaultValue={[data.preparation_time]}
                                max={240}
                                step={5}
                                id="preparation_time"
                                className="w-full mt-1 hover:cursor-pointer"
                                onValueChange={(value) => setData('preparation_time', value[0])}
                            />
                        </div>
                        {errors.preparation_time && (
                            <p className="text-rose-700">{errors.preparation_time}</p>
                        )}
                    </div>
                    
                    <div className="w-full max-w-xl mx-auto flex flex-col">
                        <InputLabel htmlFor="punchline" value="Punchline" description="Kleine Schlagzeile, die das Rezept gut beschreibt." />
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

                    <div className="w-full max-w-xl mx-auto">
                        <InputLabel htmlFor="description" value="Kurze Beschreibung" description="Ein kurzer Beschreibungstext der Lust darauf macht, das Gericht zu kochen." />
                        <Textarea
                            value={data.description}
                            rows={5}
                            placeholder="z.B. Schnell und lecker für die ganze Familie..."
                            className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 dark:bg-gray-900 px-3 py-2"
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
                            variant="primary"
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
                <section className="space-y-5 mt-5">
                    <div className="w-full max-w-xl mx-auto">
                        <InputLabel htmlFor="ingredient-*-input" value="Zutaten bearbeiten" />
                        {data.recipe_ingredients?.map((di, idx) => (
                            <div
                                id={'ingredient-' + idx + '-input'}
                                key={idx}
                                className="flex flex-col md:flex-row gap-1 md:gap-2 md:mb-2"
                            >
                                <div className="flex justify-start items-start gap-2">
                                    <TextInput
                                        placeholder="Menge"
                                        value={di.quantity}
                                        className="font-medium w-full md:w-20 py-[5px] mt-1"
                                        type="number"
                                        onChange={(e) =>
                                            updateIngredient(idx, 'quantity', e.target.value)
                                        }
                                    />
                                    <Select
                                        value={di.unit}
                                        onValueChange={(value) =>
                                            updateIngredient(idx, 'unit', value)
                                        }
                                    >
                                        <SelectTrigger className="w-full rounded-sm sm:w-20 cursor-pointer mt-1 py-.5 shadow-none border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:border-primary focus:ring-primary">
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
                                <div className="w-full flex gap-2">
                                    <IngredientComboBox
                                        value={di.ingredient_id}
                                        triggerClassName="w-full mt-1 shadow-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary focus:ring-primary"
                                        onChange={(val) =>
                                            updateIngredient(idx, 'ingredient_id', val)
                                        }
                                    />
                                    <Button
                                        variant="danger"
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
                        <div className="flex flex-col sm:flex-row gap-1 justify-between">
                            <Button
                                type="button"
                                variant="primary"
                                onClick={addIngredient}
                                className="mt-5 hover:cursor-pointer hover:bg-emerald-700"
                            >
                                <GoPlus /> Zutat hinzufügen
                            </Button>
                            
                            {data.category_id != 4 && (
                                <div>
                                    <InputLabel htmlFor="is_veggy" className="sr-only" value="vegetarisch" />
                                    <div className="flex items-start mt-3 md:mt-5 justify-start gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-[8px] rounded">
                                        <GiBroccoli className="size-4 text-primary" />
                                        <label htmlFor="is_veggy" className="text-sm text-gray-800 dark:text-gray-200">
                                            Rezept ist vegetarisch
                                        </label>
                                        <Switch
                                            className="mx-1 hover:cursor-pointer data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
                                            checked={data.is_veggy}
                                            onCheckedChange={(checked) =>
                                                setData('is_veggy', checked as boolean)
                                            }
                                        />
                                    </div>
                                </div> 
                            )}
                            
                            {/* Alle Zutaten löschen */}
                            <Button
                                type="button"
                                variant="danger"
                                disabled={!data.recipe_ingredients?.length}
                                className="mt-3 md:mt-5 hover:cursor-pointer"
                                onClick={() => {
                                    if (confirm('Alle Zutaten wirklich löschen?')) {
                                        setData('recipe_ingredients', []);
                                    }
                                }}
                            >
                                <BsTrash3 className="mr-1" />
                                Alle Zutaten löschen
                            </Button>
                            
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-8">
                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => handleStepChange(1)}
                        >
                            <GoArrowLeft className="ml-1" />
                            Zurück
                        </Button>
                        
                        <Button
                            type="button"
                            variant={data.recipe_ingredients?.length >= 1 ? 'primary' : 'primaryOutline'}
                            onClick={() => {
                                const hasInvalid = data.recipe_ingredients.some(
                                    (i) => i.quantity && !i.ingredient_id
                                );

                                if (hasInvalid) {
                                    alert('Keine Zutat ausgewählt, nur Menge angegeben.');
                                    return;
                                }

                                handleStepChange(3);
                            }}
                        >
                            Weiter
                            <GoArrowRight className="ml-1" />
                        </Button>
                    </div>
                </section>
            )}

            {/* STEP 3: Bilder & Abschluss */}
            {step === 3 && (
                <section className="space-y-5 mt-5">
                    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-start sm:gap-4">
                        {/* Uploader */}
                        <div className="space-y-3">
                            <InputLabel htmlFor="mediaUpload" value="Vorschaubild" description="Das Bild wird als Vorschau angezeigt." />
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
                        <div className="space-y-2 pt-5 sm:pt-2">
                            <InputLabel
                                htmlFor="media"
                                value="Vorschau der hochgeladenen Bilder"
                                className="sr-only"
                            />
                            <div className="flex flex-wrap gap-3 justify-center items-center">
                                {(recipe ? liveMedia : pendingMedia).length > 0 ? (
                                    (recipe ? liveMedia : pendingMedia).map((m) => (
                                        <label
                                            key={m.id}
                                            className="mt-1 relative w-full max-w-72 rounded-lg aspect-video border overflow-hidden bg-gray-100 cursor-pointer"
                                        >
                                            {' '}
                                            {/* TODO: Pfade alle zusammenfassen bzw. grade biegen zu Storage */}
                                            <img
                                                src={`/storage/${m.path}`}
                                                alt={m.name}
                                                className="size-full object-cover"
                                            />
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="icon"
                                                className="absolute top-1 right-1 bg-rose-700 hover:bg-rose-800 rounded"
                                                onClick={() => {
                                                    if (!confirm('Möchtest du dieses Bild löschen?'))
                                                        return;

                                                    if (recipe) {
                                                        // Falls schon in DB
                                                        axios.delete(`/upload/${m.id}`).then(() => {
                                                            setLiveMedia((prev) =>
                                                                prev.filter((x) => x.id !== m.id),
                                                            );
                                                        });
                                                    } else {
                                                        // Nur lokal pending
                                                        setPendingMedia((prev) =>
                                                            prev.filter((x) => x.id !== m.id),
                                                        );
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
                                    <div className="border-2 border-dashed border-gray-400 hover:cursor-not-allowed dark:border-gray-600 rounded-lg w-full max-w-64 flex items-center justify-center aspect-video">
                                        <p className="text-xs text-gray-500 text-center w-72">
                                            Noch kein Bild vorhanden.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Zubereitung */}
                    <div className="w-full max-w-xl mx-auto space-y-3">
                        <InputLabel
                            htmlFor="preparation_instructions"
                            value="Zubereitung, so geht's…"
                            description="Die einzelnen Schritte zur Zubereitung des Rezeptes."
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
                    
                    <div className="w-full max-w-xl mx-auto space-y-3">
                        <InputLabel
                            htmlFor="rating"
                            value="Deine Bewertung des Rezeptes"
                            description="Welche Bewertung gibtst Du dem Rezept? Bitte wählen."
                        />
                        <UserStarRating rating={data.rating} onRatingChange={handleRatingChange} className="my-5" />
                    </div>

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
