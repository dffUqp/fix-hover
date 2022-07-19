import React from "react";

import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";

const AppRoutes = () => {

  let location = useLocation();

  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Navigate to="restaurant" state={{ from: location }} replace />
          ),
        },
        { path: "home", element: <Home /> },
        { path: "restaurant", element: <Restaurant /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="restaurant" state={{ from: location }} replace />,
    },
  ]);

  return element;
};

export default AppRoutes;
