import React from "react";
import Select, { SingleValue } from "react-select";
import { TbSalad } from "react-icons/tb";
import { PiCookingPot } from "react-icons/pi";
import { RiCake3Line } from "react-icons/ri";
import { LiaCocktailSolid } from "react-icons/lia";
import { GiCrystalBars, GiCakeSlice } from "react-icons/gi";

type CategoryOption = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const categoryOptions: CategoryOption[] = [
  { value: "vorspeise", label: "Vorspeise", icon: <TbSalad className="size-5" /> },
  { value: "hauptgericht", label: "Hauptgericht", icon: <PiCookingPot className="size-5" /> },
  { value: "nachtisch", label: "Nachtisch", icon: <RiCake3Line className="size-5" /> },
  { value: "cocktail", label: "Cocktail", icon: <LiaCocktailSolid className="size-5" /> },
  { value: "snack", label: "Snack", icon: <GiCrystalBars className="size-5" /> },
  { value: "backen", label: "Backen", icon: <GiCakeSlice className="size-5" /> },
];

interface CategorySelectProps {
  value?: CategoryOption | null;
  onChange?: (value: SingleValue<CategoryOption>) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={categoryOptions}
      placeholder="Kategorie auswählen..."
      classNamePrefix="category-select"
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "0.5rem",
          padding: "0.2rem",
          borderColor: "#d1d5db",
          boxShadow: "none",
          "&:hover": { borderColor: "#9ca3af" },
        }),
        option: (base, state) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          backgroundColor: state.isSelected
            ? "#e5e7eb"
            : state.isFocused
            ? "#f3f4f6"
            : "white",
          color: "#111827",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }),
      }}
      formatOptionLabel={(option: CategoryOption) => (
        <div className="flex items-center gap-2">
          {option.icon}
          <span>{option.label}</span>
        </div>
      )}
    />
  );
};

export default CategorySelect;
