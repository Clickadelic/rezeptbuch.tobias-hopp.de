import SidebarLink from "@/components/sidebars/SidebarLink";

export default function UserSidebar (){
    return (
        <aside className="py-5 space-y-5">
            <h2 className="text-xl font-medium mb-2">Persönlicher Bereich</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/dashboard"
                    active={window.location.pathname === '/dashboard'}
                    title="Dashboard"
                />
                <SidebarLink
                    href="/dashboard/meine-rezepte"
                    active={window.location.pathname === '/dashboard/meine-rezepte'}
                    title="Meine Rezepte"
                />
                <SidebarLink
                    href="/dashboard/meine-zutaten"
                    active={window.location.pathname === '/dashboard/meine-zutaten'}
                    title="Meine Zutaten"
                />
                <SidebarLink
                    href="/dashboard/meine-favoriten"
                    active={window.location.pathname === '/dashboard/meine-favoriten'}
                    title="Meine Favoriten"
                />
            </ul>
        </aside>
    )
}