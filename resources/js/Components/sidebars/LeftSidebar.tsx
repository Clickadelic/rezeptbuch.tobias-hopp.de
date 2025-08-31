import SidebarLink from '@/Components/sidebars/SidebarLink';
import { usePage } from '@inertiajs/react';
/**
 * A component that renders a sidebar with a title and a subtitle.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside className="py-4">
            <h2 className="text-lg font-medium mb-2">Navigation</h2>

            <ul className="flex flex-col divide-y divide-slate-300">
                <SidebarLink
                    href="/"
                    active={window.location.pathname === '/'}
                    title="Startseite"
                />
                <SidebarLink
                    href="/gerichte/neues-gericht"
                    active={window.location.pathname === '/gerichte/neues-gericht'}
                    title="Neues Gericht"
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
            </ul>
        </aside>
    );
}
