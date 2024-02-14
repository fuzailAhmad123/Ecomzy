import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import data from "../../../data/home_carausal.json";
import image1 from "../../../assets/images/electronics.jpg";
import image2 from "../../../assets/images/mens-clothing.jpg";
import image3 from "../../../assets/images/womens-clothing1.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SlideBar() {
  React.useEffect(() => {
    console.log(data);
  });
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[90vw] mx-auto min-h-[calc(100vh-5rem)] my-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card >
                <CardContent className=" flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
        {data.slidesData.map((slideData, index) => (
          <CarouselItem className="w-full" key={index}>
            <div className="flex flex-row-reverse  items-start justify-start gap-x-0 relative">
              <div className="w-full absolute top-[8%] border-2 border-black -z-10"></div>
              <div className="w-[70%]  h-full z-10 ">
                <img
                  src={`${
                    index === 0
                      ? `${image3}`
                      : index === 1
                      ? `${image2}`
                      : `${image1}`
                  }`}
                  alt="image"
                  loading="lazy"
                  className=" w-[100%] object-contain  z-10"
                />
              </div>

              <div className="w-[60%] absolute left-0 top-[50%] -translate-y-[40%] h-[40%] text-black z-20">
                <div className="text-black ">
                  <p className="text-6xl font-semibold italic drop-shadow-2xl  ">
                    {slideData.name}
                  </p>
                  <p className="text-black text-opacity-60 text-xl font-semibold font-mono mt-5 ">
                    Get upto {slideData.discount} Off
                  </p>

                  <div className="mt-6">
                    <Button asChild className="px-16 py-5 z-30">
                      <Link to="/categories">Shop Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full absolute bottom-[8%] border-2 border-black z-20"></div>
              <div className="w-full absolute bottom-[6%] left-[10%] font-semibold text-xl font-mono z-30 bg-opacity-100 ">
                <p className="bg-black text-white w-fit px-12 py-1">
                  WWW.ECOMZY.COM
                </p>
              </div>
              <p className="py-1  text-center font-semibold font-mono capitalize text-xl absolute top-[50%] -right-[13%] z-30 w-fit min-w-[400px] bg-black text-white -rotate-90 ">We are Fast and Trust Worthy</p>

              <div className="px-16 py-2.5 absolute bottom-[6%] left-[65%] w-fit font-semibold text-xl font-mono z-30 bg-opacity-100 flex items-center gap-x-3 bg-black">
                <p className="bg-white h-[12px] w-[12px] rounded-full"/>
                <p className="bg-white h-[12px] w-[12px] rounded-full"/> 
                <p className="bg-white h-[12px] w-[12px] rounded-full"/>
                
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
