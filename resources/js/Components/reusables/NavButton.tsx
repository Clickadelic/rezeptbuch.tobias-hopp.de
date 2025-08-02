import { InertiaLinkProps, Link } from '@inertiajs/react';

interface NavButtonProps extends InertiaLinkProps {
    icon?: React.ReactNode;
}

/**
 * A link component that is styled like a button.
 *
 * @prop {string} [className] - Additional classnames to apply to the component.
 * @prop {React.ReactNode} [icon] - An icon to render before the text of the button.
 * @prop {InertiaLinkProps} ...props - Any props you would pass to the `Link` component from `@inertiajs/react`.
 *
 * @example
 * <NavButton href="/Home" icon={<BsHouse />}>Home</NavButton>
 */
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
