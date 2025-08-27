import { useForm } from '@inertiajs/react';
import { Textarea } from '@/Components/ui/textarea';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { GoPlus } from 'react-icons/go';
import Dish from '@/types/Dish';
import { cn } from '@/lib/utils';

interface DishFormProps {
    className?: string;
    dish: Dish;
}

export default function DishForm({ className, dish }: DishFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: dish.name || '',
        subtitle: dish.subtitle || '',
        description: dish.description || '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/gerichte'); // Post Route, die dein Controller erwartet
    }

    return (
        <form onSubmit={submit} className={cn('space-y-3', className)}>
            <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 flex w-full"
                    placeholder="z.B. Ofengemüse mit Kartoffeln"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="subtitle" value="Untertitel" />
                <TextInput
                    id="subtitle"
                    type="text"
                    name="subtitle"
                    value={data.subtitle}
                    className="mt-1 flex w-full"
                    autoComplete="subtitle"
                    placeholder="z.B. lecker und frisch"
                    isFocused={true}
                    onChange={(e) => setData('subtitle', e.target.value)}
                />
                <InputError message={errors.subtitle} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="description" value="description" />
                <Textarea
                    id="description"
                    name="description"
                    value={data.name}
                    className="mt-1 flex w-full"
                    placeholder="Beschreibung"
                    rows={5}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="my-4 flex items-center justify-end">
                <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                    <GoPlus />
                    Neues Gericht
                </Button>
            </div>
        </form>
    );
}
