import { cn } from '@/lib/utils';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
interface BoxLabelProps {
    icon?: React.ReactNode
    label?: string
    hoverContent?: string
    className?: string
}

export default function BoxLabel ({ icon,hoverContent, label, className }: BoxLabelProps) {
    return (
        <div className={cn('flex gap-2 justify-between items-center bg-rose-200', className)}>
            <HoverCard>
                <HoverCardTrigger>{icon}</HoverCardTrigger>
                <HoverCardContent>
                    {hoverContent && <span className="text-sm">{hoverContent}</span>}
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}