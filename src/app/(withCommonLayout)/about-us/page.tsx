import React from "react";
import about from "../../../assets/about.png";
import about1 from "../../../assets/about1.png";
import about2 from "../../../assets/about2.png";
import about3 from "../../../assets/about3.png";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <div className=" mt-20 ">
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
        <div className="md:flex items-center justify-baseline mt-20">
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

        <div className="md:flex items-center justify-baseline mt-20">
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

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="border border-black rounded-lg p-6 font-extrabold text-4xl h-40 text-center flex flex-col justify-center">
          20+
          <span className="font-normal text-sm mt-2 block">
            years of experience in the gasket field
          </span>
        </div>

        {/* Box 2 */}
        <div className="border border-black rounded-lg p-6 font-semibold text-lg flex flex-col justify-center">
          <span className="text-center text-3xl">4.0 industry</span>
          <span className="font-normal text-base mt-2">
            We leverage the power of Industry 4.0 to deliver fast, precise, and
            customizable gasket solutions.
          </span>
        </div>

        {/* Box 3 */}
        <div className="border h-32 text-3xl border-black rounded-lg p-6 font-bold flex items-center justify-center">
          10+ materials
        </div>

        {/* Box 4 */}
        <div className="border border-black h-52 rounded-lg p-6 font-bold text-center flex flex-col justify-center">
          <div className="text-4xl mb-2">🕒</div>
          <span className="text-xl">48 hours</span>
          <span className="font-normal text-sm mt-1 block">
            for standard orders in all Italy
          </span>
        </div>

        {/* Box 5 */}
        <div className="border border-black rounded-lg p-6 font-semibold text-lg flex flex-col justify-center">
          <span className="text-center text-3xl">made in italy</span>
          <span className="font-normal text-base mt-2">
            All our gaskets are proudly design and manufactured in Italy,
            combining traditional craftsmanship with modern technology.
          </span>
        </div>

        {/* Box 6 */}
        <div className="border border-black sm:mt-5 md:-mt-10 h-40 rounded-lg p-6 font-normal  text-sm flex flex-col justify-center text-center">
          <b className="text-center text-3xl">No minimum orders</b>
          <span className="mt-1 block">
            we decided to not put a minimum order. We only apply a small fix
            cost for each material and thickness.
          </span>
        </div>

        {/* Box 7 */}
        <div className="border border-black rounded-lg p-6 font-normal text-sm flex flex-col justify-center">
          <b className="text-center text-3xl">no waste.</b>
          <span className="mt-1 block">
            We optimized cutting paths, minimize scraps and reduce environmental
            impact without compromising on quality.
          </span>
        </div>

        <div className="flex-col md:flex gap-5">
          {/* Box 8 */}
          <div className="border border-black rounded-lg p-6 font-normal text-sm flex flex-col justify-center">
            <b className="text-center text-3xl">High quality</b>
            <span className="mt-1 block">
              We use top-grade materials and state-of-the-art machinery to
              ensure every gasket meets the highest standards.
            </span>
          </div>

          {/* Box 9 */}
          <div className="border border-black rounded-lg p-6 mt-2 font-normal text-sm flex flex-col justify-center">
            <b className="text-center text-xl">ultra fast replies</b>
            <span className="mt-1 block">
              our team will get back to you in less than 24 hours
            </span>
          </div>
        </div>

        {/* Box 10 */}
        <div className="border md:-mt-20 mt-1 border-black rounded-lg p-6 font-bold text-lg text-center flex flex-col justify-center">
          <span className="text-center text-3xl">instant quote</span>
          <span className="font-normal text-base mt-2">
            Thanks to our instant quote generator, it is easier than ever to
            order your custom gasket!
          </span>
        </div>
      </div>

      <div className="container mx-auto   p-6  ">
        <div className="bg-[#ECF5FE] md:flex p-10 items-center justify-between  rounded-md ">
          <div>
            <span className="text-4xl font-semibold">Get your gasket now!</span>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              corporis.
            </p>
          </div>
          <div className="text-white">
            <button className="bg-[#172554] px-10 py-5 cursor-pointer rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
