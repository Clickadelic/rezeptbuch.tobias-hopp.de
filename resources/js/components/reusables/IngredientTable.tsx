import { useState } from 'react';
import { Recipe } from '@/types/Recipe';

import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { RiResetLeftFill } from "react-icons/ri";
import { MinusIcon, PlusIcon } from "lucide-react"

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
                    <ButtonGroup>
                        <Button variant="outline" onClick={() => setCount(1)} title="Personen zurücksetzen" aria-label="Personen zurücksetzen">
                            <RiResetLeftFill />
                        </Button>
                        <Button variant="outline" onClick={() => setCount((prev) => Math.max(1, prev - 1))} disabled={count === 1} title="Personen reduzieren" aria-label="Personen reduzieren">
                            <MinusIcon />
                        </Button>
                        <Button variant="outline" disabled>
                            {count}
                            <span>{count > 1 ? ' Personen' : ' Person'}</span>
                        </Button>
                        <Button variant="outline" onClick={() => setCount((prev) => prev + 1)} title="Personen erhöhen" aria-label="Personen erhöhen">
                            <PlusIcon />
                        </Button>
                    </ButtonGroup>
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