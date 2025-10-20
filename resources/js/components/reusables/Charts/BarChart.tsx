"use client";

import { ResponsiveContainer, BarChart as RBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface BarChartProps {
    data: any[];
    title?: string;
    className?: string;
}

export default function BarChart({ data, title, className }: BarChartProps) {
    return (
        <div className={cn("bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm", className)}>
              <h3 className="text-lg mb-3">{title || "Statistik"}</h3>
              <div className="h-[260px]">
                  <ResponsiveContainer>
                      <RBarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip
                          // Tooltip Style
                          contentStyle={{
                            backgroundColor: '#f4f4f5', // helles Grau, z.B. Tailwind slate-100
                            borderRadius: 4,
                            border: '1px solid #a1a1aa', // slate-300
                          }}
                          // Oberer Text auf Tooltip
                          labelStyle={{ color: '#111827', fontWeight: 500 }}
                          // Text auf Tooltip
                          itemStyle={{ color: '#065f46' }}
                          cursor={{ fill: '#d1fae5' }}
                        />
                        <Legend />
                        {/* Balkenfarbe */}
                        <Bar dataKey="value" name="Anzahl" fill="#065f46" radius={[4, 4, 0, 0]} />
                      </RBarChart>
                  </ResponsiveContainer>
            </div>
        </div>
    );
}
