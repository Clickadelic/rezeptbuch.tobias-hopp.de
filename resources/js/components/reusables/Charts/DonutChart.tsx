import React from "react";

import { usePage } from "@inertiajs/react";
import type { SharedPageProps } from "@/types";

export const DonutChart: React.FC = () => {
    // 👇 Props typisiert abrufen
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } =
        usePage<SharedPageProps>().props;



    return (
        <div className="w-full max-w-md mx-auto">
            DonutChart
        </div>
    );
};

export default DonutChart;
