import React from "react";
import { createRoot } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Works from "./routes/Works.jsx";
import projectDetails from "./routes/Myworks.jsx";
import Hero from "./components/Hero.jsx";
import Myworks from "./routes/Myworks.jsx";
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
    path: "/Myworks",
    element: <Myworks />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
