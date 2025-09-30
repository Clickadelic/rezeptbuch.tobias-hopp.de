import SidebarLink from '@/components/sidebars/SidebarLink';
import { SharedPageProps } from '@/types';
import { usePage } from '@inertiajs/react';
/**
 * A component that renders a right sidebar with a title and a subtitle.
 *
 * @example
 * <RightSidebar />
 */
export default function RightSidebar() {
    const user = usePage<SharedPageProps>();
    return (
        <aside className="py-4">
            <h2 className="text-xl font-medium font-oswald mb-2">Los geht's</h2>
            <ul className="flex flex-col space-y-2 divide-y divide-gray-300">
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
                <SidebarLink
                    href="/register"
                    active={window.location.pathname === '/register'}
                    title="Registrierung"
                />
                <SidebarLink
                    href="/login"
                    active={window.location.pathname === '/login'}
                    title="Login"
                />
            </ul>
        </aside>
    );
}
