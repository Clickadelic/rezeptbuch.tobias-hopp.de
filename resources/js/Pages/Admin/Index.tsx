import { Head, usePage } from '@inertiajs/react';
import FullWidthLayout from '@/layouts/FullWidthLayout';
import { toHumanDate } from '@/lib/utils';
import RoleBadge from '@/components/reusables/RoleBadge';

export default function Index() {
    const { props }: any = usePage();
    const user = props.user;
    const users = props.users;

    return (
        <>
            <Head title="Admin" />
            <FullWidthLayout title="Admin">
                <h1>Willkommen {user.name}</h1>
                <p>
                    Deine Rollen: <strong>{user.roles?.join(', ')}</strong>
                </p>
				<hr className="my-5 bg-slate-300 dark:bg-slate-700" />
                <table>
                    <thead>
                        <tr>
                            <th className="p-3 border border-slate-100">id</th>
                            <th className="p-3 border border-slate-100">username</th>
                            <th className="p-3 border border-slate-100">email</th>
                            <th className="p-3 border border-slate-100">roles</th>

                            <th className="p-3 border border-slate-100">Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u: any) => (
                            <tr key={u.id}>
                                <td className="p-3 border border-slate-100">{u.id}</td>
                                <td className="p-3 border border-slate-100">{u.username}</td>
                                <td className="p-3 border border-slate-100">{u.email}</td>
                                <td className="p-3 border border-slate-100 flex flex-wrap gap-2">
                                    {u.roles?.map((role: any) => (
                                        <div key={role.id} role={role} className="px-1 py-1 text-xs font-medium bg-primary text-white rounded-md">{role}</div>
                                    ))}
                                </td>
                                <td className="p-3 border border-slate-100">Button</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </FullWidthLayout>
        </>
    );
}
