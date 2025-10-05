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
        if (!auth.user || role == null) return false
        return auth.user.roles.includes(role);
    };

    const can = (permission: string) => {
        if (!auth.user || permission == null) return false
        return auth.user.permissions.includes(permission);
    };

    const isOwner = (userId?: number | null) => {
        if (!auth.user || userId == null) return false;
        return auth.user.id === userId;
    };

    return { hasRole, can, isOwner };
}