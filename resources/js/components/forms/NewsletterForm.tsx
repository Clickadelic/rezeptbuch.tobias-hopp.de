import { useForm } from '@inertiajs/react';

import TextInput from '@/components/reusables/TextInput';
import InputError from '@/components/reusables/InputError';
import InputLabel from '@/components/reusables/InputLabel';
import { Button } from '@/components/ui/button';

/**
 * NewsletterForm
 *
 * Form for subscribing to the newsletter
 *
 * @return {JSX.Element} JSX element
 */
export default function NewsletterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
    });
    return (
        <form className="flex flex-col justify-between items-start gap-3">
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" className="text-gray-100 dark:text-gray-200" />
                <TextInput
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border-stone-100 dark:bg-stone-800 dark:placeholder:text-stone-500 dark:border-stone-600"
                    autoComplete="name"
                    placeholder="Name"
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="w-full">
                <InputLabel htmlFor="email" value="E-Mail" className="text-gray-100 dark:text-gray-200" />
                <TextInput
                    type="text"
                    name="email"
                    id="email"
                    className="w-full border-stone-100 dark:bg-stone-800 dark:placeholder:text-stone-500 dark:border-stone-600"
                    autoComplete="e-mail"
                    placeholder="E-Mail"
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <Button
                type="submit"
                className="w-full bg-primary text-gray-100 hover:bg-primary"
            >
                Newsletter abonnieren
            </Button>
        </form>
    );
}
