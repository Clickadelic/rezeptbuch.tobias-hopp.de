import { useForm } from '@inertiajs/react';
import TextInput from '@/components/reusables/TextInput';
import InputError from '@/components/reusables/InputError';
import InputLabel from '@/components/reusables/InputLabel';
import { Button } from '../ui/button';

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
        <form className="flex flex-col justify-between items-start gap-2">
            <div className="w-full">
                <InputLabel htmlFor="name" value="Name" className="hidden" />
                <TextInput
                    type="text"
                    name="name"
                    id="name"
                    className="w-full"
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
                    className="w-full"
                    autoComplete="email"
                    placeholder="E-Mail"
                />
                <InputError message={errors.name} className="mt-2" />
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
