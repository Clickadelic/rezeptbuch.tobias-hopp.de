"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import { cn } from "@/lib/utils";

interface DonutChartProps {
    data: any[];
    title?: string;
    className?: string;
}

export default function DonutChart({ data, title, className }: DonutChartProps) {
    // Reihenfolge: Eigene Rezepte, Favoriten, andere Rezepte
    const COLORS = ["#065f46", "#e11d48", "#52525b", "#a1a1aa"];

    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl ', className)}>
            <h3 className="text-lg mb-3">{title || "Verteilung"}</h3>
            <div className="h-[260px]">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={50}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                        {data.map((_, i) => (
                            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
