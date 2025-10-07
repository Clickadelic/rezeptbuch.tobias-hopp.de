import { cn } from "@/lib/utils";

interface AlteringBlockProps {
    direction?: 'left' | 'right'
    className?: string
}

export default function AlteringBlock({ className }: AlteringBlockProps) {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className={cn("w-full flex gap-2 items-center justify-center", className ?? "")}>
                <div className="w-1/2 h-1 bg-primary">
                    img
                </div>
                <div className="w-1/2 h-1 bg-primary">
                    Text
                </div>
            </div>
        </div>
    );
}