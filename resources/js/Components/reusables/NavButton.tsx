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
export default function NavButton({ className = '', active = false, icon, children, ...props }: NavButtonProps) {
    return (
        <Link
            {...props}
            className={
                'border border-transparent inline-flex items-center justify-between md:gap-2 sm:px-1 md:px-2 py-2 font-medium leading-5 rounded-sm ' +
                className +
                (active
                    ? 'border border-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
                    : 'text-slate-800 hover:text-slate-600 focus:text-slate-600 dark:text-slate-200 dark:hover:text-slate-400 dark:focus:text-slate-400')
            }
        >
            <span className="hidden lg:inline-flex">{icon}</span>
            <span className="inline-flex">{children}</span>
        </Link>
    );
}
