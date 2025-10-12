import React from "react";
import { usePage } from "@inertiajs/react";
import type { SharedPageProps } from "@/types";

import donutChartSvg from '@images/svg/donut-chart.svg';
export const DonutChart: React.FC = () => {
    // 👇 Props typisiert abrufen
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } =
        usePage<SharedPageProps>().props;

    return (
        <div className="w-full max-w-md mx-auto">
            <img src={donutChartSvg} alt="Donut Chart" />
        </div>
    );
};

export default DonutChart;
