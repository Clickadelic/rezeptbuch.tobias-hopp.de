import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, Leaf } from "lucide-react";

import { cn } from "@/lib/utils";


interface AchievementProps {
    id: number;
    name: string;
    wrapperClasses?: string;
    className?: string;
    icon: React.ReactNode;
    unlocked: boolean;
}

export default function Achievement({ id, name, wrapperClasses, className, icon, unlocked } : AchievementProps) {
    return (
        <div className={cn("w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-900", wrapperClasses)}>
            <div className={cn("w-44 aspect-video gap-2 flex flex-col rounded-lg border border-gray-400 dark:border-gray-700 text-gray-800 justify-between items-center p-3 cursor-not-allowed opacity-50", className, unlocked && "bg-emerald-100 border-gray-400 text-white cursor-default opacity-100")}>
              {icon}
              <ul>
                <li className="text-xs text-gray-600">5 Rezepte favorisieren</li>
                {/* <li className="text-xs text-gray-600">5 Rezepte kommentieren</li>
                <li className="text-xs text-gray-600">5 Rezepte kommentieren</li> */}
              </ul>
              <h4 className="text-xl text-gray-800 dark:text-gray-200 font-la-belle-aurore">{name}</h4>
            </div>
        </div>
    );
}