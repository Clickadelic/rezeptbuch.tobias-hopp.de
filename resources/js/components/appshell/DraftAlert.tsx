import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { BsBell } from "react-icons/bs";
import { cn } from "@/lib/utils";


interface DraftAlertProps {
    drafts?: number
    className?: string
}

export default function DraftAlert ({ drafts, className }: DraftAlertProps) {
    if(drafts === 0) return null
    return (
        <Link href="/dashboard" className={cn("relative flex items-center gap-1 px-2 py-1.5 text-xs text-white bg-transparent rounded border border-gray-700", className)}> 
            <BsBell className=""/>{drafts}
            <div className="absolute top-1 right-1 size-[6px] rounded-full bg-rose-600 animate animate-ping delay-500 duration-1500" />
        </Link>
    )
}