"use client"

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

/**
 * A React component that renders a donut chart with interactive segments.
 * Each segment represents a category of visitors and the percentage of total visitors.
 * The chart is rendered using the Recharts library.
 * 
 * @param {any} data - The data to render in the chart. The data should be an array of objects
 * with the following properties:
 * - category: The category of visitors (e.g. "Desktop", "Mobile", etc.)
 * - visitors: The number of visitors in the category
 * - fill: The color of the segment in the chart
 * 
 * @returns {React.ReactElement} - The donut chart component
 */
export default function DonutChart({ data }:any) {
    const chartData =
        data ||
        [
            { category: "Desktop", visitors: 275, fill: "var(--chart-1, #065f46)" },
            { category: "Mobile", visitors: 200, fill: "var(--chart-2, #f472b6)" },
            { category: "Tablet", visitors: 125, fill: "var(--chart-3, #34d399)" },
        ];

    const [activeIndex, setActiveIndex] = React.useState(null);

    const onPieEnter = (_:any, index:any) => setActiveIndex(index);
    const onPieLeave = () => setActiveIndex(null);

    const total = chartData.reduce((sum:any, entry:any) => sum + entry.visitors, 0);

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-1">Donut Chart - Interactive</h3>
                <p className="text-sm text-muted-foreground mb-4">Distribution of total visitors by device type</p>

                <div style={{ width: "100%", height: 320 }}>
                    <ResponsiveContainer>
                        <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="category"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={4}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                        >
                            {chartData.map((entry:any, index:any) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.fill}
                                opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                                strokeWidth={activeIndex === index ? 3 : 1}
                                stroke={activeIndex === index ? "#fff" : undefined}
                            />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: 8 }}
                            formatter={(value) => [value, "Visitors"]}
                        />
                        <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-center gap-4 mt-3 text-sm">
                    {chartData.map((entry:any) => (
                        <div key={entry.category} className="text-center">
                        <div className="text-xs text-muted-foreground">{entry.category}</div>
                        <div className="font-medium">
                            {((entry.visitors / total) * 100).toFixed(1)}%
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}