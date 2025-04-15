"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import img from "../../../assets/quote.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import { HiOutlineUpload } from "react-icons/hi";
import { Input, Select } from "antd";
import { FiPaperclip, FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const MaterialsQuotePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [numberOfPieces, setNumberOfPieces] = useState("0");
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

  // Handle input change value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumberOfPieces(value);
    }
  };

  const increment = () => {
    setNumberOfPieces((prev) => String(Number(prev || "0") + 1));
  };

  const decrement = () => {
    setNumberOfPieces((prev) => {
      const newVal = Number(prev || "0") - 1;
      return newVal < 0 ? "0" : String(newVal);
    });
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const filteredFiles = selectedFiles.filter((file) =>
      /\.(dxf|dwg)$/i.test(file.name)
    );
    setFiles((prev) => [...prev, ...filteredFiles]);
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

      <div className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-2 ms:px-0">
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
            {file ? (
              <p className="mt-4 text-[#F97316] text-center">{file.name}</p>
            ) : (
              "Upload File"
            )}
          </label>

          <div className="border rounded-lg p-4 shadow-sm relative bg-white mt-10">
            <h2 className="text-lg font-semibold mb-2">Additional Details</h2>

            {/* Uploaded file preview */}
            <div className="flex gap-2 flex-wrap mb-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative border p-2 w-24 h-24 rounded-md flex items-center justify-center text-sm text-center"
                >
                  <button
                    onClick={() => handleRemove(index)}
                    className="absolute -top-2 -right-2 bg-white border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-100"
                  >
                    ✕
                  </button>
                  <p className="truncate w-full">{file.name}</p>
                </div>
              ))}
            </div>

            {/* Upload input and icon */}
            <div className="">
              <input
                type="file"
                ref={fileInputRef}
                multiple
                accept=".dxf,.dwg"
                onChange={handleFileChanges}
                className="hidden"
              />
              <button
                onClick={openFileDialog}
                className="absolute top-0 right-0 p-2 mt-2 mr-2 text-gray-500 hover:text-black"
              >
                <FiPaperclip size={20} />
              </button>
              <Input placeholder="Additional Text..."   variant="borderless" className="border-none" />

            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select the drawing scale 01 : </p>
            <div>
              <Input className="" />
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Drawing Measurement Unit: </p>
            <div>
              <Select
                style={{ width: 145 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              ></Select>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select Rubber type: </p>
            <div>
              <Select
                style={{ width: 145 }}
                options={[
                  { value: "Gomma para1", label: "Gomma para1" },
                  { value: "Gomma para", label: "Gomma para" },
                ]}
              ></Select>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select Thickness: </p>
            <div>
              <Select
                style={{ width: 145 }}
                options={[
                  { value: "1mm", label: "1mm" },
                  { value: "2mm", label: "2mm" },
                ]}
              ></Select>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Number of Pieces: </p>
            <div className="flex items-center gap-2">
              <button
                onClick={decrement}
                className="border border-black rounded-[2px] cursor-pointer"
              >
                <LuMinus size={20} />
              </button>
              <input
                value={numberOfPieces}
                onChange={handleInputChange}
                className="w-16 border border-black text-center rounded-[2px]"
              />
              <button
                onClick={increment}
                className="border border-black rounded-[2px] cursor-pointer"
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center text-5xl font-extrabold">
            <p>
              <FaDollarSign />
            </p>
            <p>4.49</p>
          </div>
          <button className="bg-[#F97316] px-5 py-2 rounded-sm cursor-pointer flex items-center gap-2">
            <MdShoppingCart size={20} color="white" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialsQuotePage;
