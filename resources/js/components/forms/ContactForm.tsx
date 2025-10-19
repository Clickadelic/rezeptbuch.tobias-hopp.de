import { useState, useRef, FormEvent, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

import InputLabel from '@/components/forms/inputs/InputLabel';
import TextInput from '@/components/forms/inputs/TextInput';
import InputError from '@/components/forms/inputs/InputError';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { cn } from '@/lib/utils';

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {

    const { data, setData, post, errors, reset, processing } = useForm({
        name: '',
        email: '',
        message: '',
    });

    // Submit Handler → unterscheidet Create vs Edit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact-submissions.store'), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={handleSubmit} className={cn('flex flex-col gap-5', className)}>
            {/* Name */}
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
            {/* Email */}
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
            {/* Beschreibung */}
            <div>
                <InputLabel htmlFor="message" value="Deine Nachricht" />
                <Textarea
                    value={data.message}
                    rows={5}
                    placeholder="Hi,..."
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2"
                    onChange={(e) => setData('message', e.target.value)}
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
            <Button type="submit" variant="primary" className="mt-4" disabled={processing}>
                Nachricht Senden
            </Button>
        </form>
    );
}
