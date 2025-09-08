import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Ingredient } from '@/types/Ingredient';
import { SlClose } from "react-icons/sl";
interface BadgeButtonProps {
    ingredient: Ingredient
}

export default function BadgeButton ({ ingredient }: BadgeButtonProps) {
    return (
        <div className="flex items-center gap-.5 group">
            <Badge variant="primary" className="group-hover:bg-rose-500 group-hover:border-rose-500 inline-flex whitespace-nowrap">{ingredient.name}</Badge>
            <Button variant="ghost" size="sm" className="group-hover:text-rose-500 hover:text-rose-500" title="Zutat entfernen">
                <SlClose className="size-4 mt-.5" />
            </Button>
        </div>
    )
}