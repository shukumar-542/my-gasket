"use client";
import React from "react";
import img1 from "../../assets/ebay.png";
import img2 from "../../assets/lenovo.png";
import img3 from "../../assets/alibaba.png";
import img4 from "../../assets/amazon.png";
import img5 from "../../assets/slack.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const carBrands = [
  { src: img1, name: "Hyundai" }, 
  { src: img2, name: "Hyundai" },
  { src: img3, name: "Volvo" },
  { src: img4, name: "Volkswagen" },
  { src: img5, name: "Lexus" },
];

const OurTrastedPartner = () => {
  return (
    <div className="container mx-auto py-10">
      <p className="text-[28px] text-center mt-5 uppercase font-bold pb-10">
        Our Trusted Partners
      </p>
      <Carousel>
        <CarouselContent>
          {carBrands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/5 basis-1/2 flex justify-center items-center  "
            >
              <div className="bg-white h-20 flex items-center justify-center w-56 rounded-2xl">
                <Image height={100} width={100} src={brand?.src} alt="img" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurTrastedPartner;
