import { cn } from "@/lib/utils";

interface VerifidedBadgeProps {
    verified: boolean;
}

export default function VerifiedBadge({ verified }: VerifidedBadgeProps) {
    return (
        <div className="flex items-center gap-2">
            <span className={cn("size-3 rounded-full", verified ? "bg-primary" : "bg-rose-800" )}></span>
            {verified ? "verifiziert" : "unverifiziert"}
        </div>
    );
}