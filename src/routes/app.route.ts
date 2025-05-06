import HomePage from "../pages/home-page";
import { RouteRootInterface } from "./route.types";

const appRoutes: RouteRootInterface[] = [
  {
    name: "home-page",
    path: "/",
    component: HomePage,
  },
];

export default appRoutes;
