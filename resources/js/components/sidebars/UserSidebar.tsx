import SidebarLink from "@/components/sidebars/SidebarLink";



export default function UserSidebar (){
    return (
        <aside className="py-5 space-y-5">
            <h2 className="text-xl font-medium mb-2">Navigation</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/dashboard"
                    active={window.location.pathname === '/dashboard'}
                    title="Dashboard"
                />
                <SidebarLink
                    href="/meine-rezepte"
                    active={window.location.pathname === '/meine-rezepte'}
                    title="Meine Rezepte"
                />
            </ul>
        </aside>
    )
}