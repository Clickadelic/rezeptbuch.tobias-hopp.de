import { InertiaLinkProps, Link } from '@inertiajs/react';

interface NavButtonProps extends InertiaLinkProps {
    icon?: React.ReactNode;
}

export default function NavButton({
    className = '',
    icon,
    children,
    ...props
}: NavButtonProps) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 text-sm font-medium leading-5 rounded-sm shadow-sm mt-[3px] ' +
                className
            }
        >
            <span className="inline-flex">{icon}</span><span className="inline-flex">{children}</span>
        </Link>
    );
}
