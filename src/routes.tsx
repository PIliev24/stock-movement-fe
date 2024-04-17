import { RouteObject } from "react-router";
import { PATHS } from "./data/constants";

import MainLayout from "./layouts/MainLayout";
import Products from "./pages/main/Products";
import NotExisting from "./pages/common/NotExisting";
import Warehouses from "./pages/main/Warehouses";

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: PATHS.root,
        element: <Products />,
      },
      {
        path: PATHS.warehouses,
        element: <Warehouses />,
      },
    ],
  },
  {
    path: "*",
    element: <NotExisting />,
  },
];
