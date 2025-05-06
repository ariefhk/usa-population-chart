import { ChartConfig } from "../_shadcn-ui/chart";

export const pieChartColors = [
  "#000000", // pure black
  "#0D0D0D", // very dark black
  "#1A1A1A", // dark black
  "#262626", // dark gray-black
  "#333333", // dark gray
  "#404040", // medium dark gray
  "#4D4D4D", // dark medium gray
  "#595959", // medium gray
  "#666666", // medium-dark gray
  "#737373", // dark-medium gray
  "#808080", // dark gray
];

export const chartConfig = {
  population: {
    label: "Population",
    color: "#000000",
  },
} satisfies ChartConfig;
