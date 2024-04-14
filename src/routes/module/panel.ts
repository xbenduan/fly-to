import { lazy } from "solid-js";

export default [
  {
    path: "/panel",
    component: lazy(() => import("@/layout/primary")),
    name: "面板",
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/panel/index")),
      },
    ],
  },
];
