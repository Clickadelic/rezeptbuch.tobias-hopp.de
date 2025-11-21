'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const description = 'An interactive area chart';

const chartConfig = {
    visitors: {
        label: 'Kategorie',
    },
    user: {
        label: 'Benutzer',
        color: 'var(--primary)',
    },
    global: {
        label: 'Global',
        color: 'var(--primary)',
    },
} satisfies ChartConfig;

export default function ChartAreaInteractive({ data }: { data: any }) {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <div className="flex flex-col gap-4">
            <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
                            <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            return value;
                        }}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                                labelFormatter={(value) => {
                                    return value;
                                }}
                                indicator="dot"
                            />
                        }
                    />
                    <Area
                        dataKey="user"
                        type="natural"
                        fill="url(#fillMobile)"
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="global"
                        type="natural"
                        fill="url(#fillDesktop)"
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}
