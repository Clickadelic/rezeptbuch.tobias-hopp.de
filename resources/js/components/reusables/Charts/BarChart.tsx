import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";

export const BarChart: React.FC = () => {
    const { totalUserRecipeCount, totalIngredientCount, totalRecipeCount } =
            usePage<SharedPageProps>().props;
    // Beispiel-Daten
    const series = [
        {
        name: "Rezepte",
        data: [totalUserRecipeCount, totalIngredientCount, totalRecipeCount],
        },
    ];

  // Chart Optionen
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 260,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
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
        formatter: (val) => `${val} €`,
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={260}
      />
    </div>
  );
};

export default BarChart;
