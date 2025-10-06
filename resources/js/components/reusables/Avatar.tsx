import { AuthUser } from "@/types";
import { GiCook } from "react-icons/gi";

import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface AvatarProps {
    user?: AuthUser;
}

export default function Avatar({ user }: AvatarProps) {
    if (!user) {
        return <span className="text-gray-400">
            <GiCook />
        </span>;
    }

    return (
        <ShadCnAvatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </ShadCnAvatar>
    );
}