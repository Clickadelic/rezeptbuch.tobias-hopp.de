'use client';

import {
    ResponsiveContainer,
    BarChart as RBarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from 'recharts';
import { cn } from '@/lib/utils';

interface BarChartProps {
    data: any[];
    title?: string;
    className?: string;
    icon?: React.ReactNode;
}

export default function BarChart({ data, title, className, icon }: BarChartProps) {
    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border-b border-gray-200 dark:border-gray-700 ', className)}>
            <h3 className="text-lg mb-3 flex gap-2">
                {icon}
                {title || 'Statistik'}
            </h3>
            <div className="h-[260px]">
                <ResponsiveContainer>
                    <RBarChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        barSize={60}
                    >
                        <CartesianGrid strokeDasharray="4 4" opacity={1} />
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
                        <Legend
                            iconType="circle"
                            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
                        />
                        {/* Balkenfarbe */}
                        <Bar dataKey="value" name="Anzahl" fill="#065f46" radius={[4, 4, 0, 0]} />
                    </RBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
