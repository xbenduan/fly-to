import { lazy } from "solid-js";

export default [
  {
    path: "/website",
    component: lazy(() => import("@/layout/primary")),
    name: "网站",
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/website/index")),
      },
    ],
  },
];
