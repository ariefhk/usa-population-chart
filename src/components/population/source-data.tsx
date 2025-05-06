import { SourceData as SourceDataType } from "@/services/api/population/population-api.type";
import RenderList from "../render-list";
import SourceDataDetail from "./source-data-detail";
import PopulationWrapper from "./population-wrapper";

interface SourceDataProps {
  sources?: SourceDataType[];
}

const SourceData = ({ sources }: SourceDataProps) => {
  if (!sources) return null;

  return (
    <PopulationWrapper>
      <h1 className="text-2xl font-bold mb-6">United States Population Data</h1>
      <section className="rounded-lg border bg-card p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Data Source Information</h2>
        <div className="flex flex-col gap-4">
          <RenderList of={sources} render={(source, index) => <SourceDataDetail key={index} source={source} />} />
        </div>
      </section>
    </PopulationWrapper>
  );
};

export default SourceData;
