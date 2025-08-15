import SidebarLink from "@/Components/sidebars/SidebarLink"
import { usePage } from "@inertiajs/react";
/**
 * A component that renders a right sidebar with a title and a subtitle.
 *
 * @example
 * <RightSidebar />
 */
export default function RightSidebar() {
    const { auth } = usePage().props;
    return (
        <aside className="asd">
            <h2 className="text-2xl my-3 flex">Navigation</h2>
            <hr className="my-3 border-slate-300" />
            <ul className="flex flex-col space-y-2 divide-y divide-slate-300">
                <SidebarLink  href="/" active={window.location.pathname === '/'} title="Startseite" />
                <SidebarLink  href="/gerichte" active={window.location.pathname === '/gerichte'} title="Gerichte" />
                <SidebarLink  href="/cocktails" active={window.location.pathname === '/cocktails'} title="Cocktails" />
            </ul>
        </aside>
    );
}