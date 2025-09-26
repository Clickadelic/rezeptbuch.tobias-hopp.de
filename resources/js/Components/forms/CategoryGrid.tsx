import {ToggleGroup,ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

import { Martini, IceCream, Coffee } from "lucide-react"
import { LuUtensilsCrossed } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi"; // Beispiel-Icons

interface CategoryGridProps {
  categories: {
    id: string
    name: string
    slug: string
  }[]
  selectedCategoryId?: string
  onChange: (id: string) => void
}

export default function CategoryGrid({ categories, selectedCategoryId, onChange }: CategoryGridProps) {
  return (
    <ToggleGroup
      type="single"
      value={selectedCategoryId}
      onValueChange={(val) => val && onChange(val)}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {categories.map((category) => {
        // Dynamische Icons – könnte man später aus der DB ziehen
        const iconMap: Record<string, JSX.Element> = {
          vorspeise: <LuUtensilsCrossed className="w-6 h-6" />,
          hauptgang: <PiCookingPot className="w-6 h-6" />,
          nachtisch: <IceCream className="w-6 h-6" />,
          cocktail: <Martini className="w-6 h-6" />,
          aperitif: <Coffee className="w-6 h-6" />
        }

        return (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className={cn(
              "flex flex-col items-center justify-center p-4 border rounded-xl text-center transition-all cursor-pointer",
              "hover:border-emerald-500 hover:bg-emerald-50",
              selectedCategoryId === category.id
                ? "border-primary bg-emerald-100 text-emerald-700"
                : "border-gray-200 bg-white"
            )}
          >
            <div className="mb-2 text-primary">
              {iconMap[category.slug] || <CookingPot className="w-6 h-6" />}
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}
