import AdminDashboardLayout from "@/components/Layouts/AdminDashboardLayout";
import AuthLayout from "@/components/Layouts/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayouts";

import Booking from "@/pages/Booking/Booking";
import Home from "@/pages/Home/Home";

import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import ServiceDetail from "@/pages/ServiceDetail/ServiceDetail";
import Services from "@/pages/Services/Services";
import NotFound from "@/pages/shared/NotFound";

import UserDashboardLayout from "@/components/Layouts/UserDashboardLayout";

import AdminProtectedRoute from "@/ProtectRoutes/AdminProtectedRoute";
import UserProtectedRoutes from "@/ProtectRoutes/UserProtectedRoutes";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./admin.route";
import { userRoutes } from "./user.route";
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
        element: (
          <UserProtectedRoutes>
            <Booking />
          </UserProtectedRoutes>
        ),
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
    path: "/dashboard/admin",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardLayout />
      </AdminProtectedRoute>
    ),
    children: [...adminRoutes],
  },
  {
    path: "/dashboard/user",
    element: (
      <UserProtectedRoutes>
        <UserDashboardLayout />
      </UserProtectedRoutes>
    ),
    children: [...userRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
