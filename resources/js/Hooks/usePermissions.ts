import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

export function usePermissions() {
    const { auth } = usePage<PageProps>().props;

    const hasRole = (role: string) => {
        return auth?.user?.roles?.includes(role);
    };

    const can = (permission: string) => {
        return auth?.user?.permissions?.includes(permission);
    };

    const isOwner = (userId: string) => {
        return auth?.user?.id === userId;
    };

    return { hasRole, can, isOwner };
}
