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
                <SidebarLink
                    href="/rezepte"
                    active={window.location.pathname === '/rezepte'}
                    title="Rezepte"
                />
                <SidebarLink
                    href="/zutaten"
                    active={window.location.pathname === '/zutaten'}
                    title="Zutaten"
                />
            </ul>
        </aside>
    );
}
