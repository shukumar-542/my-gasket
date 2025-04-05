import React from "react";

interface IWorkProcess {
  step: string;
  title: string;
}
const WorkProcess = ({ workSteps }: { workSteps: IWorkProcess[] }) => {
  return (
    <div className="container mx-auto  py-10 grid grid-cols-1 md:grid-cols-4 gap-10  ">
      {workSteps?.map((step, i) => {
        return (
          <div
            className="w-full bg-[#FFFFFF] p-5 rounded-md shadow-2xl relative"
            key={i + 1}
          >
            <p className="w-14 h-14 flex items-center justify-center text-center text-sm border-[3px] rounded-full border-[#2563EB] left-1/2 transform -translate-x-1/2 absolute -top-5 bg-white">
              {step?.step}
            </p>
            <p className="mt-10 p-5 text-[18px] text-center">{step?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkProcess;
