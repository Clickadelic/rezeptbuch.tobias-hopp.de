
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { BsBookmarkHeart } from 'react-icons/bs';
import { PiCookingPot } from "react-icons/pi";
import { TbSalad } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { FaHeart } from "react-icons/fa6";
import { match } from "assert";

interface SeperatorProps { 
    size?: number
    style?: string
}

export default function Seperator({ size = 7, style }: SeperatorProps) {
    
    let icon = <GiKnifeFork className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
    switch (style) {
        case "fork-knife-spoon":
            icon = <GiForkKnifeSpoon className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
            break;
        case "cooking-pot":
            icon = <PiCookingPot className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
            break;
        case "salad":
            icon = <TbSalad className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
            break;
        case "heart":
            icon = <FaHeart className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
            break;
        default:
            icon = <GiKnifeFork className={cn("text-gray-200 dark:text-gray-700", "size-" + size)} />
    }
    
    
    return (
        <div className="relative mx-auto w-full max-w-[52rem] flex items-center justify-center my-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
                <div className="flex items-center justify-center gap-2">
                    {icon}
                </div>
            </div>
            <div className="absolute top-1/2 left-0 right-0 w-full bg-gray-200 dark:bg-gray-700 h-px z-10"></div>
        </div>
    );
}