import "./styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutePages from "./routes";
import { BrowserRouter } from "react-router";
import ReactQueryProvider from "./components/providers/react-query-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <BrowserRouter>
        <RoutePages />
      </BrowserRouter>
    </ReactQueryProvider>
  </StrictMode>
);
