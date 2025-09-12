import { usePage } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import { toHumanDate } from '@/lib/utils';
import RoleBadge from '@/components/reusables/RoleBadge';
import AdminSidebar from '@/components/sidebars/AdminSidebar';
export default function Index() {
    const { props }: any = usePage();
    const user = props.user;
    const users = props.users;

    return (
        <SidebarLeftLayout title="Admin" sidebar={<AdminSidebar />}>
            <h1>Willkommen {user.name}</h1>
            <p>Deine Rollen: <strong>{user.roles?.join(', ')}</strong></p>
            <hr className="my-5 bg-slate-300 dark:bg-slate-700" />
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-3 border border-slate-100">Id</th>
                        <th className="p-3 border border-slate-100">Username</th>
                        <th className="p-3 border border-slate-100">E-Mail</th>
                        <th className="p-3 border border-slate-100">Rollen</th>
                        <th className="p-3 border border-slate-100">Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u: any) => (
                        <tr key={u.id}>
                            <td className="p-3 border border-slate-100">{u.id}</td>
                            <td className="p-3 border border-slate-100">{u.name}</td>
                            <td className="p-3 border border-slate-100">{u.email}</td>
                            <td className="p-3 border border-slate-100 flex flex-wrap gap-2">
                                {u.roles?.map((role: any) => (
                                    <div key={role.id} role={role} className="px-1 py-1 text-xs font-medium bg-primary text-white rounded-md">{role}</div>
                                ))}
                            </td>
                            <td className="p-3 border border-slate-100">
                                <div className="flex gap-2">
                                    <button className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-md">
                                        Bearbeiten
                                    </button>
                                    <button className="px-2 py-1 text-xs font-medium bg-rose-500 text-white rounded-md">
                                        Löschen
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </SidebarLeftLayout>
    );
}
