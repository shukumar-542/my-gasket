import Image, { StaticImageData } from "next/image";
import React from "react";
import img1 from "../../assets/work1.png";
import img2 from "../../assets/work2.png";
import img3 from "../../assets/work3.png";
import img4 from "../../assets/work6.png";
import img5 from "../../assets/work5.png";

interface IWorkProcess {
  step: string;
  title: string;
  img: StaticImageData;
}
const WorkProcess = ({ workSteps }: { workSteps: IWorkProcess[] }) => {
  return (
    <div className="container mx-auto px-0 md:px-5  py-5 grid grid-cols-1 md:grid-cols-5 gap-5  ">
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              01

            </p>
            <p className="text-[18px] text-center font-medium mt-10">You can upload only one drawing ata a time and it must contain the drawing of a single gasket.</p>
            <div className="h-[250px] mt-0 w-full flex items-center justify-center ">
              <Image src={img1} height={100} width={200} alt="img" className="w-full object-contain h-[250px]  " />

            </div>

          </div>
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              02
              

            </p>
            <p className="text-[18px] text-center font-medium mt-18">.DWG or .DFX files only</p>
            <div className="h-[280px]  w-full flex items-center justify-center mt-6">
              <Image src={img2} height={100} width={200} alt="img" className="w-full object-contain h-[280px]  " />

            </div>

          </div>
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              03

            </p>
            <p className="text-[18px] text-center font-medium mt-20">MAXIMUM DIMENSIONS: <br /> 1500mmX1500mm</p>
            <div className="h-[250px] mt-0 w-full flex items-center justify-center ">
              <Image src={img3} height={100} width={200} alt="img" className="w-full object-contain h-[250px]  " />

            </div>

          </div>
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              04

            </p>
            <p className="text-[18px] text-center font-medium mt-20">It must have a top view only.</p>
            <div className="h-[250px] mt-2 w-full flex items-center justify-center ">
              <Image src={img4} height={100} width={200} alt="img" className="w-full object-contain h-[250px]  " />

            </div>

          </div>
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              05

            </p>
            <p className="text-[18px] text-center font-medium mt-20">1 : 1 scale drawing only</p>
            <div className="h-[250px] mt-0 w-full flex items-center justify-center ">
              <Image src={img5} height={100} width={200} alt="img" className="w-full object-contain h-[300px]  " />

            </div>

          </div>
    </div>
  );
};

export default WorkProcess;
