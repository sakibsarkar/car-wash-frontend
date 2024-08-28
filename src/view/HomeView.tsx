import FeaturedServices from "@/components/home/FeaturedServices";
import HeroSection from "@/components/home/HeroSection";
import Reviews from "@/components/home/Reviews";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <Link to={"#review"}>fsadfas</Link>
      <FeaturedServices />
      <Reviews />
    </>
  );
};

export default HomeView;
