import SourceData from "@/components/population/source-data";
import useListPopulation from "@/hooks/population/use-list-population";
import FilterYear from "@/components/population/filter-year";
import PopulationChart from "@/components/population/population-chart";
import SkeletonSourceData from "@/components/population/skeleton-source-data";
import SkeletonFilterYear from "@/components/population/skeleton-filter-year";
import SkeletonPopulationChart from "@/components/population/skeleton-population-chart";

const PopulationPage = () => {
  const { populations, sources, years, filterYear, handleFilterYear, isLoadingPopulationData } = useListPopulation();

  // Skeleton
  if (isLoadingPopulationData) {
    return (
      <>
        <SkeletonSourceData />
        <SkeletonFilterYear />
        <SkeletonPopulationChart />
      </>
    );
  }

  return (
    <>
      <SourceData sources={sources} />
      <FilterYear years={years} filterYear={filterYear} handleFilterYear={handleFilterYear} />
      <PopulationChart populations={populations} filterYear={filterYear} isLoading={isLoadingPopulationData} />
    </>
  );
};

export default PopulationPage;
