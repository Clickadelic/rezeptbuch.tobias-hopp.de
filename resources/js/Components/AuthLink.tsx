import { InertiaLinkProps, Link } from '@inertiajs/react';

interface AuthNavLinkProps extends InertiaLinkProps {
    icon?: React.ReactNode;
}

export default function AuthLink({
    className = '',
    icon,
    children,
    ...props
}: AuthNavLinkProps) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 border-transparent space-x-2 px-2 py-3 text-sm font-medium leading-5 rounded-sm' +
                className
            }
        >
            <span className="inline-flex">{icon}</span><span className="inline-flex">{children}</span>
        </Link>
    );
}
