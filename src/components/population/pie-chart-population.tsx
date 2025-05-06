import { LabelList, Pie, PieChart } from "recharts";
import { Card } from "@/components/_shadcn-ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/_shadcn-ui/chart";
import { useWindowSize } from "@/hooks/general/use-window-size";
import { PopulationData } from "@/services/api/population/population-api.type";
import { useMemo } from "react";
import { chartConfig, pieChartColors } from "./population-chart.constant";

interface PieChartPopulationProps {
  data?: PopulationData[];
}

const PieChartPopulation: React.FC<PieChartPopulationProps> = ({ data }) => {
  const { width } = useWindowSize();

  const pieChartData = useMemo(() => {
    if (!data) return [];

    return data.map((item, index) => ({
      Year: item.Year,
      Population: item.Population,
      fill: pieChartColors[index % pieChartColors.length],
    }));
  }, [data]);

  if (!data) return null;

  return (
    <Card className="w-full md:py-3 py-2">
      <ChartContainer config={chartConfig} className="h-[300px] md:h-full w-full [&_.recharts-pie-label-text]:fill-foreground">
        <PieChart className="w-full h-full md:h-full">
          <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" className="[&_span]:mr-2" />} />
          <Pie
            data={pieChartData}
            dataKey="Population"
            nameKey="Year"
            label={({ value }) => `${(Number(value) / 1000000).toFixed(1)}M`}
            cx="50%"
            cy="50%"
            outerRadius={width < 768 ? "65%" : "75%"}
            innerRadius={0}
            labelLine={{ stroke: "var(--foreground)", strokeWidth: 1 }}
          >
            <LabelList
              dataKey="Year"
              className="fill-background text-[8px] lg:text-[12px]"
              stroke="none"
              formatter={(value: string) => value}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </Card>
  );
};

export default PieChartPopulation;
