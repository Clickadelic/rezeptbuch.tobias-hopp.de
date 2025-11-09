import { Link } from '@inertiajs/react';
import Avatar from '@/components/reusables/Avatar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { HiOutlineEye } from 'react-icons/hi2';

import ContextMenu from '@/components/reusables/ContextMenu';
import AuthUser from '@/types/AuthUser';

import { cn } from '@/lib/utils';

interface UserListProps {
    title?: string;
    icon?: React.ReactNode;
    className?: string;
    users?: AuthUser[];
}

export default function UsersTable({ title, icon, className, users }: UserListProps) {
    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-xl', className)}>
            <h3 className={cn('text-lg flex gap-2', users && users?.length >= 1 && 'mb-3')}>
                {icon}
                {title || 'Benutzer'}
            </h3>
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
                                <TableCell className="cursor-default truncate max-w-[150px]">
                                    {user.email_verified_at ? 'bestätigt' : 'nicht bestätigt'}
                                </TableCell>

                                <TableCell className="cursor-default truncate max-w-[150px] flex flex-wrap gap-1 pt-4">
                                    {user.roles.map((role) => (
                                        <span key={role} className="px-1.5 py-.5 text-xs rounded bg-primary text-white">
                                            {role}
                                        </span>
                                    ))}
                                </TableCell>


                                <TableCell className="text-right">
                                    ACTION
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
