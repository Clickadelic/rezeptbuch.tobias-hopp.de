import { Link } from '@inertiajs/react';

import { cn } from '@/lib/utils';

interface AppLogoNewProps {
    h1ClassName?: string;
    className?: string;
    href?: string;
    title?: string;
}

/**
 * Renders the application logo as a heading element containing a link.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.h1ClassName] - Additional CSS classes to apply to the link element.
 * @param {string} [props.className] - Additional CSS classes to apply to the link element.
 * @param {string} [props.href='/'] - URL to navigate to when the logo is clicked.
 * @param {string} [props.title='Toby\'s Rezeptbuch'] - Title attribute for the link element.
 *
 * @returns {JSX.Element} The rendered application logo component.
 */

const AppLogoNew = ({
    h1ClassName = '',
    className = '',
    href = '/',
    title = "Toby's Rezeptbuch",
}: AppLogoNewProps) => {
    return (
        <h1 className={cn('app-logo', h1ClassName)}>
            <Link
                href={href}
                className={cn(
                    'flex flex-row justify-between gap-1 sm:gap-2 text-primary hover:text-emerald-600 max-w-[180px]',
                    className,
                )}
                title={title}
            >
                <span className="mb-0 text-2xl font-light leading-snug font-la-belle-aurore mt-[1px]">
                    Rezeptbuch
                </span>
            </Link>
        </h1>
    );
};

export default AppLogoNew;
