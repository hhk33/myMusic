import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Download = lazy(() => import("@/views/download/download"));
const Recommend = lazy(() => import("@/views/recommend/recommend"));
const Selected = lazy(() => import("@/views/selected/index"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/recommend" />,
  },
  {
    path: "/recommend",
    element: <Recommend />,
  },
  {
    path: "/selected",
    element: <Selected />,
    children: [
      {
        path: "/selected",
        element: <Navigate to="/selected/cherry-picks" />,
      },
      {
        path: "/selected/cherry-picks",
        element: <Recommend />,
      },
      {
        path: "/selected/list-square",
        element: <Recommend />,
      },
      {
        path: "/selected/charts",
        element: <Recommend />,
      },
      {
        path: "/selected/artists",
        element: <Recommend />,
      },
    ],
  },
  {
    path: "/roam",
    element: <Recommend />,
  },
  {
    path: "/follow",
    element: <Recommend />,
  },
  {
    path: "/like",
    element: <Recommend />,
  },
  {
    path: "/recent",
    element: <Recommend />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/local",
    element: <Recommend />,
  },
];

export default routes;
