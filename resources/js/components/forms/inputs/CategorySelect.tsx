import Select, { components } from "react-select";

import InputLabel from "@/components/forms/inputs/InputLabel";

import { TbSalad } from "react-icons/tb";
import { PiCookingPot } from "react-icons/pi";
import { RiCake3Line } from "react-icons/ri";
import { LiaCocktailSolid } from "react-icons/lia";
import { GiCrystalBars } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { useDarkMode } from '@/hooks/useDarkMode';

import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: 1, label: "Vorspeise", icon: <TbSalad className="size-5 text-primary" /> },
  { value: 2, label: "Hauptgericht", icon: <PiCookingPot className="size-5 text-primary" /> },
  { value: 3, label: "Nachtisch", icon: <RiCake3Line className="size-5 text-primary" /> },
  { value: 4, label: "Cocktail", icon: <LiaCocktailSolid className="size-5 text-primary" /> },
  { value: 5, label: "Backen", icon: <GiCakeSlice className="size-5 text-primary" /> },
  { value: 6, label: "Snack", icon: <GiCrystalBars className="size-5 text-primary" /> },
];

// Custom Option mit Icon + Label
const IconOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// Custom SingleValue (für ausgewählten Wert)
const IconSingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

interface CategorySelectProps {
  selectedCategoryId?: number;
  onChange?: (categoryId: number) => void;
  className?: string;
}

export default function CategorySelect({
  selectedCategoryId,
  onChange,
  className
}: CategorySelectProps) {
  const isDark = useDarkMode();

  const selectedOption = categoryOptions.find(
    (opt) => opt.value === selectedCategoryId
  );

  return (
    <div className={cn("w-full", className)}>
      <InputLabel htmlFor="category" value="Kategorie" description="Wähle eine Kategorie unter der das Rezept gelistet wird." />
      <Select
        id="category"
        options={categoryOptions}
        value={selectedOption ?? null} // Wählen… wenn kein Wert
        onChange={(option) => onChange?.(option?.value ?? 0)}
        placeholder="Bitte wählen..."
        components={{ Option: IconOption, SingleValue: IconSingleValue }}
        classNamePrefix="react-select"
        isSearchable={false}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: "0.25rem",
            borderColor: isDark ? "#364153" : "#e5e7eb",
            boxShadow: state.isFocused ? "0 0 0 1px #065f46" : "none",
            padding: "2px 4px",
            backgroundColor: isDark ? "#111827" : "#f3f4f6",
            "&:hover": {
              borderColor: isDark ? "#364153" : "#e5e7eb",
            },
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            height: 0,
            width: 0,
            opacity: 0,
          }),
          // Text when selected
          singleValue: (base) => ({
            ...base,
            color: isDark ? "#f9fafb" : "#1f2937",
          }),
          // Dropdown text
          option: (base, state) => ({
            ...base,
            color: isDark ? "#f9fafb" : "#1f2937",
            backgroundColor: state.isFocused
              ? isDark
                ? "#1f2937"
                : "#f3f4f6"
              : isDark
              ? "#111827"
              : "#ffffff",
            cursor: "pointer",
            borderRadius: "0.35rem",
          }),
          menu : (base) => ({
            ...base,
            backgroundColor: isDark ? "#111827" : "#f3f4f6",
            padding: "2px 4px",
            borderRadius: "0.5rem",
            border: isDark ? "1px solid #116045" : "1px solid #116045",
          })
        }}
      />
    </div>
  );
}
