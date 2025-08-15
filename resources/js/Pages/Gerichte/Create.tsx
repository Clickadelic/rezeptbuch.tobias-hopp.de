import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Button } from '@/Components/ui/button';
import TextInput from '@/Components/TextInput';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { toast } from 'sonner';

export default function CreateDish() {
    const { flash } = usePage().props as { flash: { success?: string } };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        rating: ''
    });

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('dishes.store'), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <SidebarLeftLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
            <Head title="Neues Gericht" />

            <form onSubmit={submit} className="space-y-4">
                {/* Name */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="mt-1 block w-full"
                        placeholder="Reispfanne mit Gemüse"
                        autoFocus
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Beschreibung */}
                <div>
                    <InputLabel htmlFor="description" value="Beschreibung" />
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows={4}
                        placeholder="Zubereitung und Zutaten..."
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>

                {/* Bewertung */}
                <div>
                    <InputLabel htmlFor="rating" value="Bewertung (1–5)" />
                    <TextInput
                        id="rating"
                        type="number"
                        value={data.rating}
                        min="1"
                        max="5"
                        onChange={(e) => setData('rating', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                    >
                        Gericht erstellen
                    </Button>
                </div>
            </form>
        </SidebarLeftLayout>
    );
}
