import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
export const RenderNewLine = ({ text }: { text: string }) => {
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};
const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      heading: "Keep your car shine",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      heading: "Fully automatic machine",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
    {
      id: 3,
      image: "/images/slider1.webp",
      heading: "Proffesional Team",
      desc: "Discover top-tier fitness equipment designed to take your workouts to the next level.",
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel
        className=" overflow-hidden h-screen "
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="flex items-center justify-center h-full p-0 w-full">
                  <div
                    className="relative w-full h-screen hover:scale-[1.03]"
                    style={{ transition: "0.3s" }}
                  >
                    <div className="overlay" />
                    <img
                      src={slider.image}
                      className="absolute z-[1]  top-0 left-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      alt=""
                    />

                    <div className="relative z-[21] w-full h-full hero_title flex-col center pl-[50px] bg-[#00000011] gap-[5px]">
                      <h1 className="text-[20px] sm:text-[30px] lg:text-[70px] font-[700] text-white capitalize">
                        <RenderNewLine text={slider.heading} />
                      </h1>
                      <p className="max-w-[550px] text-white text-center  text-[12px] sm:text-[14px] lg:text-[16px]">
                        {slider.desc}
                      </p>
                      <Link
                        to={"/"}
                        className="px-[20px] border-[1px] border-white py-[5px] text-white mt-[20px]"
                      >
                        Shop Npw
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
};
export default HeroSection;
