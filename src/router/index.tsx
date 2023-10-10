import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { BASE_ROUTES } from "../constants/apiConstants";
import LoginPage from "../pages/login";

export const pageRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: BASE_ROUTES,
        element: <LoginPage />,
      }
    ]
  }
])