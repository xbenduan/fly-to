import { lazy } from "solid-js";
import website from "./module/website";
import dashboard from "./module/dashboard";
import container from "./module/container";
import panel from "./module/panel";
import host from "./module/host";

export interface IRoute {
  path: string;
  component?: any;
  emoji?: string;
  name?: string;
  children?: Array<IRoute>;
}

const route: IRoute[] = [
  {
    path: "/login",
    component: lazy(() => import("@/pages/login/index")),
  },
  ...dashboard,
  ...container,
  ...website,
  ...panel,
  ...host,
];
export default route;
