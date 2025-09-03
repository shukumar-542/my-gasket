"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import img from "../../assets/modal.png";
import img1 from "../../assets/work1.png";
import img2 from "../../assets/work2.png";
import img3 from "../../assets/work3.png";
import img5 from "../../assets/work5.png";
import img6 from "../../assets/work6.png";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

type QuoteModalProps = {
  openModal: boolean;
  setOpenModal: () => void;  
  // onContinue: () => void;
};
const QuoteModal: React.FC<QuoteModalProps> = ({ openModal, setOpenModal }) => {
  const steps = [
    {
      stepNo: "01",
      img: img1,
      description:
        "You can upload only one drawing ata a time and it must contain the drawing of a single gasket",
    },
    {
      stepNo: "02",
      img: img2,
      description:
        ".DWG or .DFX files only",
    },
    {
      stepNo: "03",
      img : img3,
      description:
        "MAXIMUM DIMENSIONS : 1500mmX1500mm",
    },
    {
      stepNo: "04",
      img: img5,
      description:
        "It must have a top view only.",
    },
    {
      stepNo: "05",
      img: img6,
      description:
        "1 : 1 scale drawing only",
    }
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

  console.log(openModal)




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
            <p className="text-center text-xs md:text-xl py-2 px-2 ">
              {steps[currentStep]?.description}
            </p>
            <div className="p-5 flex justify-center w-full  ">
              <Image
                src={steps[currentStep]?.img}
                height={400}
                width={400}
                className="rounded-md md:h-[250px] w-[310px] object-cover"
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
            <Link href={"/all-product"}>
            <button onClick={() => {
              setOpenModal(); 
            }} className={`bg-[#F97316] text-black py-2 px-4 rounded-sm shadow-2xl cursor-pointer`}>
              Continue
            </button>
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuoteModal;
