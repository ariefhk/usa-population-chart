import { QueryOptions, useQuery } from "@tanstack/react-query";
import { populationApi, SearchPopulationParams } from "../api/population/population-api";

export const POPULATION_QUERY_KEY = {
  SEARCH: "search-population",
};

export const useSearchPopulation = <TResponse = unknown>(
  params?: SearchPopulationParams,
  querySetting?: QueryOptions<TResponse>
) => {
  return useQuery({
    queryKey: [POPULATION_QUERY_KEY.SEARCH, params?.year],
    queryFn: async () => {
      const response = await populationApi.search({
        year: params?.year,
      });

      return response.data as TResponse;
    },
    ...querySetting,
  });
};
