import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { usePage } from "@inertiajs/react";
import type { SharedPageProps } from "@/types";

export const DonutChart: React.FC = () => {
    // 👇 Props typisiert abrufen
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } =
        usePage<SharedPageProps>().props;

    // ✅ Werte als number casten (sicher gegen JSON-Strings)
    const series: number[] = [
        Number(totalUserRecipeCount),
        Number(totalRecipeCount),
    ];

    const options: ApexOptions = {
        chart: {
            type: "donut",
            height: 260,
            toolbar: { show: false },
        },
        labels: ["Eigene Rezepte", "Gesamtanzahl Rezepte"],
        legend: {
            position: "bottom",
            fontSize: "14px",
            labels: { colors: undefined },
        },
        colors: ["#059669", "#94A3B8"], // Emerald-Palette 🌿
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
            y: { formatter: (val) => `${val}` },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "55%", // Lochgröße
                    labels: {
                        show: false,
                        name: {
                            show: true,
                            fontSize: "16px",
                            
                        },
                        value: {
                            show: true,
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#059669",
                            offsetY: -10,
                            formatter: (val) => `${val}`,
                        },
                        total: {
                            show: true,
                            label: "Gesamt",
                            color: "#065f46",
                            fontSize: "16px",
                            fontWeight: 600,
                            formatter: (w) =>
                                w.globals.seriesTotals
                                    .reduce((a:string, b:number) => a + b, 0)
                                    .toString(),
                        },
                    },
                },
            },
        },
        responsive: [
            {
                breakpoint: 640,
                options: {
                    chart: { width: 200 },
                    legend: { position: "bottom" },
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={260}
            />
        </div>
    );
};

export default DonutChart;
