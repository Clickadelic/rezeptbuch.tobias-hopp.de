import { Link } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import Avatar from '@/components/reusables/Avatar';

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineEye } from 'react-icons/hi2';
import { MdOutlineNearbyError } from "react-icons/md";

import AuthUser from '@/types/AuthUser';
import AdminContextMenu from '@/components/reusables/AdminContextMenu';
import { cn } from '@/lib/utils';

interface UserListProps {
    title?: string;
    icon?: React.ReactNode;
    className?: string;
    users?: AuthUser[];
}

/**
 * A table component to display a list of users.
 *
 * @param {string} [title] - The title of the table.
 * @param {React.ReactNode} [icon] - An icon to display before the title of the table.
 * @param {string} [className] - Additional classnames to apply to the component.
 * @param {AuthUser[]} [users] - The list of users to display in the table.
 *
 * @example
 * <UsersTable title="Benutzer" icon={<BsHouse />} users={users} />
 */
export default function UsersTable({ title, icon, className, users }: UserListProps) {
    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-xl', className)}>
            <h3 className={cn('text-lg flex gap-2', users && users?.length >= 1 && 'mb-3')}>{icon}{title || 'Benutzer'}</h3>
            {/* Wenn keine User vorhanden */}
            {(!users || users.length === 0) && (
                <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
                    <h4 className="text-gray-600 dark:text-gray-400 text-center mb-2">
                        Es sind noch keine User vorhanden.
                    </h4>
                </div>
            )}
            {users && users.length > 0 && (
                <Table className="border-collapse table-auto caption-bottom">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Id:</TableHead>
                            <TableHead>Avatar</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>E-Mail</TableHead>
                            <TableHead>Verifiziert</TableHead>
                            <TableHead>Rollen</TableHead>
                            <TableHead>Rechte</TableHead>
                            <TableHead className="text-right">Aktion</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user: AuthUser) => (
                            
                            <TableRow
                                key={user.id}
                                className="hover:bg-white dark:hover:bg-gray-900"
                            >
                                
                                <TableCell className="cursor-default text-center">{user.id}</TableCell>
                                <TableCell className="cursor-default">
                                    <Avatar url={user.avatar} name={user.name} />
                                </TableCell>
                                <TableCell className="cursor-default truncate max-w-[150px]">
                                    {user.name}
                                </TableCell>
                                <TableCell className="cursor-default truncate max-w-[150px]">
                                    {user.email}
                                </TableCell>
                                <TableCell className="cursor-default truncate text-center">
                                    {user.email_verified_at}
                                </TableCell>
                                <TableCell className="cursor-default truncate max-w-[150px] flex flex-wrap gap-1 pt-4">
                                    {user.roles.map((role) => (
                                        <span key={role} className="px-1.5 py-.5 text-xs rounded bg-primary text-white capitalize">
                                            {role}
                                        </span>
                                    ))}
                                </TableCell>
                                <TableCell className="cursor-default truncate text-center">
                                    {(user.permissions ?? []).map((permission) => (
                                        <span key={permission} className="px-1.5 py-.5 text-xs rounded bg-primary text-white capitalize">
                                            {permission}
                                        </span>
                                    ))}
                                </TableCell>


                                <TableCell className="text-right">
                                    <AdminContextMenu user={user} dotStyle="vertical" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
