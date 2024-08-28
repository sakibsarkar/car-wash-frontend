import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Comparison from "../Tools/Comparison";

const MainLayout = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      return;
    };
  });
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
      <Comparison />
    </>
  );
};
export default MainLayout;
