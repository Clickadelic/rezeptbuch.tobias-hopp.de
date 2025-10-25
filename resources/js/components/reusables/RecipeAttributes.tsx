
import { cn } from '@/lib/utils';

interface RecipeAttributesProps {
    className?: string
}

export default function RecipeAttributes({ className }: RecipeAttributesProps) {
    return (
        <div className={cn('flex flex-col gap-2', className)}>RecipeAttributes</div>
    );
}