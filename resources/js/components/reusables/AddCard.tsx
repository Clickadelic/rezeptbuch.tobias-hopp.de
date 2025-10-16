import { Recipe } from '@/types/Recipe';
import { IoIosTrendingUp, IoIosTrendingDown } from 'react-icons/io';
import { MdOutlineMobiledataOff } from 'react-icons/md';

import { Link, router } from '@inertiajs/react';




interface DataCardProps {
    icon?: React.ReactNode;
    title?: string;
    text?: string;
    children?: React.ReactNode;
    count?: number;
}

/**
 * Displays a single data card.
 *
 * @param {DataCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 * @description
 * This component displays a single data card with an icon, title, count, count, and increase.
 * The design is based on the Tailwind CSS utility-first classes.
 */
export default function AddCard({
    icon,
    title,
    count,
    text
}: DataCardProps) {
    return (
        <Link className="w-full" href={route('recipes.create')}>
            <div className="w-full flex flex-col justify-center shadow-none animate ease-in transform translate-all hover:shadow-lg hover:border-primary text-gray-600 aspect-video border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-3 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                <div className="flex flex-col justify-center items-center gap-2">
                    <span>{icon}</span>
                    <span>{title}</span>
                </div>
                <div className="flex justify-between gap-2"><span className="mt-2">{text}</span><h4 className="font-medium text-2xl">{count}</h4></div>
            </div>
        </Link>
    );
}
