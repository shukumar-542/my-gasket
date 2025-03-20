import React from "react";
import img from "../../assets/custom.png";
import Image from "next/image";
import Button from "../Button/Button";
const MaterialWeOffer = () => {
  return (
    <div className="bg-[#000624] py-20 px-2">
      <div className="container mx-auto text-white md:flex gap-20 items-center">
        <div className="  max-w-2xl">
          <h2 className="text-[32px] font-bold">MATERIALS WE OFFER</h2>
          <p className="text-[14px] md:text-[20px] mt-10 max-w-2xl">
            We provide a variety of rubber types suited for different
            applications, guaranteeing durability, flexibility, and resistance
            to harsh conditions.You can check the data sheet for each of the
            rubber types we offer so you can check all the technical
            information of them.
          </p>
          <Button className="inline-block px-8 mt-10 mb-5">DISCOVER</Button>
        </div>
        <div className="">
          <Image
            src={img}
            height={400}
            width={400}
            className="h-full  w-[600px]"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default MaterialWeOffer;
