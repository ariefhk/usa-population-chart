import { RouteRootInterface } from "./route.types";
import PopulationPage from "../pages/app/population-page";
import AppLayout from "@/layouts/app-layout";

const appRoutes: RouteRootInterface[] = [
  {
    name: "app",
    path: "/",
    component: AppLayout,
    routes: [
      {
        name: "population-page",
        path: "/",
        component: PopulationPage,
      },
    ],
  },
];

export default appRoutes;
