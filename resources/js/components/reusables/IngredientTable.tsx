import { Button } from '@/components/ui/button';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { useState } from 'react';
import { Recipe } from '@/types/Recipe';
import { BiReset } from "react-icons/bi";
interface IngredientTableProps {
    recipe: Recipe
}

export default function IngredientTable({ recipe }: IngredientTableProps) {
    const [count, setCount] = useState<number>(1);
    return (
        <div className="w-full md:w-[32rem] md:mx-auto">
            <div className="w-full flex flex-col gap-2 justify-between items-center mb-10">
                <h4 className="font-medium text-xl mb-5">Zutaten für</h4>
                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => setCount(1)}
                        className="py-2 px-2 hover:cursor-pointer shadow-none border-gray-400 text-gray-400 hover:border-rose-700"
                        variant="dangerOutline"
                        size="sm"
                        title="Personen zurücksetzen"
                        aria-label="Personen zurücksetzen"
                    >
                        <BiReset />
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
                        <FiMinus />
                    </Button>
                    <div className="cursor-default w-[10rem] font-medium text-xl px-3 text-center">
                        {count}
                        <span>{count > 1 ? ' Personen' : ' Person'}</span>
                    </div>
                    <Button
                        onClick={() => setCount((prev) => prev + 1)}
                        className="py-2 px-2 hover:cursor-pointer shadow-none"
                        variant="primaryOutline"
                        size="sm"
                        title="Personen erhöhen"
                        aria-label="Personen erhöhen"
                    >
                        <GoPlus />
                    </Button>
                    
                </div>
            </div>
            <table className="table mx-auto w-[20rem] overflow-x-auto text-gray-800">
                <thead className=" text-gray-700 dark:text-gray-400">
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
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
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
    );
}