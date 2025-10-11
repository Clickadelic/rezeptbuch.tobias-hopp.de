import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { AuthUser } from "@/types";
import { Recipe } from "@/types/Recipe";

import { GiCook } from "react-icons/gi";

interface AvatarProps {
    url?: string;
}

export default function Avatar({ url }: AvatarProps) {
    // console.log("Avatar in Avatar", url);
    const avatarUrl = "/storage/" + url;
    return (
        <>
        <ShadCnAvatar className="border border-gray-200 dark:border-gray-700">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback><GiCook className="text-gray-400" /></AvatarFallback>
        </ShadCnAvatar>
        </>
    );
}