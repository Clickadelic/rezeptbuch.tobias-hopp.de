import React from "react";

import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";

export const BarChart: React.FC = () => {
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } = usePage<SharedPageProps>().props;
    return (
        <div className="w-full max-w-3xl mx-auto">
            BarChart
        </div>
    );
};

export default BarChart;
