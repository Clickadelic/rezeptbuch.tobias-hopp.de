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
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger data-state="instant-open" className="relative flex gap-1 items-center px-3 py-1 rounded text-sm border border-gray-200 bg-gray-100 dark:bg-gray-900">
                        <BsBell className={cn('size-3', className)} />
                        <span className="mt-px">{drafts}</span>
                        <span className="absolute top-1 right-1 bg-rose-600 w-1.5 h-1.5 animate animate-ping duration-3000 rounded-full"></span>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-white">
                        <p>Du hast {drafts == 1 ? '1 Entwurf' : drafts + ' Entwürfe'}</p>
                        <TooltipArrow className="fill-emerald-800 dark:fill-emerald-800" />
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="absolute top-1 right-1 size-[6px] rounded-full bg-rose-600" />
        </>
    )
}