import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';

export default function NoEditAllowed() {
    return (
        <SidebarLeftLayout title="Keine Berechtigung" sidebar={<MainSidebar />}>
            <div className="border border-rose-500 bg-rose-200 p-3 rounded-lg">
                <p className="text-base text-rose-500">Du kannst leider keine Rezepte von anderen Benutzern bearbeiten.</p>
            </div>
        </SidebarLeftLayout>
    );
}
