import { InertiaLinkProps, Link } from '@inertiajs/react';

interface IconNavLinkProps extends InertiaLinkProps {
    icon?: React.ReactNode;
}

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
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-emerald-700 text-gray-800 focus:border-emerald-600'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700') +
                className
            }
        >
            {icon}{children}
        </Link>
    );
}
