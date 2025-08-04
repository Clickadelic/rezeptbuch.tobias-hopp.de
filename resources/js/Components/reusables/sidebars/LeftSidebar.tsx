import SidebarLink from "@/Components/reusables/sidebars/SidebarLink"

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
            <ul className="flex flex-col divide-y divide-slate-300">
                <SidebarLink  href="/" active={window.location.pathname === '/'} title="Startseite" />
                <SidebarLink  href="/gerichte" active={window.location.pathname === '/gerichte'} title="Gerichte" />
                <SidebarLink  href="/cocktails" active={window.location.pathname === '/cocktails'} title="Cocktails" />
                <SidebarLink  href="/zutaten" active={window.location.pathname === '/zutaten'} title="Zutaten" />
            </ul>
        </aside>
    );
}