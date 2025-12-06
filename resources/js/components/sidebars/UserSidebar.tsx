import SidebarLink from '@/components/sidebars/SidebarLink';

/**
 * A component that renders a sidebar with links to the user's dashboard,
 * recipes, ingredients, and favorites.
 *
 * @example
 * <UserSidebar />
 */
export default function UserSidebar() {
    return (
        <aside className="py-5 space-y-5">
            <h2 className="text-2xl font-medium mb-2">Persönlicher Bereich</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/dashboard"
                    active={window.location.pathname === '/dashboard'}
                    title="Dashboard"
                />
                <SidebarLink
                    href="/dashboard/rezepte"
                    active={window.location.pathname === '/dashboard/rezepte'}
                    title="Deine Rezepte"
                />
                <SidebarLink
                    href="/dashboard/zutaten"
                    active={window.location.pathname === '/dashboard/zutaten'}
                    title="Deine Zutaten"
                />
                <SidebarLink
                    href="/dashboard/favoriten"
                    active={window.location.pathname === '/dashboard/favoriten'}
                    title="Deine Favoriten"
                />
            </ul>
        </aside>
    );
}
