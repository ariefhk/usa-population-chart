import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card } from "@/components/_shadcn-ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/_shadcn-ui/chart";
import { useMemo } from "react";
import { PopulationData } from "@/services/api/population/population-api.type";
import { chartConfig } from "./population-chart.constant";

interface LineChartPopulationProps {
  data?: PopulationData[];
}

const LineChartPopulation: React.FC<LineChartPopulationProps> = ({ data }) => {
  const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].reverse();
  }, [data]);

  if (sortedData.length === 0) return null;

  return (
    <Card className="h-full md:py-3 py-2">
      <ChartContainer config={chartConfig} className="h-full  p-0">
        <LineChart
          accessibilityLayer
          data={sortedData}
          margin={{
            top: 10,
            left: 10,
            right: 40,
            bottom: 0,
          }}
          width={500}
          height={400}
          className="h-full w-full "
        >
          <CartesianGrid vertical={true} horizontal={true} strokeDasharray="3 3" />
          <XAxis
            dataKey="Year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            interval={0}
            padding={{ left: 0, right: 0 }}
            angle={-45}
            textAnchor="end"
            height={40}
            tick={{ fontSize: 10 }}
            className="text-[8px] sm:text-xs"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            domain={["dataMin - 2000000", "dataMax + 3000000"]}
            tick={{ fontSize: 10 }}
            className="text-[8px] sm:text-xs"
          />
          <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" className="[&_span]:mr-2" />} />
          <Line
            dataKey="Population"
            type="monotone"
            stroke="#000000"
            strokeWidth={2}
            dot={{
              fill: "#000000",
              r: 4,
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={8}
              className="fill-foreground text-[8px] sm:text-xs"
              formatter={(value: number) => `${(value / 1000000).toFixed(1)}M`}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </Card>
  );
};

export default LineChartPopulation;
