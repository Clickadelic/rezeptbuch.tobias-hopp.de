import SidebarLink from '@/components/sidebars/SidebarLink';
import { usePage } from '@inertiajs/react';
import { Button } from '../ui/button';
import { Link } from 'lucide-react';
import { BsBookmarkHeart } from 'react-icons/bs';
/**
 * A component that renders a sidebar with a title.
 *
 * @example
 * <LeftSidebar />
 */
export default function LeftSidebar() {
    const user = usePage().props.auth.user;
    return (
        <aside className="py-4 space-y-5">
            <Button variant="primaryOutline" asChild className="w-full">
                <Link
                    href="/rezepte"
                    className="flex flex-row justify-between gap-2 text-primary hover:text-emerald-600 mx-auto"
                >
                    <BsBookmarkHeart className="size-5 mt-1" />
                    zurück
                </Link>
            </Button>
            <h2 className="text-xl font-medium font-oswald mb-2">Navigation</h2>
            <ul className="flex flex-col">
                <SidebarLink
                    href="/rezepte"
                    active={window.location.pathname === '/rezepte'}
                    title="Rezepte"
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
