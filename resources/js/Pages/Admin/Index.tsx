import { usePage } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import { toHumanDate } from '@/lib/utils';
import RoleBadge from '@/components/reusables/RoleBadge';
import AdminSidebar from '@/components/sidebars/AdminSidebar';
import { Button } from '@/components/ui/button';
export default function Index() {
    const { props }: any = usePage();
    const user = props.user;
    const users = props.users;

    return (
        <SidebarLeftLayout title="Admin" sidebar={<AdminSidebar />}>
            <h1>Willkommen {user.name}</h1>
            <p>Deine Rollen: <strong>{user.roles?.join(', ')}</strong></p>
            <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
            <table className="w-full overflow-x-auto">
                <thead>
                    <tr>
                        <th className="p-1 text-left">Id</th>
                        <th className="p-1 text-left w-48">Username</th>
                        <th className="p-1 text-left w-64">E-Mail</th>
                        <th className="p-1 text-left w-32">Rollen</th>
                        <th className="p-1 text-left">Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u: any) => (
                        <tr key={u.id}>
                            <td className="p-1">{u.id}</td>
                            <td className="p-1">{u.name}</td>
                            <td className="p-1">{u.email}</td>
                            <td className="p-1 flex flex-wrap gap-2">
                                {u.roles?.map((role: any) => (
                                    <div key={role.id} role={role} className="bg-primary rounded text-white">{role}</div>
                                ))}
                            </td>
                            <td className="p-3">
                                <div className="flex gap-2">
                                    <Button className="font-medium bg-primary text-white rounded-md">
                                        Bearbeiten
                                    </Button>
                                    <Button className="font-medium bg-rose-500 text-white rounded-md">
                                        Löschen
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </SidebarLeftLayout>
    );
}
