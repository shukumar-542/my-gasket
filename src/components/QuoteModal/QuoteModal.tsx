"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import img from "../../assets/modal.png";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

type QuoteModalProps = {
  openModal: boolean;
  setOpenModal: () => void;  // no args
  onContinue: () => void;
};
const QuoteModal: React.FC<QuoteModalProps> = ({ openModal, setOpenModal }) => {
  const steps = [
    {
      stepNo: "01",
      description:
        "You can upload one file at a time, and it must contain the drawing of a single gasket",
    },
    {
      stepNo: "02",
      description:
        "You 2 can upload one file at a time, and it must contain the drawing of a single gasket",
    },
    {
      stepNo: "03",
      description:
        "You 3 can upload one file at a time, and it must contain the drawing of a single gasket",
    },
    {
      stepNo: "04",
      description:
        "You 4 can upload one file at a time, and it must contain the drawing of a single gasket",
    },
  ];

  const [currentStep, setCurrentSteps] = useState(0);


  //   Handle next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentSteps((prev) => prev + 1);
    }
  };

  //   handle previous step

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentSteps((prev) => prev - 1)
    }
  }




  return (
    <div>
      <Modal
        centered
        footer={false}
        open={openModal}
        onCancel={() => {
          setOpenModal();
          setCurrentSteps(0);
        }}
      >
        <div className="flex items-center">
          <div
            onClick={() => handlePrevious()}
            className={`cursor-pointer border  rounded-full ${currentStep > 0 ? "border-[#0B63E5] text-[#0B63E5]" : "text-gray-300"} `}
          >
            <MdKeyboardArrowLeft size={30} />
          </div>

          <div className="border m-2 mt-6 border-[#000000] rounded-md p-5 relative">
            <div className="h-10 w-10 rounded-full border border-[#000000] -top-5  left-[50%] transform -translate-x-1/2 flex justify-center items-center absolute bg-white ">
              {steps[currentStep]?.stepNo}
            </div>
            <p className="text-center py-2 px-2 ">
              {steps[currentStep]?.description}
            </p>
            <div className="p-5 flex justify-center ">
              <Image
                src={img}
                height={400}
                width={400}
                className="rounded-md"
                alt="img"
              />
            </div>
          </div>
          <div
            onClick={() => handleNext()}
            className={`cursor-pointer border  rounded-full  ${currentStep === steps.length - 1 ? "text-gray-300" : "border-[#0B63E5] text-[#0B63E5] "}`}
          >
            <MdKeyboardArrowRight size={30} />
          </div>
        </div>
        {currentStep == steps.length - 1 && (
          <div className="flex justify-center items-center">
            {/* <Link href={"/materials-quote"}> */}
            <button onClick={() => {
              setOpenModal(); // ✅ just call the passed function
            }} className={`bg-[#F97316] text-black py-2 px-4 rounded-sm shadow-2xl cursor-pointer`}>
              Continue
            </button>
            {/* </Link> */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuoteModal;
