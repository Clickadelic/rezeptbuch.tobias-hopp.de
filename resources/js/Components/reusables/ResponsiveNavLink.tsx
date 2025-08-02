import { InertiaLinkProps, Link } from '@inertiajs/react';

/**
 * A responsive navigation link component that uses the Inertia Link component.
 * @param {boolean} active - Whether the link is active or not. Default is false.
 * @param {string} className - Additional classnames to add to the link.
 * @param {React.ReactNode} children - The link text.
 * @param {InertiaLinkProps} props - Any additional props to pass to the Inertia Link component.
 * @returns {React.ReactElement}
 */
export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
