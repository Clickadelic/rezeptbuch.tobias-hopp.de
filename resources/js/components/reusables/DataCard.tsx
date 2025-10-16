import { Recipe } from '@/types/Recipe';
import { IoIosTrendingUp, IoIosTrendingDown } from 'react-icons/io';
import { MdOutlineMobiledataOff } from 'react-icons/md';
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
export default function DataCard({
    icon,
    title,
    count,
    text
}: DataCardProps) {
    return (
        <div className="w-full flex flex-col justify-between text-gray-400 aspect-video border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
            <div className="w-full flex flex-col justify-start">

                
            </div>
        </div>
    );
}
