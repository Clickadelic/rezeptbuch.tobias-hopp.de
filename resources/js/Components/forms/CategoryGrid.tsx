import { usePage } from "@inertiajs/react";

import InputLabel from "@/components/InputLabel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";

import { SharedPageProps } from "@/types";

interface CategoryGridProps {
  selectedCategoryId?: string;
  onChange: (id: string) => void;
}

const sortOrder: Record<string, number> = {
  vorspeise: 1,
  hauptgericht: 2,
  nachtisch: 3,
  cocktail: 4,
  backen: 5,
  snack: 6,
};

export default function CategoryGrid({ selectedCategoryId, onChange }: CategoryGridProps) {
    const { categories } = usePage<SharedPageProps>().props;

    const iconMap: Record<string, JSX.Element> = {
        vorspeise: <TbSalad className="size-5" />,
        hauptgericht: <PiCookingPot className="size-5" />,
        nachtisch: <RiCake3Line className="size-5" />,
        cocktail: <LiaCocktailSolid className="size-5" />,
        snack: <GiCrystalBars className="size-5" />,
        backen: <GiCakeSlice className="size-5" />,
    };

    // sicheres Array aus Paginator oder direktem Array machen
    const categoryArray = Array.isArray(categories) ? categories : categories?.data ?? [];

    const sortedCategories = [...categoryArray].sort((a, b) => {
        const aOrder = sortOrder[a.slug ?? a.name.toLowerCase()] ?? 999;
        const bOrder = sortOrder[b.slug ?? b.name.toLowerCase()] ?? 999;
        return aOrder - bOrder;
    });

    return (
        <>
            <InputLabel className="mb-3" htmlFor="category" value="Kategorie" />
            <ToggleGroup
                type="single"
                id="category"
                value={selectedCategoryId ?? ""}
                onValueChange={(val) => val && onChange(val)}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                {sortedCategories.map((category) => {
                const isActive = selectedCategoryId === String(category.id);

                return (
                    <ToggleGroupItem
                        key={String(category.id)}
                        value={String(category.id)}
                        className={`flex items-center justify-center p-3 rounded-lg border transition cursor-pointer 
                            hover:bg-emerald-50 hover:border-emerald-500 
                            ${isActive ? "border-primary bg-emerald-100 text-emerald-700 shadow-sm" : "border-gray-200 bg-white dark:bg-gray-900"}
                        `}
                    >
                    <div className={`mb-1 transition-colors ${isActive ? "text-emerald-700" : "text-primary"}`}>
                        {iconMap[category.slug ?? category.name.toLowerCase()] ?? <PiCookingPot className="size-5" />}
                    </div>
                    <span className="text-xs font-medium">{category.name}</span>
                    </ToggleGroupItem>
                );
                })}
            </ToggleGroup>
        </>
    );
}
