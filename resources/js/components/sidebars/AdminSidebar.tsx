import SidebarLink from '@/components/sidebars/SidebarLink';

/**
 * A component that renders a sidebar with a title.
 *
 * @example
 * <AdminSidebar />
 */
export default function AdminSidebar() {
    
    return (
        <aside className="py-4">
            <h2 className="text-xl font-medium mb-2">Navigation</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/admin"
                    active={window.location.pathname === '/admin'}
                    title="Admin"
                />
                <SidebarLink
                    href="/email-preview"
                    active={window.location.pathname === '/email-preview'}
                    title="E-Mail Vorschau"
                />
            </ul>
        </aside>
    );
}
