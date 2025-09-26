import {ToggleGroup,ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import InputLabel from "@/components/InputLabel";

import { IceCream, Coffee } from "lucide-react"
import { LuUtensilsCrossed } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi"; // Beispiel-Icons
import { LiaCocktailSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";

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
    <>
    <InputLabel className="mb-3" value="Kategorien" />
    <ToggleGroup
      type="single"
      value={selectedCategoryId || ''} 
      onValueChange={(val) => val && onChange(val)}
      className="grid md:grid-cols-7 gap-4"
    >
      {categories.map((category) => {
        
        const iconMap: Record<string, JSX.Element> = {
          vorspeise: <LuUtensilsCrossed className="w-6 h-6" />,
          hauptgang: <PiCookingPot className="w-6 h-6" />,
          nachtisch: <IceCream className="w-6 h-6" />,
          cocktail: <LiaCocktailSolid className="w-6 h-6" />,
          aperitif: <Coffee className="w-6 h-6" />
        }

        return (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className={cn(
              "flex items-center justify-center p-4 border rounded-lg text-center transition-all cursor-pointer",
              "hover:border-emerald-500 hover:bg-emerald-50",
              selectedCategoryId === category.id
                ? "border-primary bg-emerald-100 text-emerald-700"
                : "border-gray-200 bg-white"
            )}
          >
            <div className="my-2 text-primary">
              {iconMap[category.slug] || <RiCake3Line className="w-6 h-6" />}
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
    </>
  )
}
