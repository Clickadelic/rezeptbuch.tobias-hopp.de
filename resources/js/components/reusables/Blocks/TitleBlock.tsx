import { FaRegHeart } from 'react-icons/fa6';

interface TitleBlockProps {
    icon?: React.ReactNode;
    title?: string;
    punchline?: string;
}

/**
 * A component that displays a welcome message with a heart icon
 * and a subtitle asking if everything is alright.
 *
 * @returns {JSX.Element} The welcome box component.
 */
export default function TitleBlock({
    icon = <FaRegHeart className="text-primary size-6 mt-1" />,
    title = 'Willkommen',
    punchline = 'Alles wird gut.',
}: TitleBlockProps) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center my-4 sm:my-6 md:my-8">
            <h2 className="flex gap-2 text-3xl font-roboto-condensed">
                {icon}
                {title}
            </h2>
            <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                {punchline}
            </h3>
        </div>
    );
}
