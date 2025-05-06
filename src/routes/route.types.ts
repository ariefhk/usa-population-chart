export interface RouteInterface {
  name: string;
  path: string;
  component: React.FC;
}

export interface RouteRootInterface extends RouteInterface {
  routes?: RouteRootInterface[];
}
