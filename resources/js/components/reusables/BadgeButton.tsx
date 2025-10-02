import { Ingredient } from '@/types/Ingredient';

interface BadgeButtonProps {
  ingredient: Ingredient;
  onClick?: (ingredient: Ingredient) => void;
}

export default function BadgeButton({ ingredient, onClick }: BadgeButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(ingredient)}
      className="hover:cursor-pointer inline-flex p-1 px-2.5 text-xs items-center rounded-sm bg-primary text-white font-semibold hover:bg-emerald-700 transition"
    >
      {ingredient.name}
    </button>
  );
}
