import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import { ThemeProvider } from "../ui/ThemeProvider";

const DashboardLayout = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full h-screen flex items-start justify-start pb-[30px]">
        <Sidebar />
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
