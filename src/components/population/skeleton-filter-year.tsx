import PopulationWrapper from "./population-wrapper";
import { Skeleton } from "../_shadcn-ui/skeleton";

const SkeletonFilterYear = () => {
  return (
    <PopulationWrapper className="flex flex-col sm:flex-row gap-4 py-0">
      {/* Start Year */}
      <section>
        <Skeleton className="h-4 w-20 mb-1" />
        <Skeleton className="h-10 w-full sm:w-[180px]" />
      </section>
      {/* End Year */}
      <section>
        <Skeleton className="h-4 w-20 mb-1" />
        <Skeleton className="h-10 w-full sm:w-[180px]" />
      </section>
    </PopulationWrapper>
  );
};

export default SkeletonFilterYear;
