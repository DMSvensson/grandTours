import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StartListPage from "./pages/startList/startList";
import StagesPage from "./pages/stages/stages";
import HomePage from "./pages/home/home";
const publicURL = process.env.PUBLIC_URL;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: `${publicURL}/`,
                element: <HomePage />
            },
            {
                path: `${publicURL}/teams/:year`,
                element: <StartListPage />
            },
            {
                path: `${publicURL}/stages/:year`,
                element: <StagesPage />
            },
        ]
    }
]);

export default router;