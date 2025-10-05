
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import { TbSalad } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { cn } from "@/lib/utils";


interface SeperatorProps { 
    size?: number
    style?: string
}

/**
 * A separator component that renders an icon above a horizontal line.
 * 
 * @param {SeperatorProps} props - The props object
 * @param {number} [props.size=9] - The size of the icon, default is 7
 * @param {string} [props.style] - The style of the icon, one of "fork-knife-spoon", "fork-knife","cooking-pot", "salad", "heart"
 * 
 * @example
 * <Seperator size={10} style="cooking-pot" />
 */
export default function Seperator({ size = 12, style }: SeperatorProps) {
    
    let icon = <GiKnifeFork className={cn("text-gray-200 dark:text-gray-700 size-", "size-" + size)} />
    
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
        <div className="relative my-12 mx-auto w-full max-w-[52rem] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
                <div className="flex items-center justify-center gap-2">
                    {icon}
                </div>
            </div>
            <div className="absolute top-1/2 left-0 right-0 w-full bg-gray-200 dark:bg-gray-700 h-px"></div>
        </div>
    );
}