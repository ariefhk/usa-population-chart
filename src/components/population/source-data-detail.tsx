import { SourceData } from "@/services/api/population/population-api.type";
import { Link } from "react-router";
import Show from "../show";
import LinkIcon from "../icons/link-icon";

interface SourceDataDetailProps {
  source: SourceData;
}

const SourceDataDetail = ({ source }: SourceDataDetailProps) => {
  return (
    <section className="space-y-4">
      <section className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="font-medium text-lg break-words">{source.annotations.source_name}</h3>
          <Show when={source.annotations.dataset_link}>
            <Link
              to={source.annotations.dataset_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-black hover:underline whitespace-nowrap"
            >
              View Dataset
              <LinkIcon className="ml-1" />
            </Link>
          </Show>
        </div>
        <p className="text-sm text-muted-foreground break-words whitespace-pre-wrap">{source.annotations.source_description}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 text-sm">
        <div className="w-full">
          <span className="font-medium">Dataset:</span>
          <p className="text-muted-foreground break-words">{source.annotations.dataset_name}</p>
        </div>
        <div className="w-full">
          <span className="font-medium">Table ID:</span>
          <p className="text-muted-foreground break-words">{source.annotations.table_id}</p>
        </div>
        <div className="w-full">
          <span className="font-medium">Topic:</span>
          <p className="text-muted-foreground break-words">{source.annotations.topic}</p>
        </div>
        <div className="w-full">
          <span className="font-medium">Subtopic:</span>
          <p className="text-muted-foreground break-words">{source.annotations.subtopic}</p>
        </div>
      </section>
    </section>
  );
};

export default SourceDataDetail;
