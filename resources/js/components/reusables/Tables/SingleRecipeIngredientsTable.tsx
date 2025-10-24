import { useState } from 'react';
import { Recipe } from '@/types/Recipe';

import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group';
import { RiResetLeftFill } from 'react-icons/ri';
import { MinusIcon, PlusIcon } from 'lucide-react';

import Seperator from '@/components/reusables/Seperator';

import { cn } from '@/lib/utils';

interface IngredientsTableProps {
    recipe: Recipe;
}

/**
 * A table component to display recipe ingredients.
 *
 * @param {Recipe} recipe The recipe to display ingredients for.
 * @returns {JSX.Element} The table component.
 */
export default function SingleRecipeIngredientsTable({ recipe }: IngredientsTableProps) {
    const [count, setCount] = useState<number>(1);
    if (!recipe.ingredients) return null;

    return (
        <>
            <Seperator />
            <div className="w-full md:w-[32rem] md:mx-auto">
                <div className="w-full flex flex-col gap-2 justify-between items-center mb-10">
                    <div className="flex flex-col items-center justify-center gap-5 md:w-[22rem]">
                        <div>
                            <div className="cursor-default w-[14rem] font-medium text-xl flex gap-3 px-3 text-center">
                                <span>
                                    Zutaten für {count > 1 ? `${count} Personen` : '1 Person'}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <Button
                                onClick={() => setCount(1)}
                                className="py-2 px-2 hover:cursor-pointer shadow-none text-rose-700 border-rose-700 hover:border-rose-700"
                                variant="dangerOutline"
                                size="sm"
                                title="Personen zurücksetzen"
                                aria-label="Personen zurücksetzen"
                            >
                                <RiResetLeftFill />
                            </Button>
                            <Button
                                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                                className="py-2 px-2 hover:cursor-pointer shadow-none"
                                variant="primaryOutline"
                                size="sm"
                                disabled={count === 1}
                                title="Personen reduzieren"
                                aria-label="Personen reduzieren"
                            >
                                <MinusIcon />
                            </Button>
                            <Button
                                onClick={() => setCount((prev) => prev + 1)}
                                className="py-2 px-2 hover:cursor-pointer shadow-none"
                                variant="primary"
                                size="sm"
                                title="Personen erhöhen"
                                aria-label="Personen erhöhen"
                            >
                                <PlusIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <table className="table rounded-lg bg-gray-100 dark:bg-gray-700 mx-auto w-full md:w-[28rem] overflow-x-auto text-gray-800">
                    <thead className=" text-gray-800 dark:text-gray-200 font-normal">
                        <tr>
                            <th className="p-3 text-left w-24">Menge</th>
                            <th className="p-3 text-left">Einheit</th>
                            <th className="p-3 text-left">Zutat</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-gray-200 divide-y divide-gray-100 dark:divide-gray-700">
                        {recipe.ingredients?.map((ingredient) => (
                            <tr
                                key={ingredient.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                            >
                                <td className="p-3">
                                    {((ingredient.pivot?.quantity ?? 0) as number) * count}
                                </td>
                                <td className="p-3">{ingredient.pivot?.unit}</td>
                                <td className="p-3">{ingredient.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Seperator />
        </>
    );
}
