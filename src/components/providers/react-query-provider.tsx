import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "../../services/react-query-instance";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClientInstance}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
