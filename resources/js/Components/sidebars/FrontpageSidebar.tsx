import SidebarLink from '@/components/sidebars/SidebarLink';
import { usePage } from '@inertiajs/react';
/**
 * A component that renders a right sidebar with a title and a subtitle.
 *
 * @example
 * <RightSidebar />
 */
export default function RightSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside className="py-4">
            <h2 className="text-lg font-medium mb-2">Los geht's</h2>
            <ul className="flex flex-col space-y-2 divide-y divide-slate-300">
                <SidebarLink
                    href="/gerichte"
                    active={window.location.pathname === '/gerichte'}
                    title="Gerichte"
                />
                <SidebarLink
                    href="/cocktails"
                    active={window.location.pathname === '/cocktails'}
                    title="Cocktails"
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
