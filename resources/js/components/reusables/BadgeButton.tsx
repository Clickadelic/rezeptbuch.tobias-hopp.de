import { Ingredient } from '@/types/Ingredient';

interface BadgeButtonProps {
  ingredient: Ingredient;
  onClick?: (ingredient: Ingredient) => void;
}

/**
 * A button that displays the name of an ingredient and triggers an onClick event when clicked.
 * 
 * @param {ingredient} ingredient - The ingredient to display on the button.
 * @param {onClick} onClick - An optional callback function to trigger when the button is clicked.
 * 
 * @example
 * <BadgeButton ingredient={ingredient} onClick={(ingredient) => console.log(ingredient)}/>
 */
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
