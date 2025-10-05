import { Ingredient } from '@/types/Ingredient';
import { usePermissions, useRoleCheck } from '@/hooks/usePermissions';
import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

interface IngredientButtonProps {
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
 * <IngredientButton ingredient={ingredient} onClick={(ingredient) => console.log(ingredient)}/>
 */
export default function IngredientButton({ ingredient, onClick }: IngredientButtonProps) {
    const { auth } = usePage<SharedPageProps>().props;

    if(useRoleCheck('writer')) {
        return (
            <button
              type="button"
              onClick={() => onClick?.(ingredient)}
              className="hover:cursor-pointer inline-flex p-1 px-2.5 text-xs items-center rounded-sm bg-primary text-white hover:bg-emerald-700 transition"
            >
              {ingredient.name}
            </button> 
        );
    }
    return (
        <span className="inline-flex p-1 px-2.5 text-xs items-center rounded-sm bg-primary text-white hover:bg-emerald-700 transition">
          {ingredient.name}
        </span> 
    );

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
