
import { cn } from '@/lib/utils';

interface TitleBlockProps {
    icon?: React.ReactNode;
    title?: string;
    punchline?: string | React.ReactNode | JSX.Element | null;
    className?: string;
    children?: React.ReactNode;
}

/**
 * A component that displays a welcome message with a heart icon
 * and a subtitle asking if everything is alright.
 *
 * @returns {JSX.Element} The welcome box component.
 */
export default function TitleBlock({
    title = 'Willkommen',
    icon = null,
    punchline = 'Alles wird gut.',
    className,
    children,
}: TitleBlockProps) {
    return (
        <div className={cn("flex flex-col gap-2 items-center justify-center my-4 sm:my-6 md:my-8", className)}>
            {title && (
                <h2 className="flex gap-2 text-3xl font-roboto-condensed">{icon}{title}</h2>
            )}
            {punchline && (
                <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">{punchline}</h3>
            )}
            {children}
        </div>
    );
}
