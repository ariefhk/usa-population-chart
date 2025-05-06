/* eslint-disable @typescript-eslint/no-explicit-any */

export type PopulationData = {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
};

export type SourceData = {
  measures: string[];
  annotations: {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
  };
  name: string;
  substitutions: any[]; //i don't know what this is from api response
};

export type PopulationDataResponse = {
  data: PopulationData[];
  source: SourceData[];
};
