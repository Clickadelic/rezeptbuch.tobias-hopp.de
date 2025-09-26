import SidebarLink from '@/components/sidebars/SidebarLink';
import { usePage } from '@inertiajs/react';
/**
 * A component that renders a sidebar with a title.
 *
 * @example
 * <AdminSidebar />
 */
export default function AdminSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside className="py-4">
            <h2 className="text-xl font-medium font-oswald mb-2">Navigation</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/admin"
                    active={window.location.pathname === '/admin'}
                    title="Admin"
                />
            </ul>
        </aside>
    );
}
