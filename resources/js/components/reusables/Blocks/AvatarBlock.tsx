import Avatar from "../Avatar";
import { Recipe } from "@/types/Recipe";
import { toHumanDate } from "@/lib/utils";

interface AvatarBlockProps {
    url?: string;
    name?: string;
    date?: string;
}

export default function AvatarBlock({ url, name, date }: AvatarBlockProps) {
    return (
        <div className="flex items-start gap-3 py-3">
            <div className="pt-1">
                <Avatar url={url} />
            </div>
            <div>
                <h3>von {name}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                    {toHumanDate(date)}
                </p>
            </div>
        </div>
    )
}