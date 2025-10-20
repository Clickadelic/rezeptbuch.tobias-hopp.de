import { usePage } from '@inertiajs/react';
import { usePermissions } from '@/hooks/usePermissions';
import { Ingredient } from '@/types/Ingredient';
import { Button } from '@/components/ui/button';

import { SharedPageProps } from '@/types';

interface IngredientItemProps {
    ingredient: Ingredient;
    onSelect?: () => void; // <--- hier hinzufügen
}

export default function IngredientItem({ ingredient, onSelect }: IngredientItemProps) {
    const { hasRole } = usePermissions();
    const { auth } = usePage<SharedPageProps>().props;

    // Logged out / kein Zugriff
    if (!hasRole('user') || ingredient.user_id !== auth.user?.id) {
        return <span className="flex gap-2">{ingredient.name}</span>;
    }

    return (
        <div className="flex gap-2 border">
            <Button variant="link" className="flex gap-2" onClick={onSelect}>
                {ingredient.name}
            </Button>
        </div>
    );
}
