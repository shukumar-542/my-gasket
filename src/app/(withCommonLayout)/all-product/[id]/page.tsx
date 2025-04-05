import React from "react";
import hero from "../../../../assets/detailsHero.png";
import img from "../../../../assets/details1.png";
import Image from "next/image";
import Button from "@/components/Button/Button";
const ProductDetailsPage = () => {
  return (
    <div
      className="pt-[110px]"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <div className="container mx-auto text-white flex items-center mt-10">
        <div className="w-full">
          <p className="text-[48px] font-extrabold uppercase">Gomma PARA</p>
          <p className="text-xl mt-10">
            Simplify your event planning with powerful, easy-to-use features
            designed to <br /> enhance guest experience and streamline management.
          </p>

          <div className="flex items-center gap-5 text-black mt-10">
            <button className="bg-[#F97316] px-8 py-3 rounded-sm shadow-2xl cursor-pointer">Get Instant Quote</button>
            <button className=" border border-[#F97316] bg-[#FED7AA]  px-8 py-3 rounded-sm shadow-2xl cursor-pointer">Datasheet</button>
          </div>
        </div>
        <div>
          <Image src={img} height={600} width={600} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
