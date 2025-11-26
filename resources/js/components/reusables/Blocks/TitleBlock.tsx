
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
    punchline,
    className,
    children,
}: TitleBlockProps) {
    return (
        <div className={cn("flex flex-col gap-1 items-center justify-center mb-8", className)}>
            {title && (
                <h2 className="flex gap-2 text-2xl">{icon}{title}</h2>
            )}
            {punchline && (
                <h3 className="text-xl text-gray-500 dark:text-gray-400 font-yellowtail">{punchline}</h3>
            )}
            {children}
        </div>
    );
}
