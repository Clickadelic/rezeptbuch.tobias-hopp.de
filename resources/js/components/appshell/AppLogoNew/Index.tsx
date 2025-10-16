import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

import './app-logo.css';

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

const AppLogoNew = ({ h1ClassName = '', className = '', href = '/', title = "Toby's Rezeptbuch" }: AppLogoNewProps) => {
    return (
        <h1 className={cn('text-white px-8 py-2 absolute top-0 h-20 z-20 rounded-bl-lg rounded-br-lg shadow-xl bg-gradient-to-b from-emerald-700 to-emerald-800 dark:from-gray-700 dark:to-gray-800', h1ClassName)}>
            <Link
                href={href}
                className={cn(
                    'app-logo-link flex gap-2 text-xl',
                    className,
                )}
                title={title}
            >
            Rezeptbuch
            </Link>
        </h1>
    );
};

export default AppLogoNew;
