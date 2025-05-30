"use client";

// Importing custom chart components from "@/components/ui/chart"
// These components provide reusable UI elements for building charts.
import {
  ChartContainer, // Wrapper for the chart, handles layout and configuration.
  ChartLegend, // Displays a legend for the chart.
  ChartLegendContent, // Helper for rendering the content inside the legend.
  ChartTooltip, // Displays a tooltip when hovering over the chart.
  ChartTooltipContent, // Helper for rendering the content inside the tooltip.
  type ChartConfig, // TypeScript type for chart configuration.
} from "@/components/ui/chart";

// Importing chart primitives from "recharts"
// These components are used to construct the area chart.
import {
  Area, // Represents a single area in the chart.
  AreaChart, // Main container for the area chart.
  CartesianGrid, // Adds a grid to the chart for better readability.
  XAxis, // Represents the horizontal axis of the chart.
  YAxis, // Represents the vertical axis of the chart.
} from "recharts";

// Chart configuration object
// Defines labels and colors for the desktop and mobile data series.
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)", // CSS variable for consistent theming.
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)", // CSS variable for consistent theming.
  },
} satisfies ChartConfig;

// Data for the chart
// Each object represents a data point with `month`, `desktop`, and `mobile` values.
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const AppAreaChart = () => {
  return (
    <div className="">
      {/* Title for the chart */}
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>

      {/* ChartContainer: Wrapper for the chart */}
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        {/* AreaChart: Main container for the area chart */}
        <AreaChart accessibilityLayer data={chartData}>
          {/* CartesianGrid: Adds a grid to the chart */}
          <CartesianGrid vertical={false} />

          {/* XAxis: Horizontal axis displaying months */}
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)} // Formats month names to abbreviations.
          />

          {/* YAxis: Vertical axis displaying numerical values */}
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />

          {/* ChartTooltip: Displays a tooltip on hover */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* ChartLegend: Displays a legend for the chart */}
          <ChartLegend content={<ChartLegendContent />} />

          {/* Defining gradients for the areas */}
          <defs>
            {/* Gradient for the desktop area */}
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-desktop)" // CSS variable for desktop color.
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>

            {/* Gradient for the mobile area */}
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)" // CSS variable for mobile color.
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          {/* Area for mobile data */}
          <Area
            dataKey="mobile"
            type="natural" // Smooth curve for the area.
            fill="url(#fillMobile)" // Applies the mobile gradient.
            fillOpacity={0.4}
            stroke="var(--color-mobile)" // Stroke color for the mobile area.
            stackId="a" // Stacks the areas together.
          />

          {/* Area for desktop data */}
          <Area
            dataKey="desktop"
            type="natural" // Smooth curve for the area.
            fill="url(#fillDesktop)" // Applies the desktop gradient.
            fillOpacity={0.4}
            stroke="var(--color-desktop)" // Stroke color for the desktop area.
            stackId="a" // Stacks the areas together.
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
