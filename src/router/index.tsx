import AuthLayout from "@/components/Layouts/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayouts";

import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Services from "@/pages/Services/Services";
import NotFound from "@/pages/shared/NotFound";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "services",
        element: <Services />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
