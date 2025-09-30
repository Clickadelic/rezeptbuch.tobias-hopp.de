import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
// @ts-nocheck
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { PiCookingPot } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { GiCakeSlice, GiCrystalBars } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";

import type { Category } from "@/types/Category";
import type { SharedPageProps } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, JSX.Element> = {
  vorspeise: <TbSalad className="size-4 inline-flex" />,
  nachtisch: <RiCake3Line className="size-4 inline-flex" />,
  hauptgang: <GiKnifeFork className="size-4 inline-flex" />,
  cocktail: <LiaCocktailSolid className="size-4 inline-flex" />,
  backen: <GiCakeSlice className="size-4 inline-flex" />,
  snack: <GiCrystalBars className="size-4 inline-flex" />,
};

interface CategoryGridProps {
  selectedCategoryId?: number; // Anfangswert z.B. beim Editieren
  onChange: (id: number) => void; // Callback, wenn der Nutzer auswählt
}

export default function CategoryGrid({ selectedCategoryId, onChange }: CategoryGridProps) {
  const { categories } = usePage<SharedPageProps>().props;

  // Lokaler State für die aktive Auswahl
  const [activeId, setActiveId] = useState<number | null>(null);

  // Wenn sich der initiale Wert ändert (z.B. beim Bearbeiten eines Rezepts),
  // synchronisieren wir den lokalen State mit dem Prop.
  useEffect(() => {
    if (selectedCategoryId !== undefined && selectedCategoryId !== null) {
      setActiveId(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  return (
    <>
      <h4 className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
        Kategorien
      </h4>

      <ToggleGroup
        type="single"
        value={activeId !== null ? String(activeId) : undefined}
        onValueChange={(val) => {
          if (val) {
            const newId = Number(val);
            setActiveId(newId); // Lokaler State aktualisieren
            onChange(newId);    // Parent informieren
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
                "flex items-center justify-center p-2 rounded-lg border transition cursor-pointer",
                "hover:bg-emerald-50 hover:border-emerald-500",
                isActive
                  ? "border-primary bg-emerald-100 text-emerald-700 shadow-sm"
                  : "border-gray-200 bg-white dark:bg-gray-900"
              )}
            >
              <div
                className={cn(
                  "mb-1 transition-colors",
                  isActive ? "text-emerald-700" : "text-primary"
                )}
              >
                {iconMap[category.slug ?? category.name.toLowerCase()] ?? (
                  <PiCookingPot className="size-5" />
                )}
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </>
  );
}
