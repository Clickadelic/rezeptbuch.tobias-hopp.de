import SidebarLink from '@/components/sidebars/SidebarLink';

/**
 * A component that renders a sidebar with a title.
 *
 * @example
 * <AdminSidebar />
 */
export default function AdminSidebar() {
    return (
        <aside className="py-5">
            <h2 className="text-xl font-medium mb-2">Admin-Bereich</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/admin"
                    active={window.location.pathname === '/admin'}
                    title="Admin"
                />
                <SidebarLink
                    href="/admin/kontaktanfragen"
                    active={window.location.pathname === '/admin/kontaktanfragen'}
                    title="Kontaktanfragen"
                />
            </ul>
        </aside>
    );
}
