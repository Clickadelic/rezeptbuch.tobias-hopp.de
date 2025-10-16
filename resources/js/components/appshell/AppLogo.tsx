import { Link } from '@inertiajs/react';
import { BsBookmarkHeart } from 'react-icons/bs';

import { cn } from '@/lib/utils';

interface AppLogoProps {
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

const AppLogo = ({
    h1ClassName = '',
    className = '',
    href = '/',
    title = "Toby's Rezeptbuch",
}: AppLogoProps) => {
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
                    Toby's
                </span>
                <span className="mb-0 text-xl font-medium leading-snug font-roboto-condensed">
                    Rezeptbuch
                </span>
            </Link>
        </h1>
        // <div className="absolute top-0 h-[4.5rem] flex gap-4 rounded-bl-lg rounded-br-lg z-50 p-4 text-xl text-white dark:text-gray-800 bg-emerald-800">
        //     <h1 className="flex items-center gap-2"><Link href="/" title="Zur Startseite"><span className="font-la-belle-aurore inline-flex mt-1">Toby's</span><span className="font-medium">Rezeptbuch</span></Link></h1>
        // </div>
    );
};

export default AppLogo;
