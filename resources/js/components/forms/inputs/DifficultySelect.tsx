import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { BsCircleFill } from "react-icons/bs";
import { useDarkMode } from '@/hooks/useDarkMode';
const difficultyOptions = [
  { value: "einfach", label: "Einfach", icon: <BsCircleFill className="text-green-500" /> },
  { value: "mittel", label: "Mittel", icon: <BsCircleFill className="text-yellow-500" /> },
  { value: "schwer", label: "Schwer", icon: <BsCircleFill className="text-red-500" /> },
];

// Custom Option mit Icon + Label
const DifficultyOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// Custom SingleValue (für ausgewählten Wert)
const DifficultySingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

interface DifficultySelectProps {
  selectedDifficulty?: string;
  onChange?: (difficulty: string) => void;
}

export default function DifficultySelect({
  selectedDifficulty,
  onChange,
}: DifficultySelectProps) {
  const isDark = useDarkMode();
  const selectedOption = difficultyOptions.find(
    (opt) => opt.value === selectedDifficulty
  );

  return (
    <div className="w-64">
      <Select
        options={difficultyOptions}
        value={selectedOption ?? null} // Wählen… wenn kein Wert
        onChange={(option) => onChange?.(option?.value ?? "")}
        placeholder="Wählen..."
        components={{ Option: DifficultyOption, SingleValue: DifficultySingleValue }}
        classNamePrefix="react-select"
        isSearchable={false}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: "0.25rem",
            borderColor: state.isFocused ? "#065f46" : "#364153",
            boxShadow: state.isFocused ? "0 0 0 1px #065f46" : "none",
            padding: "2px 4px",
            backgroundColor: isDark ? "#111827" : "#f3f4f6",

            "&:hover": {
              borderColor: state.isFocused ? "#065f46" : "#d1d5db",
              
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
          }),
        }}
      />
    </div>
  );
}
