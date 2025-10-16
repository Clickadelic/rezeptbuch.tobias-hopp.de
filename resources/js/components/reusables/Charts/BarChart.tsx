"use client"
import { useState, useMemo } from "react";
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface BarChartProps {
    data: any;
    title?: string;
}

export default function BarChart({ data, title = "Charts" }:any) {
    const chartData = data ||
    [
        { date: "2024-04-01", desktop: 222, mobile: 150 },
        { date: "2024-04-02", desktop: 97, mobile: 180 },
        { date: "2024-04-03", desktop: 167, mobile: 120 },
        { date: "2024-04-04", desktop: 242, mobile: 260 },
        { date: "2024-04-05", desktop: 373, mobile: 290 },
        { date: "2024-04-06", desktop: 301, mobile: 340 },
        { date: "2024-04-07", desktop: 245, mobile: 180 },
        { date: "2024-04-08", desktop: 409, mobile: 320 },
        { date: "2024-04-09", desktop: 59, mobile: 110 },
        { date: "2024-04-10", desktop: 261, mobile: 190 },
        { date: "2024-04-11", desktop: 327, mobile: 350 },
        { date: "2024-04-12", desktop: 292, mobile: 210 },
        { date: "2024-04-13", desktop: 342, mobile: 380 },
        { date: "2024-04-14", desktop: 137, mobile: 220 },
        { date: "2024-04-15", desktop: 120, mobile: 170 },
        { date: "2024-04-16", desktop: 138, mobile: 190 },
        { date: "2024-04-17", desktop: 446, mobile: 360 },
        { date: "2024-04-18", desktop: 364, mobile: 410 },
        { date: "2024-04-19", desktop: 243, mobile: 180 },
        { date: "2024-04-20", desktop: 89, mobile: 150 },
        { date: "2024-04-21", desktop: 137, mobile: 200 },
        { date: "2024-04-22", desktop: 224, mobile: 170 },
        { date: "2024-04-23", desktop: 138, mobile: 230 },
        { date: "2024-04-24", desktop: 387, mobile: 290 },
        { date: "2024-04-25", desktop: 215, mobile: 250 },
        { date: "2024-04-26", desktop: 75, mobile: 130 },
        { date: "2024-04-27", desktop: 383, mobile: 420 },
        { date: "2024-04-28", desktop: 122, mobile: 180 },
        { date: "2024-04-29", desktop: 315, mobile: 240 },
        { date: "2024-04-30", desktop: 454, mobile: 380 },
    ];

    const [activeChart, setActiveChart] = useState("desktop");

    const totals = useMemo(() => {
        return chartData.reduce(
        (acc:any, row:any) => {
            acc.desktop += row.desktop || 0;
            acc.mobile += row.mobile || 0;
            return acc;
        },
        { desktop: 0, mobile: 0 }
        );
    }, [chartData]);

    // colors match shadcn example variable names, but you can override with CSS variables
    const COLORS = {
        desktop: "var(--text-primary, #065f46)",
        mobile: "var(--primary, #f472b6)",
    };

    return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last month</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-center">
                  <div className="text-xs text-muted-foreground">Desktop</div>
                  <div className="font-medium">{totals.desktop.toLocaleString()}</div>
                </div>
                <div className="text-sm text-center">
                  <div className="text-xs text-muted-foreground">Mobile</div>
                  <div className="font-medium">{totals.mobile.toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveChart("desktop")}
                    className={`px-3 py-1 rounded-md text-sm ${activeChart === "desktop" ? "bg-slate-100 dark:bg-slate-800" : "text-muted-foreground"}`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setActiveChart("mobile")}
                    className={`px-3 py-1 rounded-md text-sm ${activeChart === "mobile" ? "bg-slate-100 dark:bg-slate-800" : "text-muted-foreground"}`}
                  >
                    Mobile
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[320px]">
              <ResponsiveContainer>
                <RechartsBarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.6} />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d) => {
                      try {
                        const dt = new Date(d);
                        return `${dt.getDate()}.${dt.getMonth() + 1}`;
                      } catch (e) {
                        return d;
                      }
                    }}
                    minTickGap={10}
                  />
                  <YAxis />
                  <Tooltip
                    contentStyle={{ borderRadius: 8 }}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <Legend />

                  {activeChart === "desktop" && (
                    <Bar dataKey="desktop" name="Desktop" fill={COLORS.desktop} radius={[2, 2, 0, 0]} />
                  )}

                  {activeChart === "mobile" && (
                    <Bar dataKey="mobile" name="Mobile" fill={COLORS.mobile} radius={[2, 2, 0, 0]} />
                  )}

                  {/* Optionally show both: */}
                  {/* <Bar dataKey="desktop" name="Desktop" fill={COLORS.desktop} />
                  <Bar dataKey="mobile" name="Mobile" fill={COLORS.mobile} /> */}
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
    );
}

// Usage:
// Import this component and make sure `recharts` is installed: `npm i recharts`
// <ChartBarInteractive />
