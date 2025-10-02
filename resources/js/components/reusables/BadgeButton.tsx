import { Ingredient } from '@/types/Ingredient';
import { Button } from '../ui/button';

interface BadgeButtonProps {
  ingredient: Ingredient;
  onClick?: (ingredient: Ingredient) => void;
}

export default function BadgeButton({ ingredient, onClick }: BadgeButtonProps) {
  return (
    <Button
      type="button"
      onClick={() => onClick?.(ingredient)}
      className="inline-flex items-center rounded-md px-3 py-1 bg-primary text-white font-semibold hover:bg-primary/90 transition"
    >
      {ingredient.name}
    </Button>
  );
}
