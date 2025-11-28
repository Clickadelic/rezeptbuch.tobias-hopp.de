
import { cn } from "@/lib/utils";
import { TfiUser } from "react-icons/tfi";
import { Recipe } from "@/types/Recipe";
import AvatarBlock from "@/components/reusables/Blocks/AvatarBlock";
import Avatar from "@/components/reusables/Avatar";
import { toHumanDate } from "@/lib/utils";
interface RecipeCardAuthorProps {
    recipe: Recipe;
    className?: string;
}

export default function RecipeCardAuthor({ recipe, className }: RecipeCardAuthorProps) {
    return (
        <div className="flex items-start justify-start gap-1">
            <Avatar url={recipe?.user?.avatar} name={recipe?.user?.name} className={cn("mt-1",className)} />
            <div className="w-full flex flex-col">
                <span>von {recipe?.user?.name}</span>
                <span className="text-gray-400">{toHumanDate(recipe?.created_at)}</span>
            </div>
        </div>
    );
}