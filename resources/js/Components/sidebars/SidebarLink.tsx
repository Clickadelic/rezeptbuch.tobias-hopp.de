import { InertiaLinkProps, Link } from '@inertiajs/react';
import { BsChevronCompactRight } from 'react-icons/bs';
interface SidebarNavLinkProps extends InertiaLinkProps {
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
    ...props
}: SidebarNavLinkProps & { active: boolean }) {
    return (
        <li>
            <Link
                {...props}
                className={
                    'w-full inline-flex flex-row items-start gap-3 py-3 focus:outline-none ' +
                    (active
                        ? 'text-primary hover:text-primary focus:text-primary font-medium '
                        : 'text-gray-800 hover:text-gray-600 focus:text-gray-600 dark:text-gray-200') +
                    className
                }
                title={props.title}
            >
                <BsChevronCompactRight className="inline-flex mt-1" />
                {props.title}
            </Link>
        </li>
    );
}
