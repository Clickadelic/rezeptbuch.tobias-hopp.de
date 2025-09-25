import { InertiaLinkProps, Link } from '@inertiajs/react';

interface NavButtonProps extends InertiaLinkProps {
    icon?: React.ReactNode;
    active?: boolean;
}

/**
 * A link component that is styled like a button.
 *
 * @prop {string} [className] - Additional classnames to apply to the component.
 * @prop {string} [active] - active classname to apply to the component.
 * @prop {React.ReactNode} [icon] - An icon to render before the text of the button.
 * @prop {InertiaLinkProps} ...props - Any props you would pass to the `Link` component from `@inertiajs/react`.
 *
 * @example
 * <NavButton href="/Home" icon={<BsHouse />}>Home</NavButton>
 */
export default function NavButton({
    className = '',
    active = false,
    icon,
    children,
    ...props
}: NavButtonProps) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center justify-between md:gap-2 sm:px-1 md:px-2 py-1 rounded-sm ' +
                className +
                (active ? 'asd' : 'asd')
            }
        >
            <span className="hidden lg:inline-flex">{icon}</span>
            <span className="inline-flex">{children}</span>
        </Link>
    );
}
