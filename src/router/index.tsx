import AuthLayout from "@/components/Layouts/AuthLayout";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import MainLayout from "@/components/Layouts/MainLayouts";
import ManageUser from "@/pages/Admin/ManageUser";
import ServiceManage from "@/pages/Admin/ServiceManage";
import SlotManage from "@/pages/Admin/SlotManage";
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "admin",
        element: <ServiceManage />,
      },
      {
        index: true,
        path: "admin/manage-user",
        element: <ManageUser />,
      },
      {
        index: true,
        path: "admin/manage-slots",
        element: <SlotManage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
