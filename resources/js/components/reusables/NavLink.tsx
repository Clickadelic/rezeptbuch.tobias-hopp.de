import { InertiaLinkProps, Link } from '@inertiajs/react';

interface IconNavLinkProps extends InertiaLinkProps {
    icon?: React.ReactNode;
}

/**
 * A simple nav link component that uses the Inertia Link component.
 * @param {boolean} active - Whether the link is active or not.
 * @param {string} className - Additional classnames to add to the link.
 * @param {React.ReactNode} icon - An icon to display before the link text.
 * @param {React.ReactNode} children - The link text.
 * @param {InertiaLinkProps} props - Any additional props to pass to the Inertia Link component.
 * @returns {React.ReactElement}
 */
export default function NavLink({
    active = false,
    className = '',
    icon,
    children,
    ...props
}: IconNavLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'flex flex-row items-center border-b-2 space-x-2 px-1 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-primary text-primary hover:text-primary focus:border-primary '
                    : 'border-transparent text--800-800 dark:text--800-400 hover:border--800-700 hover:text--800-700 dark:hover:text--800-300 dark:hover:border--800-400 focus:border--800-400 focus:text--800-800 ') +
                className
            }
        >
            <span className="hidden md:inline-flex">{icon}</span>
            <span className="inline-flex">{children}</span>
        </Link>
    );
}
