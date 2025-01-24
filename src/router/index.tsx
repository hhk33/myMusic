import React, { lazy } from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover/discover"));
const Mine = lazy(() => import("@/views/mine/mine"));
const Download = lazy(() => import("@/views/download/download"));
const Recommend = lazy(
  () => import("@/views/discover/c-views/recommend/recommend")
);

const Ranking = lazy(() => import("@/views/discover/c-views/ranking/ranking"));
const SongList = lazy(
  () => import("@/views/discover/c-views/song-list/song-list")
);
const Artist = lazy(() => import("@/views/discover/c-views/artist/artist"));
const DjRadio = lazy(
  () => import("@/views/discover/c-views/dj-radio/dj-radio")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/songs",
        element: <SongList />,
      },
      {
        path: "/discover/singer",
        element: <Artist />,
      },
      {
        path: "/discover/djradio",
        element: <DjRadio />,
      },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];

const router = createBrowserRouter(routes);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
