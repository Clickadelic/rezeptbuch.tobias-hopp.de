import { AuthUser } from "@/types";
import { GiCook } from "react-icons/gi";

import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface AvatarProps {
    user?: AuthUser;
}

export default function Avatar({ user }: AvatarProps) {
    if (!user) {
        return (
            <ShadCnAvatar>
                <AvatarFallback><GiCook /></AvatarFallback>
            </ShadCnAvatar>
        );
    }

    return (
        <ShadCnAvatar className="border border-gray-400 dark:border-gray-700">
            <AvatarImage src={user.avatar || ""} />
            <AvatarFallback><GiCook className="text-gray-600" /></AvatarFallback>
        </ShadCnAvatar>
    );
}