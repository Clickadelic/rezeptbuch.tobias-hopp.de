import SidebarLink from "@/Components/sidebars/SidebarLink"

/**
 * A component that renders a sidebar with a title and a subtitle.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    return (
        <aside>
            <h2 className="text-2xl my-3 flex">Navigation</h2>
            <hr className="my-3 border-slate-300" />
            <ul className="flex flex-col">
                <SidebarLink  href="/gerichte" active={window.location.pathname === '/gerichte'} title="Gerichte" />
                <SidebarLink  href="/gerichte/neues-gericht" active={window.location.pathname === '/gerichte'} title="Neues Gericht" />
            </ul>
        </aside>
    );
}