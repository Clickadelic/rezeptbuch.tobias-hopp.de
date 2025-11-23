import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import axios from "axios";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';

import Avatar from '@/components/reusables/Avatar';
import AdminContextMenu from '@/components/reusables/AdminContextMenu';

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineEye } from 'react-icons/hi2';
import { MdOutlineNearbyError } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { router } from "@inertiajs/react";
import { toast } from 'sonner';
import { BsTrash } from 'react-icons/bs';
import { usePermissions } from '@/hooks/usePermissions';

import AuthUser from '@/types/AuthUser';

import { SharedPageProps } from '@/types';

import { cn } from '@/lib/utils';

interface UsersTableProps {
    title?: string;
    icon?: React.ReactNode;
    className?: string;
    users: AuthUser[];
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
export default function AdminUsersTable({ title, icon, className, users }: UsersTableProps) {

    const availableRoles = usePage<SharedPageProps>().props.availableRoles;

    console.log("Available Roles: ", availableRoles);

    const deleteUser = async (id: number) => {
        try {
            await axios.delete(route("admin.users.destroy", id));
            router.reload({ only: ["users"] });
            toast.success("Benutzer erfolgreich gelöscht!");
        } catch (error) {
            toast.error("Fehler beim Löschen des Users!");
        }
    };

    const updateUserRoles = async (id: number, roles: string[]) => {
        try {
            await axios.post(route("admin.users.updateRole", id), { roles });
            router.reload({ only: ["users", "admin"] });
            toast.success("Benutzerrolle erfolgreich geändert!");
        } catch (error) {
            toast.error("Fehler beim Ändern der Benutzerrolle!");
        }
    };
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
                            <TableHead className="w-[60px] text-center">Id:</TableHead>
                            <TableHead className="w-[60px]">Avatar</TableHead>
                            <TableHead className="asd">Name</TableHead>
                            <TableHead className="asd">E-Mail</TableHead>
                            <TableHead className="asd">Rollen</TableHead>
                            <TableHead className="asd">Rechte</TableHead>
                            <TableHead className="asd">Rolle ändern</TableHead>
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
                                <TableCell className="cursor-default truncate">
                                    {user.name}
                                </TableCell>
                                <TableCell className="cursor-default truncate">
                                    {user.email}
                                </TableCell>
                                <TableCell className="cursor-default truncate">
                                    {user.roles.map((role) => (
                                        <Badge key={role} className="mt-1 mr-1 last:mr-0 px-1.5 py-.5 text-xs rounded bg-primary text-white capitalize">
                                            {role}
                                        </Badge>
                                    ))}
                                </TableCell>
                                <TableCell className="cursor-default truncate">
                                    {(user.permissions ?? []).map((permission) => (
                                        <Badge key={permission} className="mr-1 last:mr-0 px-1.5 py-.5 text-xs rounded bg-primary text-white capitalize">
                                            {permission}
                                        </Badge>
                                    ))}
                                </TableCell>
                                <TableCell className="cursor-default truncate">
                                    {/* <Select
                                        defaultValue={user.roles.map((role) => role)} // Array von Rollen
                                        onValueChange={(values: string[]) => updateUserRoles(user.id, values)}
                                        multiple
                                    >
                                        <SelectTrigger className="w-[120px] bg-gray-100 dark:bg-gray-900 rounded-sm inset">
                                            <SelectValue placeholder="Rolle auswählen" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {availableRoles.map((role) => (
                                                <SelectItem key={role} value={role}>
                                                    {role}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select> */}

                                </TableCell>
                                <TableCell className="text-right">
                                    <AlertDialog>
                                        <AlertDialogTrigger className="text-white bg-rose-700 hover:bg-rose-800 rounded-sm p-2 hover:cursor-pointer">
                                            <BsTrash />
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Bist Du Dir sicher, dass Du {user.name} löschen möchtest?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Diese Aktion kann nicht rückgängig gemacht werden. Alle Daten des Benutzers werden gelöscht.
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => deleteUser(user.id)} className="text-white bg-rose-700 hover:bg-rose-800">Benutzer löschen</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                        </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
