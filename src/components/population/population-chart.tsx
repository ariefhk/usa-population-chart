import { PopulationData } from "@/services/api/population/population-api.type";
import PopulationWrapper from "./population-wrapper";
import LineChartPopulation from "./line-chart-population";
import PieChartPopulation from "./pie-chart-population";
import Show from "../show";

interface PopulationChartProps {
  populations?: PopulationData[];
  isLoading?: boolean;
  filterYear?: number[];
}

const PopulationChart = ({ populations, filterYear, isLoading }: PopulationChartProps) => {
  return (
    <PopulationWrapper>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Show when={!isLoading && filterYear && filterYear[0] !== 0 && filterYear[1] !== 0 && populations}>
          <LineChartPopulation data={populations} />
          <PieChartPopulation data={populations} />
        </Show>
      </div>
    </PopulationWrapper>
  );
};

export default PopulationChart;
