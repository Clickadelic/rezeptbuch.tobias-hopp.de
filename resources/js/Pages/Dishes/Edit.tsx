import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Button } from '@/Components/ui/button';
import TextInput from '@/Components/TextInput';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { toast } from 'sonner';
import { Link } from '@inertiajs/react';

interface EditDishProps {
    dish: {
        id: number;
        name: string;
        description: string;
    };
}

export default function EditDish({ dish }: EditDishProps) {
    const { flash } = usePage().props as { flash: { success?: string } };
    const { delete: destroy } = useForm();
    // useForm mit PUT-Unterstützung für Edit
    const { data, setData, put, processing, errors } = useForm({
        name: dish.name || '',
        description: dish.description || '',
    });

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('dishes.update', dish.id), {
            onSuccess: () => {
                toast.success('Gericht erfolgreich aktualisiert!');
            },
        });
    };

    return (
        <>
            <Head title="Gericht bearbeiten" />
            <SidebarLeftLayout title="Gericht bearbeiten" sidebar={<DishesSidebar />}>
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
                            className="mt-1 block w-full rounded border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 py-3 px-4"
                            rows={4}
                            placeholder="Zubereitung und Zutaten..."
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={processing}
                        >
                            Gericht bearbeiten
                        </Button>
                    </div>
                </form>
                <div>
                    <Link href={route('dishes.show', dish.id)}>{dish.name}</Link>
                    <Link href={route('dishes.edit', dish.id)}>edit</Link>
                    <button
                        onClick={() => destroy(route('dishes.destroy', dish.id))}
                        className="text-rose-600"
                    >
                        delete
                    </button>
                </div>
            </SidebarLeftLayout>
        </>
    );
}
