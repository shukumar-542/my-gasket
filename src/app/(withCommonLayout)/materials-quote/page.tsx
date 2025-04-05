"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../assets/quote.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import { HiOutlineUpload } from "react-icons/hi";
const MaterialsQuotePage = () => {
  const [file, setFile] = useState<File | null>(null);
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


  // =============Upload main file function =================//
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const allowedExtensions = [".dxf", ".dwg"]; 
      const fileExtension = selectedFile.name 
        .slice(selectedFile.name.lastIndexOf("."))
        .toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        console.log("Accepted file:", selectedFile);
      } else {
        alert("Only .dxf or .dwg files are allowed");
        e.target.value = "";
      }
    }
  };



  return (
    <div className=" mt-20  ">
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
        <p className=" font-semibold text-[25px] md:text-[38px]">
          How does the quote generator work?{" "}
        </p>
        <p className="text-[#F97316] cursor-pointer">
          <IoMdInformationCircleOutline size={35} />
        </p>
      </div>
      <div className="bg-white mx-2 md:mx-0">
        <WorkProcess workSteps={workSteps} />
      </div>

      <div className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition"
          >
            <HiOutlineUpload size={50} />
            <input
              id="file-upload"
              type="file"
              accept=".dxf,.dwg"
              onChange={handleFileChange}
              className="hidden"
            />
            {file ? <p className="mt-4 text-[#F97316] text-center">
              {file.name}
            </p> : "Upload File"}
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default MaterialsQuotePage;
