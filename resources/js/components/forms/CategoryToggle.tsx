"use client"

import type React from "react"

import { usePage } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { PiCookingPot } from "react-icons/pi"
import { LiaCocktailSolid } from "react-icons/lia"
import { RiCake3Line } from "react-icons/ri"
import { GiCakeSlice, GiCrystalBars, GiKnifeFork } from "react-icons/gi"
import { TbSalad } from "react-icons/tb"

import type { Category } from "@/types/Category"
import type { SharedPageProps } from "@/types"

import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactElement> = {
  vorspeise: <TbSalad className="size-4 inline-flex" />,
  nachtisch: <RiCake3Line className="size-4 inline-flex" />,
  hauptgang: <GiKnifeFork className="size-4 inline-flex" />,
  cocktail: <LiaCocktailSolid className="size-4 inline-flex" />,
  backen: <GiCakeSlice className="size-4 inline-flex" />,
  snack: <GiCrystalBars className="size-4 inline-flex" />,
}

interface CategoryToggleProps {
  selectedCategoryId?: number
  onChange: (id: number) => void
}

export default function CategoryGrid({ selectedCategoryId, onChange }: CategoryToggleProps) {
  const { categories } = usePage<SharedPageProps>().props
  const [activeId, setActiveId] = useState<number | null>(selectedCategoryId ?? null)

  useEffect(() => {
    setActiveId(selectedCategoryId ?? null)
  }, [selectedCategoryId])

  return (
    <>
      <h4 className="block font-medium text-gray-800 dark:text-gray-200 mb-1">Kategorie</h4>
      <ToggleGroup
        type="single"
        value={activeId !== null ? String(activeId) : undefined}
        onValueChange={(val) => {
          if (val) {
            const newId = Number(val)
            setActiveId(newId)
            onChange(newId)
          }
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {categories.map((category: Category) => {
          const isActive = activeId === category.id

          return (
            <ToggleGroupItem
              key={category.id}
              value={String(category.id)}
              className={cn(
                "flex items-center justify-center p-2 rounded border border-primary transition cursor-pointer",
                isActive ? "bg-primary" : "bg-primary dark:bg-primary text-white dark:text-gray-200 hover:text-primary",
              )}
            >
              <div className={cn("transition-colors", isActive ? "text-primary" : "text-white dark:text-gray-200")}>
                {iconMap[category.slug ?? category.name.toLowerCase()] ?? (
                  <PiCookingPot className="size-4 inline-flex" />
                )}
              </div>
              <span className="text-base font-medium">{category.name}</span>
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
    </>
  )
}
