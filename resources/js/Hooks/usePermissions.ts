import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";

/**
 * Hook to check if the current user has a certain role or permission.
 *
 * @returns {{ hasRole: (role: string) => boolean, can: (permission: string) => boolean, isOwner: (userId: number) => boolean }}
 */
export function usePermissions() {
    const { auth } = usePage<SharedPageProps>().props;

    const hasRole = (role: string) => {
        return auth.user.roles.includes(role);
    };

    const can = (permission: string) => {
        return auth.user.permissions.includes(permission);
    };

    const isOwner = (userId: number) => {
        return auth.user.id === userId;
    };

    return { hasRole, can, isOwner };
}
