import SidebarLink from "@/Components/sidebars/SidebarLink"
import { usePage } from "@inertiajs/react";
/**
 * A component that renders a sidebar with a title and a subtitle.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    const { auth } = usePage().props;
    return (
        <aside>
            <h2 className="text-2xl my-3 flex">Navigation</h2>
            <hr className="my-3 border-slate-300" />
            <ul className="flex flex-col">
                <SidebarLink  href="/gerichte" active={window.location.pathname === '/gerichte'} title="Gerichte" />
                {auth.user && <SidebarLink href="/gerichte/neues-gericht" active={window.location.pathname === '/gerichte/neues-gericht'} title="Neues Gericht" />}
            </ul>
        </aside>
    );
}