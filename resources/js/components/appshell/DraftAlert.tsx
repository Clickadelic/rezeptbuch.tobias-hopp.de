import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { BsBell } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

interface DraftAlertProps {
    drafts?: number
    className?: string
}

export default function DraftAlert ({ drafts, className }: DraftAlertProps) {
    if(drafts === 0) return null
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger data-state="instant-open" className="relative flex gap-1 items-center px-3 py-1 rounded text-sm border border-b-gray-200 border-t-gray-100 border-l-gray-100 border-r-gray-100 dark:border-t-gray-900 dark:border-l-gray-900 dark:border-r-gray-900 bg-gray-100 dark:border-b-gray-700 dark:bg-gray-900">
                    <BsBell className={cn('text-gray-500 dark:text-gray-400 size-3 bell', className)} />
                    <span className="mt-px">{drafts}</span>
                    <span className="absolute top-1 right-1 bg-rose-600 w-1.5 h-1.5 animate animate-ping duration-3000 rounded-full"></span>
                </TooltipTrigger>
                <TooltipContent side="left" className="text-white">
                    <p>Du hast {drafts == 1 ? '1 Entwurf' : drafts + ' Entwürfe'}</p>
                    <TooltipArrow className="fill-emerald-800 dark:fill-emerald-800" />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}