import AuthLayout from "@/components/Layouts/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayouts";
import Booking from "@/pages/Booking/Booking";
import Home from "@/pages/Home/Home";

import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import ServiceDetail from "@/pages/ServiceDetail/ServiceDetail";
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
        index: true,
        path: "service/:id",
        element: <ServiceDetail />,
      },
      {
        index: true,
        path: "procced-booking",
        element: <Booking />,
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
