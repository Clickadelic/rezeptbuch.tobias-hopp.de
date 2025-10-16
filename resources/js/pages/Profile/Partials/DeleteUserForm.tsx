import InputError from '@/components/forms/inputs/InputError';
import InputLabel from '@/components/forms/inputs/InputLabel';
import Modal from '@/components/reusables/Modal';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/forms/inputs/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

/**
 * Formular for deleting a user's profile.
 *
 * @param {{ className?: string }} - Optional CSS class name
 *
 * @returns {JSX.Element} - A JSX element representing the form
 */
export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Profil löschen
                </h2>

                <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">
                    Wenn dein Profil gelöscht wird, werden alle Deine Daten und Einstellungen
                    permanent gelöscht. Dies kann nicht wiederhergestellt werden.
                </p>
            </header>

            <Button variant="destructive" className="w-full" onClick={confirmUserDeletion}>
                Profil löschen
            </Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Möchtest Du Dein Profil wirklich löschen?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Wenn Dein Profil gelöscht wird, werden alle Deine Daten und Einstellungen
                        permanent gelöscht. Dies kann nicht wiederhergestellt werden. Bitte gib'
                        daher Dein Passwort ein um Dein Profil wirklich zu löschen.
                    </p>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Passwort" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Passwort"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={closeModal}>abbrechen</Button>

                        <Button className="ms-3" disabled={processing}>
                            Profil löschen
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
