// main.jsx
import React from "react";
import { createRoot } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Works from "./routes/Works.jsx";
import ProjectDetails from "./routes/[projectId].jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Works",
    element: <Works />,
  },
  {
    path: "/ProjectDetails/:projectId",
    element: <ProjectDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
