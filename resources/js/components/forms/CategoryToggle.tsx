import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
    PiCookingPot,
} from 'react-icons/pi';
import {
    LiaCocktailSolid,
} from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars, GiKnifeFork } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import type { Category } from '@/types/Category';
import type { SharedPageProps } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, JSX.Element> = {
    vorspeise: <TbSalad className="size-4 inline-flex" />,
    nachtisch: <RiCake3Line className="size-4 inline-flex" />,
    hauptgang: <GiKnifeFork className="size-4 inline-flex" />,
    cocktail: <LiaCocktailSolid className="size-4 inline-flex" />,
    backen: <GiCakeSlice className="size-4 inline-flex" />,
    snack: <GiCrystalBars className="size-4 inline-flex" />,
};

interface CategoryToggleProps {
    selectedCategoryId?: number;
    onChange: (id: number) => void;
}

export default function CategoryGrid({
    selectedCategoryId,
    onChange,
}: CategoryToggleProps) {
    const { categories } = usePage<SharedPageProps>().props;
    const [activeId, setActiveId] = useState<number | null>(selectedCategoryId ?? null);

    useEffect(() => {
        setActiveId(selectedCategoryId ?? null);
    }, [selectedCategoryId]);

    return (
        <>
            <h4 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                Kategorie
            </h4>
            <ToggleGroup
                type="single"
                // 👇 Immer ein definierter Wert (leerer String statt undefined)
                value={activeId !== null ? String(activeId) : ""}
                onValueChange={(val) => {
                    if (val) {
                        const newId = Number(val);
                        setActiveId(newId);
                        onChange(newId);
                    } else {
                        // Optional: wenn abgewählt (z. B. toggle off)
                        setActiveId(null);
                        onChange(0);
                    }
                }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                {categories.map((category: Category) => {
                    const isActive = activeId === category.id;

                    return (
                        <ToggleGroupItem
                            key={category.id}
                            value={String(category.id)}
                            className={cn(
                                'flex items-center justify-center p-2 rounded border transition cursor-pointer',
                                'hover:bg-emerald-50 hover:border-emerald-500',
                                isActive
                                    ? 'border-emerald-500 bg-emerald-100 text-emerald-700 shadow-sm'
                                    : 'border-gray-200 bg-white dark:bg-gray-900',
                            )}
                        >
                            <div
                                className={cn(
                                    'transition-colors',
                                    isActive ? 'text-emerald-700' : 'text-primary',
                                )}
                            >
                                {iconMap[category.slug ?? category.name.toLowerCase()] ?? (
                                    <PiCookingPot className="size-5 mt-1" />
                                )}
                            </div>
                            <span className="text-md font-medium">{category.name}</span>
                        </ToggleGroupItem>
                    );
                })}
            </ToggleGroup>
        </>
    );
}
