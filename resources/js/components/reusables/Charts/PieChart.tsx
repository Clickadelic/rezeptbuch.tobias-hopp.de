import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { usePage } from "@inertiajs/react";
import type { SharedPageProps } from "@/types";

export default function PieChart () {
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } = usePage<SharedPageProps>().props as {
        totalUserRecipeCount: number;
        totalIngredientCount: number;
        totalRecipeCount: number;
    };

    // ✅ Werte explizit als number-Array casten
    const series: number[] = [
        Number(totalUserRecipeCount),
        Number(totalIngredientCount),
        Number(totalRecipeCount),
    ];

    const options: ApexOptions = {
        chart: {
            type: "pie",
            height: 260,
            toolbar: {
                show: false,
            },
        },
        labels: ["Eigene Rezepte", "Zutaten", "Gesamtanzahl Rezepte"],
        legend: {
            position: "bottom",
        },
        dataLabels: {
            enabled: true,
            formatter: (val: string | number, opts) => {
                const name = opts.w.globals.labels[opts.seriesIndex];
                const percent =
                    typeof val === "number"
                        ? val.toFixed(1)
                        : Number(val).toFixed(1);
                return `${name}: ${percent}%`;
            },
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}`,
            },
        },
        colors: ["#059669", "#10B981", "#34D399"],
        responsive: [
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                height={260}
            />
        </div>
    );
};
