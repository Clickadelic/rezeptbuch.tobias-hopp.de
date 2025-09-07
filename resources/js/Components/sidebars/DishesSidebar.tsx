import SidebarLink from '@/components/sidebars/SidebarLink';
import { usePage } from '@inertiajs/react';
/**
 * A component that renders a sidebar with a title.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside className="py-4">
            <h2 className="text-lg font-medium mb-2">Navigation</h2>
            <ul className="flex flex-col">
                {user && (
                    <SidebarLink
                        href="/gerichte/neues-gericht"
                        active={window.location.pathname === '/gerichte/neues-gericht'}
                        title="Neues Gericht"
                    />
                )}
                <SidebarLink
                    href="/gerichte"
                    active={window.location.pathname === '/gerichte'}
                    title="Alle Gerichte"
                />
            </ul>
        </aside>
    );
}
