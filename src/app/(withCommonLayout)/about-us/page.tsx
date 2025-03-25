import React from "react";
import about from "../../../assets/about.png";
import about1 from "../../../assets/about1.png";
import about2 from "../../../assets/about2.png";
import about3 from "../../../assets/about3.png";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <div className=" mt-8">
      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={about}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          About us
        </p>
      </div>

      <div className="container mx-auto p-2">
        {/* Section One */}
        <div className="md:flex items-center justify-baseline my-20">
          <div className="w-full">
            <Image
              className=" h-[350px] md:h-[670px]"
              src={about1}
              height={100}
              width={700}
              alt="img"
            />
          </div>
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              High-Quality Materials for Every Need
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              At My Gasket, we provide a wide selection of premium materials,
              including rubber, silicone, and metal, ensuring durability and
              performance for various industries.
            </p>
          </div>
        </div>
        {/* Section Two */}

        <div className="md:flex items-center justify-between my-30">
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              Customization & Precision Engineering
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              We understand that every project is unique. Thats why we offer
              custom thickness options, precision cutting, and DXF file uploads,
              allowing you to create gaskets tailored to your exact
              requirements.
            </p>
          </div>
          <div className="w-full  flex justify-end">
            <Image
              className="h-[350px] md:h-[670px]"
              src={about2}
              height={100}
              width={700}
              alt="img"
            />
          </div>
        </div>

        {/* Section Three */}

        <div className="md:flex items-center justify-baseline my-20">
          <div className="w-full">
            <Image
              className=" h-[350px] md:h-[670px]"
              src={about3}
              height={100}
              width={700}
              alt="img"
            />
          </div>
          <div className="">
            <p className="text-[30px] md:text-[45px] font-bold">
              Reliable Service & Fast Delivery
            </p>
            <div className="border-[3px] max-w-[200px] border-[#F97316] my-4"></div>
            <p className="md:text-[18px] font">
              From manufacturing to delivery, we prioritize efficiency and
              accuracy. With our streamlined process, you can expect quick
              turnaround times and secure shipping to get your gaskets exactly
              when you need them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
