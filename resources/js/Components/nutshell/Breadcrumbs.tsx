// src/Components/Breadcrumbs.tsx
import { FC, useMemo } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/Components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

const Breadcrumbs: FC = () => {
    const { url } = usePage().props;

    // Segmente der aktuellen URL extrahieren
    const segments = useMemo(() => {
        const path = new URL(window.location.href).pathname;
        return path.split('/').filter(Boolean); // ["gerichte", "spaghetti-bolognese"]
    }, [url]);

    // Items generieren
    const items = useMemo(() => {
        const paths: string[] = [];
        return segments.map((segment, index) => {
            paths.push(segment);
            const href = '/' + paths.join('/');

            // Automatische Umwandlung in lesbare Labels
            const label = segment
                .replace(/-/g, ' ') // Bindestriche zu Leerzeichen
                .replace(/\b\w/g, (l) => l.toUpperCase()); // Erstbuchstaben groß

            return {
                label,
                href: index !== segments.length - 1 ? href : undefined, // letztes Item nicht klickbar
            };
        });
    }, [segments]);

    return (
        <Breadcrumb separator={<ChevronRight className="w-4 h-4 text-gray-400" />}>
            {items.map((item, index) => (
                <BreadcrumbItem key={index}>
                    {item.href ? (
                        <BreadcrumbLink asChild>
                            <Link href={item.href}>{item.label}</Link>
                        </BreadcrumbLink>
                    ) : (
                        <span className="text-gray-500">{item.label}</span>
                    )}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
