import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export const Chart: React.FC = () => {
  // Beispiel-Daten
    const series = [
            {
                name: "Rezepte",
                data: [44, 55, 41, 64, 22, 43],
            },
    ];

  // Chart Optionen
    const options: ApexOptions = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "90%",
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            categories: [
                "Vorspeise",
                "Hauptgang",
                "Nachtisch",
                "Cocktails",
                "Backen",
                "Snack",
            ],
        },
        yaxis: {
            title: {
                text: "Rezepte",
            },
        },
        fill: {
            opacity: 1,
        },
        colors: ["#059669"], // emerald-600 z.B.
        tooltip: {
            y: {
                formatter: (val) => `${val}`,
            },
        },
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default Chart;
