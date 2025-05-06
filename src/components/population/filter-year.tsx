import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../_shadcn-ui/select";
import PopulationWrapper from "./population-wrapper";

interface FilterYearProps {
  years?: number[];
  filterYear: number[];
  handleFilterYear: (years: number[]) => void;
}

const FilterYear: React.FC<FilterYearProps> = ({ years, filterYear, handleFilterYear }) => {
  if (!years) return null;

  return (
    <PopulationWrapper className="flex flex-col sm:flex-row gap-4 py-0">
      <section>
        <span className="font-medium">Start Year</span>
        <Select value={filterYear[0].toString()} onValueChange={(value) => handleFilterYear([parseInt(value), filterYear[1]])}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Start Year" />
          </SelectTrigger>
          <SelectContent>
            {years &&
              years.map((year) => (
                <SelectItem key={year} value={year.toString()} disabled={year > filterYear[1]}>
                  {year}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </section>
      <section>
        <span className="font-medium">End Year</span>
        <Select value={filterYear[1].toString()} onValueChange={(value) => handleFilterYear([filterYear[0], parseInt(value)])}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="End Year" />
          </SelectTrigger>
          <SelectContent>
            {years &&
              years.map((year) => (
                <SelectItem key={year} value={year.toString()} disabled={year < filterYear[0]}>
                  {year}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </section>
    </PopulationWrapper>
  );
};

export default FilterYear;
