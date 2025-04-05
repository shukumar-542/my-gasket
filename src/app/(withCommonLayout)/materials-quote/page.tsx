import Image from "next/image";
import React from "react";
import img from "../../../assets/quote.png";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
const MaterialsQuotePage = () => {
  const workSteps = [
    {
      step: "01",
      title:
        "You can upload one file at a time, and it must contain the drawing of a single gasket.",
    },
    {
      step: "02",
      title: "we only accept dxf or dwg files",
    },
    {
      step: "03",
      title: "MAXIMUM DIMENSIONS:1500mmX1500mm",
    },
    {
      step: "04",
      title: "It must have a top view only.",
    },
  ];
  return (
    <div className=" mt-20 ">


      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={img}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          Materials Quote
        </p>
      </div>

        <div className="flex items-center justify-center py-10 gap-2  bg-white px-2 md:px-0">
            <p className=" font-semibold text-[25px] md:text-[38px]">How does the quote generator work? </p>
            <p className="text-[#F97316] cursor-pointer"><IoMdInformationCircleOutline size={35}  /></p>
        </div>
        <div className="bg-white mx-2 md:mx-0">
            <WorkProcess workSteps={workSteps}/>
        </div>

    </div>
  );
};

export default MaterialsQuotePage;
