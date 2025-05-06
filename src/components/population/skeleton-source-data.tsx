import PopulationWrapper from "./population-wrapper";
import { Skeleton } from "../_shadcn-ui/skeleton";
import RenderList from "../render-list";

const SkeletonSourceData = () => {
  return (
    <PopulationWrapper>
      {/* Title skeleton */}
      <Skeleton className="h-8 w-64 mb-6" />
      <section className="rounded-lg border bg-card p-4 sm:p-6">
        {/* Section title skeleton */}
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="flex flex-col gap-4">
          <RenderList
            of={[1, 2]}
            render={(_, index) => (
              <section key={index + 1} className="space-y-4">
                <section className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                  <RenderList
                    of={[1, 2, 3, 4]}
                    render={(_, index) => (
                      <div key={index + 1} className="w-full">
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    )}
                  />
                </section>
              </section>
            )}
          />
        </div>
      </section>
    </PopulationWrapper>
  );
};

export default SkeletonSourceData;
