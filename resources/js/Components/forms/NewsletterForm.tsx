import { useForm, Link } from '@inertiajs/react';
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import { Button } from '../ui/button';
export default function NewsletterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
    })
    return (
        <form className="flex flex-col justify-between items-start gap-2">
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" className="hidden" />
                <TextInput 
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Name"
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="w-full">
                <InputLabel value="E-Mail" className="hidden" />
                <TextInput 
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="E-Mail"
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <Button
                type="submit"
                className="w-full rounded bg-primary text-slate-100 hover:bg-primary"
            >
                Newsletter abonnieren
            </Button>
        </form>
    );
}