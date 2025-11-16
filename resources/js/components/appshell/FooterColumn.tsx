import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface FooterColumnProps {
    title?: string
    columnIcon?: React.ReactNode
    className?: string
    items?: { title: string; icon: React.ReactNode; href: string }[]
    children?: React.ReactNode
}

/**
 * A reusable component for displaying a column of links in the footer.
 * It can also display a title and icon at the top of the column.
 * The component can be styled with additional CSS classes using the `className` prop.
 * The component can also render additional children below the links using the `children` prop.
 *
 * @example
 * <FooterColumn title="Navigation" icon={<BsHouse />}>
 *     <ul>
 *         <li>
 *             <Link href="/">Home</Link>
 *         </li>
 *         <li>
 *             <Link href="/about">About</Link>
 *         </li>
 *     </ul>
 * </FooterColumn>
 * @param {string} [title] - Title of the column.
 * @param {React.ReactNode} [icon] - Icon to display next to the title.
 * @param {string} [className] - Additional CSS classes to apply to the component.
 * @param {FooterColumnItem[]} [items] - List of links to display in the column.
 * @param {React.ReactNode} [children] - Additional children to render below the links.
 */
export default function FooterColumn({ title, columnIcon, className, items, children}: FooterColumnProps) {
    
    return (
        <div className={cn("w-72 sm:w-full", className)}>
            <h2 className="pb-4 text-2xl text-gray-100 flex gap-2 font-secondary items-center justify-center sm:justify-start border-b border-b-black">
                {columnIcon}
                <span className="font-medium">{title}</span>
            </h2>
            {items && ( 
                <ul className="sm:pl-1 pt-4 space-y-4 sm:space-y-3 flex flex-col justify-center items-center sm:justify-start sm:items-start border-t border-stone-700">
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.href}
                                className="flex gap-3 text-gray-100 hover:text-gray-400"
                                title={item.title}
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {children && ( 
                <div className="border-t border-stone-700 pt-4">
                    {children}
                </div>
            )}
        </div>
    )
}