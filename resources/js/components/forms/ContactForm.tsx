import { useState, useRef, FormEvent, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

import InputLabel from '@/components/reusables/InputLabel';
import TextInput from '@/components/reusables/TextInput';
import InputError from '@/components/reusables/InputError';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { GoArrowLeft, GoArrowRight, GoPencil, GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { TbCancel, TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";

import { IngredientComboBox } from '@/components/forms/IngredientComboBox';
import { RecipeMediaUploader } from '@/components/forms/RecipeMediaUploader';
import CategoryGrid from '@/components/forms/CategoryGrid';

import { Recipe } from '@/types/Recipe';
import { UNITS } from '@/types/Units';
import { Category } from '@/types/Category';
import { Difficulty } from '@/types/Difficulty';

import { cn } from '@/lib/utils';
import Seperator from '../reusables/Seperator';

import logoSrc from '../../../images/svg/tom_Cheese_Board.svg';


interface ContactFormProps {

}

export default function ContactForm() {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [className, setClassName] = useState<string | null>(null);

    // useForm initialisieren → Create oder Edit
    const { data, setData, post, processing, errors, reset } = useForm({
        id: recipe?.id ?? null,
        name: recipe?.name ?? '',
        slug: recipe?.slug ?? '',
        punchline: recipe?.punchline ?? '',
        description: recipe?.description ?? '',

    });
    



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
        <> 
            <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="w-72 mt-2 text-2xl text-gray-600 font-la-belle-aurore mb-3">War lecker?</p>
                    <p className="w-72 text-xl text-gray-600 font-la-belle-aurore">Schreib' mir gerne ein Feedback.</p>
                </div>
                <img src={logoSrc} className="opacity-30 w-48 my-6 ml-auto" alt="Chef Tobias Logo" />
            </div>
            <form onSubmit={handleSubmit} className={cn('flex flex-col gap-5', className)}>
                {/* Name */}
                <div>
                    <InputLabel htmlFor="email" value="Deine E-Mail" />
                    <TextInput
                        id="email"
                        type="email"
                        value={data.email}
                        placeholder="max.mustermann@me.com"
                        className="w-full"
                        isFocused
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Dein Name" />
                    <TextInput
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder="Wie darf ich Dich ansprechen?"
                        className="w-full"
                        isFocused
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <Button type="submit" variant="primary" className="mt-4" disabled={processing}>
                    Feedback Senden
                </Button>
            </form>
        </>
    );
}


