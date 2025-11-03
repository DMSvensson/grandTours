import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StartListPage from "./pages/startList/startList";
import StagesPage from "./pages/stages/stages";
import HomePage from "./pages/home/home";
import OverviewPage from "./pages/overview/overview";
import ErrorPage from "./error-page";
import { StageProvider } from "./contexts/StageContext";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:year",
          children: [
            {
              path: "/:year",
              element: <StartListPage />,
            },
            {
              path: "/:year/stages/:raceId",
              element: (
                <StageProvider>
                  <StagesPage />
                </StageProvider>
              ),
            },
            {
              path: "/:year/overview",
              element: <OverviewPage />,
            },
          ],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/" }
);

export default router;
