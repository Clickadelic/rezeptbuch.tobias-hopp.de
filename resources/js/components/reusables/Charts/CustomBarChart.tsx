import React from 'react';

import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { Bar, BarChart } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

export const CustomBarChart: React.FC = () => {
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } = usePage<SharedPageProps>().props;
    return <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>;
};

export default BarChart;
