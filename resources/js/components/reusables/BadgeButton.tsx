import { usePage, useForm, router } from '@inertiajs/react';
import { useState, FormEvent } from 'react';

import { Ingredient } from '@/types/Ingredient';
import { SlClose } from 'react-icons/sl';
import { MdOutlineEdit } from 'react-icons/md';

interface BadgeButtonProps {
    ingredient: Ingredient;
}

export default function BadgeButton<SharedPageProps>({ ingredient }: BadgeButtonProps) {
    const [isEditing, setIsEditing] = useState(false);

    const { props } = usePage();
    const { auth } = props;
    const { reset } = useForm();

    /**
     * Deletes the given ingredient.
     * @param {Ingredient} ingredient The ingredient to be deleted.
     */
    const onDelete = () => {
        router.delete(route('ingredients.destroy', { ingredient: ingredient.id }), {
            onSuccess: () => reset(),
            preserveScroll: true,
            forceFormData: true,
        });
    };

    return (
        <div className="inline-flex items-center rounded-md px-2 py-1 gap-2 bg-primary font-semibold text-white border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <span className="group-hover:bg-rose-500 group-hover:border-rose-500 inline-flex whitespace-nowrap text-xs">
                {ingredient.name}
            </span>
                {auth.user && (
                <>
                    <button
                        className="group-hover:text-gray-300 hover:text-gray-300 hover:cursor-pointer"
                        title="Zutat bearbeiten"
                        aria-label="Zutat bearbeiten"
                    >
                        <MdOutlineEdit className="size-3" />
                    </button>

                    <button
                        className="group-hover:text-rose-600 hover:text-rose-600 hover:cursor-pointer"
                        title="Zutat entfernen"
                        aria-label="Zutat entfernen"
                        onClick={onDelete}
                    >
                        <SlClose className="size-3" />
                    </button>
                </>
            )}
        </div>
    );
}
