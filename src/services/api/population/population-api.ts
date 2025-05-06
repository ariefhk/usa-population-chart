import { AxiosResponse } from "axios";
import { axiosInstance } from "../../axios-instance";
import { PopulationDataResponse } from "./population-api.type";

export type SearchPopulationParams = {
  year?: number;
};

export const populationApi = {
  search: async ({ year }: SearchPopulationParams): Promise<AxiosResponse<PopulationDataResponse>> => {
    const url = !year
      ? "/data?drilldowns=Nation&measures=Population"
      : `/data?drilldowns=Nation&measures=Population&year=${year}`;

    return axiosInstance.get<PopulationDataResponse>(url);
  },
};
