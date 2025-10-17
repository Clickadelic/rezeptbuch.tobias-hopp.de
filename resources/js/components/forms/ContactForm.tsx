import { useState, useRef, FormEvent, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

import InputLabel from '@/components/forms/inputs/InputLabel';
import TextInput from '@/components/forms/inputs/TextInput';
import InputError from '@/components/forms/inputs/InputError';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { GoArrowLeft, GoArrowRight, GoPencil, GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { TbCancel, TbNumber1, TbNumber2, TbNumber3 } from 'react-icons/tb';

import Seperator from '../reusables/Seperator';
import logoSrc from '../../../images/svg/tom_Cheese_Board.svg';
import { cn } from '@/lib/utils';

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
    const [formSubmission, setFormSubmission] = useState<FormEvent<HTMLFormElement> | null>(null);

    const { data, setData, post, errors, reset, processing } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Submit Handler → unterscheidet Create vs Edit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('contact.store'), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="w-72 mt-2 text-2xl text-gray-600 font-la-belle-aurore mb-3">
                        War lecker?
                    </p>
                    <p className="w-72 text-xl text-gray-600 font-la-belle-aurore">
                        Schreib' mir gerne ein Feedback.
                    </p>
                </div>
                <img
                    src={logoSrc}
                    className="opacity-30 w-48 my-6 ml-auto"
                    alt="Chef Tobias Logo"
                />
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
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Dein Name" />
                    <TextInput
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder="Wie darf ich Dich ansprechen?"
                        className="w-full"
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                {/* Beschreibung */}
                <div>
                    <InputLabel htmlFor="message" value="Dein Feedback" />
                    <Textarea
                        value={data.message}
                        rows={5}
                        placeholder="Hi, melde mich, da.."
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2"
                        onChange={(e) => setData('message', e.target.value)}
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" className="mt-4" disabled={processing}>
                    Feedback Senden
                </Button>
            </form>
        </>
    );
}
