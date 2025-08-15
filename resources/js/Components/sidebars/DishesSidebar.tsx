import SidebarLink from "@/Components/sidebars/SidebarLink"
import { usePage } from "@inertiajs/react";
/**
 * A component that renders a sidebar with a title and a subtitle.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside>
            <h2 className="text-2xl my-3 flex">Navigation</h2>
            <hr className="my-3 border-slate-300" />
            <ul className="flex flex-col">
                {user && <SidebarLink href="/gerichte/neues-gericht" active={window.location.pathname === '/gerichte/neues-gericht'} title="Neues Gericht" />}
                <SidebarLink  href="/gerichte" active={window.location.pathname === '/gerichte'} title="Alle Gerichte" />
            </ul>
        </aside>
    );
}