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
    communityBarData: any[];
    userBarData: any[];
    title?: string;
    className?: string;
    icon?: React.ReactNode;
}

export default function BarChart({
    communityBarData,
    userBarData,
    title,
    className,
    icon,
}: BarChartProps) {
    // Kombiniere beide Datensätze in eine Struktur
    const data = communityBarData?.map((item, index) => ({
        name: item.name,
        community: item.value,
        user: userBarData[index]?.value ?? 0,
    }));

    return (
        <div
            className={cn(
                'w-full flex flex-col gap-2 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border-b border-gray-200 dark:border-gray-700',
                className,
            )}
        >
            <h3 className="text-lg mb-3 flex gap-2">
                {icon}
                {title || 'Statistik'}
            </h3>

            <div className="h-[247px]">
                <ResponsiveContainer>
                    <RBarChart
                        data={data}
                        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                        barSize={30}
                    >
                        <CartesianGrid strokeDasharray="4 4" opacity={1} />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#f4f4f5',
                                borderRadius: 8,
                                border: '1px solid #a1a1aa',
                            }}
                            labelStyle={{ color: '#111827', fontWeight: 400 }}
                            itemStyle={{ color: '#065f46' }}
                            cursor={{ fill: '#d1fae5' }}
                        />

                        <Legend iconType="circle" />

                        {/* User */}
                        <Bar
                            dataKey="user"
                            name="Deine Rezepte"
                            fill="#034F3B"
                            radius={[6, 6, 0, 0]}
                        />

                        {/* Community */}
                        <Bar
                            dataKey="community"
                            name="Community"
                            fill="#2D9966"
                            radius={[6, 6, 0, 0]}
                        />
                    </RBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
