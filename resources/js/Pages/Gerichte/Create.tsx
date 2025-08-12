import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Button } from '@/Components/ui/button';
import TextInput from '@/Components/TextInput';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // post(route('login'), {
        //     onFinish: () => reset('password'),
        // });
    };

    return (
        <SidebarLeftLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
            <Head title="Neues Gericht" />

            {status && (
                <div className="mb-4 text-sm font-medium text-emerald-00">
                    {status}
                </div>
            )}
            <p>Gib' Dein Gericht hier ein. Denke an eine passende, aussagekräftige Beschreibung der Zubereitung und der Zutaten.</p>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        placeholder="Reispfanne mit Gemüse"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="my-4 flex items-center justify-end">
                    <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                        Gericht erstellen
                    </Button>
                </div>
                
            </form>
        </SidebarLeftLayout>
    );
}
