// components/Breadcrumbs.tsx
import { Link } from '@inertiajs/react';

type Crumb = {
    title: string;
    href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav className="text-sm text-gray-600">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <Link href={item.href} className="hover:underline text-blue-600">
                                {item.title}
                            </Link>
                        ) : (
                            <span className="text-gray-800">{item.title}</span>
                        )}
                        {index < items.length - 1 && <span className="mx-2">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
