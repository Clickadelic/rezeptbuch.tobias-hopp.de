import { Link } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCaption,
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
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl', className)}>
            <h3 className={cn('text-lg flex gap-2', users && users?.length >= 1 && 'mb-3')}>
                {icon}
                {title || 'Deine Favoriten'}
            </h3>
            {/* Wenn keine User vorhanden */}
            {(!users || users.length === 0) && (
                <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
                    <h3 className="text-gray-600 dark:text-gray-400 text-center mb-2">
                        Es sind noch keine User vorhanden.
                    </h3>
                    <Button asChild variant="primary" className="hover:bg-emerald-700">
                        <Link href={route('recipes.index')} title="Erstelle ein Rezept">
                            <HiOutlineEye /> User ansehen
                        </Link>
                    </Button>
                </div>
            )}

            {users && users.length > 0 && (
                <Table className="border-collapse table-auto caption-bottom">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[88px]">Confirmed</TableHead>
                            <TableHead>Name</TableHead>

                            <TableHead className="text-right">Aktion</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {users.map((user: AuthUser) => (
                            <TableRow
                                key={user.id}
                                className="hover:bg-white dark:hover:bg-gray-900"
                            >
                                <TableCell className="cursor-default">asd</TableCell>
                                <TableCell className="cursor-default truncate max-w-[150px]">
                                    {user.name}
                                </TableCell>

                                <TableCell className="text-right">
                                    <ContextMenu dotStyle="horizontal" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
