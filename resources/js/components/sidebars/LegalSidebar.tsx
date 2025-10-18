import SidebarLink from '@/components/sidebars/SidebarLink';

/**
 * A component that renders a sidebar with the legal navigation points and title.
 *
 * @example
 * <LegalSidebar />
 */
export default function LegalSidebar() {
    return (
        <aside className="py-4 space-y-5">
            <h2 className="text-xl font-medium mb-2">Rechtliches</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/nutzungsbedingungen"
                    active={window.location.pathname === '/nutzungsbedingungen'}
                    title="Nutzungsbedingungen"
                />
                <SidebarLink
                    href="/datenschutz"
                    active={window.location.pathname === '/datenschutz'}
                    title="Datenschutz"
                />
                <SidebarLink
                    href="/cookie-hinweis"
                    active={window.location.pathname === '/cookie-hinweis'}
                    title="Cookie-Hinweis"
                />
                <SidebarLink
                    href="/impressum"
                    active={window.location.pathname === '/impressum'}
                    title="Impressum"
                />
            </ul>
        </aside>
    );
}
