import PopulationWrapper from "./population-wrapper";
import { Skeleton } from "../_shadcn-ui/skeleton";

const SkeletonPopulationChart = () => {
  return (
    <PopulationWrapper>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Line Chart Skeleton */}
        <div className="h-[400px] w-full rounded-lg border bg-card p-4">
          <Skeleton className="h-full w-full" />
        </div>
        {/* Pie Chart Skeleton */}
        <div className="h-[400px] w-full rounded-lg border bg-card p-4">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </PopulationWrapper>
  );
};

export default SkeletonPopulationChart;
