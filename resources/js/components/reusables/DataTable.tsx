import Avatar from "./Avatar";
import VerifiedBadge from "./VerifiedBadge";

export default function DataTable ({ users }: any) {
    console.log("Datatable", users);
    return (
        <div className="rounded-3xl border border-white/40 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <header className="flex flex-col gap-2 border-b border-gray-200/70 py-6 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
                
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Benutzer</h2>
                <div className="inline-flex items-center gap-4 rounded-full bg-gray-100/80 px-4 py-2 text-xs font-semibold text-gray-500 dark:bg-gray-800/60 dark:text-gray-300">
                    <VerifiedBadge verified={true} />
                    <VerifiedBadge verified={false} />
                </div>
            </header>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 overflow-x-auto">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Avatar</th>
                            <th scope="col" className="px-6 py-3">Benutzername</th>
                            <th scope="col" className="px-6 py-3">E-Mail</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">bearbeiten</span></th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">löschen</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u: any) => (
                            <tr key={u.id} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-6 py-4">{u.id}</td>
                                <td className="px-6 py-4"><Avatar user={u} /></td>
                                <td className="px-6 py-4">{u.name}</td>
                                <td className="px-6 py-4">{u.email}</td>
                                <td className="px-6 py-4">{u.email_verified_at ? <VerifiedBadge verified={true} /> : <VerifiedBadge verified={false} />}</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">bearbeiten</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="text-red-600 hover:underline dark:text-red-500">löschen</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}