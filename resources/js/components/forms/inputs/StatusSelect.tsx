import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

const statusOptions = [
  { value: "draft", label: "Draft", icon: <BsCircle className="size-5" /> },
  { value: "published", label: "Published", icon: <BsCheckCircle className="size-5" /> },
];

// Custom Option mit Icon + Label
const StatusOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// Custom SingleValue (für ausgewählten Wert)
const StatusSingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2">
      {props.data.icon}
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

interface StatusSelectProps {
  selectedStatus?: string;
  onChange?: (status: string) => void;
}

export default function StatusSelect({ selectedStatus, onChange }: StatusSelectProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const selectedOption = statusOptions.find((opt) => opt.value === selectedStatus);

  return (
    <div className="w-64">
      <Select
        options={statusOptions}
        value={selectedOption ?? null} // Wählen… wenn kein Wert
        onChange={(option) => onChange?.(option?.value ?? "")}
        placeholder="Wählen..."
        components={{ Option: StatusOption, SingleValue: StatusSingleValue }}
        classNamePrefix="react-select"
        isSearchable={false}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: "0.25rem",
            borderColor: state.isFocused ? "#065f46" : "#e5e7eb",
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
          singleValue: (base) => ({
            ...base,
            color: isDark ? "#f9fafb" : "#1f2937",
          }),
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
          }),
        }}
      />
    </div>
  );
}
