import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Hom from "./Components/Home/Hom.jsx";
import Loging from "./Components/Loging/Loging.jsx";
import Register from "./Components/Register/Register.jsx";
import ContextProvider from "./context/ContextProvider/ContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Hom,
      },
      {
        path: "/loging",
        Component: Loging,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
