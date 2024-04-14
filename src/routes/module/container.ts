import { lazy } from "solid-js";

export default [
  {
    path: "/container",
    component: lazy(() => import("@/layout/primary")),
    name: "容器",
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/container/index")),
      },
    ],
  },
];
