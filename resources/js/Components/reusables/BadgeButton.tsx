import { Ingredient } from '@/types/Ingredient';
import { SlClose } from 'react-icons/sl';
import { MdOutlineEdit } from 'react-icons/md';

import { usePage } from '@inertiajs/react';



interface BadgeButtonProps {
    ingredient: Ingredient;
}

export default function BadgeButton({ ingredient }: BadgeButtonProps) {
    const { props } = usePage();
    const { auth } = props;
    const { user } = auth;

    return (
        <div className="inline-flex items-center rounded-md px-2 py-1 gap-2 bg-primary font-semibold text-white border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <span className="group-hover:bg-rose-500 group-hover:border-rose-500 inline-flex whitespace-nowrap text-xs">
                {ingredient.name}
            </span>
            {user && typeof user === 'object' && (
                user && (
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
                        >
                            <SlClose className="size-3" />
                        </button>
                    </>
                )
            )}
        </div>
    );
}
