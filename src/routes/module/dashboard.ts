import { lazy } from "solid-js";
import { IRoute } from "..";

const route: IRoute[] = [
  {
    path: "/dashboard",
    component: lazy(() => import("@/layout/secondary")),
    emoji: "tabler--home",
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/dashboard/index")),
      },
    ],
  },
];

export default route;
