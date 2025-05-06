import { useCallback, useEffect, useMemo } from "react";
import { PopulationDataResponse } from "@/services/api/population/population-api.type";
import { useSearchPopulation } from "@/services/query/population-query";
import { useState } from "react";

const useListPopulation = () => {
  const {
    data: populationData,
    isLoading: isLoadingPopulationData,
    isError: isErrorPopulationData,
  } = useSearchPopulation<PopulationDataResponse>();
  const [filterYear, setFilterYear] = useState<number[]>([0, 0]);

  // population data
  const populations = useMemo(() => {
    if (!isLoadingPopulationData && filterYear[0] !== 0 && filterYear[1] !== 0)
      return populationData?.data?.filter((item) => Number(item.Year) >= filterYear[0] && Number(item.Year) <= filterYear[1]);
    return [];
  }, [isLoadingPopulationData, populationData?.data, filterYear]);

  // sources data
  const sources = useMemo(() => {
    if (!isLoadingPopulationData) return populationData?.source;
    return [];
  }, [isLoadingPopulationData, populationData?.source]);

  // available years data
  const years = useMemo(() => {
    if (!isLoadingPopulationData) return populationData?.data?.map((item) => Number(item.Year));
    return [];
  }, [isLoadingPopulationData, populationData?.data]);

  useEffect(() => {
    // set default filter year based on available years from apis
    if (!isLoadingPopulationData && populationData?.data) {
      const years = populationData.data.map((item) => Number(item.Year));
      setFilterYear([Math.min(...years), Math.max(...years)]);
    }
  }, [isLoadingPopulationData, populationData?.data]);

  // handle filter year
  const handleFilterYear = useCallback((years: number[]) => {
    setFilterYear(years);
  }, []);

  return {
    populations,
    sources,
    years,
    filterYear,
    handleFilterYear,
    isLoadingPopulationData,
    isErrorPopulationData,
  };
};

export default useListPopulation;
