import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";

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
