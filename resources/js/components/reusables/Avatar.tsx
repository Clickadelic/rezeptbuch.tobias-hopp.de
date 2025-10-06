import { AuthUser } from "@/types";
import { GiCook } from "react-icons/gi";
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
        <>
            {user.avatar ? (
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                />
            ) : (
                <span className="text-gray-400">
                    <GiCook />
                </span>
            )}
        </>
    );
}