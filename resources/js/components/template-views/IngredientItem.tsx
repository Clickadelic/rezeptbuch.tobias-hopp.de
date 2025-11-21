import { usePage } from '@inertiajs/react';
import { usePermissions } from '@/hooks/usePermissions';
import { Ingredient } from '@/types/Ingredient';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { SharedPageProps } from '@/types';

interface IngredientItemProps {
    ingredient: Ingredient;
    onSelect?: () => void; // <--- hier hinzufügen
}

export default function IngredientItem({ ingredient, onSelect }: IngredientItemProps) {
    const { hasRole } = usePermissions();
    const { auth } = usePage<SharedPageProps>().props;

    if (!hasRole('user') || ingredient.user_id !== auth.user?.id) {
        return <div className="mt-1.5 inline-flex">{ingredient.name}</div>;
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="link"
                        className="p-0 text-base"
                        onClick={onSelect}
                        aria-label="Diese Zutat gehört Dir."
                    >
                        {ingredient.name}
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="text-white">
                    <p>Diese Zutat gehört Dir, klicke zum Bearbeiten.</p>
                    <TooltipArrow className="fill-primary dark:fill-primary" />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
