import { lazy } from "solid-js";

export default [
  {
    path: "/host",
    component: lazy(() => import("@/layout/primary")),
    name: "主机",
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/host/index")),
      },
    ],
  },
];
