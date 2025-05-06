import Error404Page from "../pages/error/error-404-page";
import { RouteRootInterface } from "./route.types";

const errorRoutes: RouteRootInterface[] = [
  {
    name: "error-not-found",
    path: "/error/404",
    component: Error404Page,
  },
];

export default errorRoutes;
