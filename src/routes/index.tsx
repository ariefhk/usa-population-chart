import { FC, JSX } from "react";
import { Route, Routes } from "react-router";
import { RouteRootInterface } from "./route.types";
import RedirectTo from "../components/redirect-to";

// Search for all route files in the current directory
const routeModules = import.meta.glob("./**/*.route.ts", { eager: true });

// Generate a list of all routes
const generatedRouteList = Object.values(routeModules).flatMap((module) => (module as { default: RouteRootInterface }).default);

// Create a list of all routes
const routes: RouteRootInterface[] = [
  ...generatedRouteList,
  {
    name: "error-not-found-global",
    path: "*",
    component: () => <RedirectTo to="/error/404" />,
  },
];

// Render a route
const renderRoute = (route: RouteRootInterface, index: number) => {
  // Render all routes within the current route
  const renderRoutes = (routes: RouteRootInterface[]) => {
    if (routes) {
      return routes.map((routeChild: RouteRootInterface, index) => renderRoute(routeChild, index));
    }
    return null;
  };

  // Get the component for the current route
  const Component = route.component as unknown as () => JSX.Element;

  // Render the route
  return (
    <Route path={route.path} key={`${index + 1}-${route.name}`} element={<Component />}>
      {route.routes && renderRoutes(route.routes)}
    </Route>
  );
};

const RoutePages: FC = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>;
};

export default RoutePages;
