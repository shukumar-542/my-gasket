import Image, { StaticImageData } from "next/image";
import React from "react";

interface IWorkProcess {
  step: string;
  title: string;
  img: StaticImageData;
}
const WorkProcess = ({ workSteps }: { workSteps: IWorkProcess[] }) => {
  return (
    <div className="container mx-auto  py-5 grid grid-cols-1 md:grid-cols-5 gap-5  ">
      {workSteps?.map((step, i) => {
        return (
          <div
            className="w-full  px-5 rounded-md
             relative"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
            }}
            key={i + 1}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              {step?.step}
            </p>
            <p className="text-[18px] text-center font-medium mt-10">{step?.title}</p>
            <div className="h-[320px] w-full flex items-center justify-center ">
              <Image src={step?.img} height={100} width={200} alt="img" className="w-full object-contain h-[300px]  " />

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default WorkProcess;
