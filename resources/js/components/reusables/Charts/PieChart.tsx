import React from 'react';

import { usePage } from '@inertiajs/react';
import type { SharedPageProps } from '@/types';

export default function PieChart() {
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } =
        usePage<SharedPageProps>().props as {
            totalUserRecipeCount: number;
            totalIngredientCount: number;
            totalRecipeCount: number;
        };
    return <div className="w-full max-w-md mx-auto">PieChart</div>;
}
