"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import img from "../../../assets/quote.png";
import { IoMdClose, IoMdInformationCircleOutline } from "react-icons/io";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import { HiOutlineUpload } from "react-icons/hi";
import { Input, Select } from "antd";
import { FiPaperclip, FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import QuoteModal from "@/components/QuoteModal/QuoteModal";
import img1 from "../../../assets/work1.png";
import img2 from "../../../assets/work2.png";
import img3 from "../../../assets/work3.png";
import img5 from "../../../assets/work5.png";
import img6 from "../../../assets/work6.png";

const MaterialsQuotePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const mainFileInputRef = useRef<HTMLInputElement>(null);
  const additionalFilesInputRef = useRef<HTMLInputElement>(null);
  const [numberOfPieces, setNumberOfPieces] = useState("0");

  const workSteps = [
    {
      step: "01",
      title:
        "You can upload only one drawing ata a time and it must contain the drawing of a single gasket.",
      img: img1,
    },
    {
      step: "02",
      title: ".DWG or .DFX files only",
      img: img2,
    },
    {
      step: "03",
      title: "MAXIMUM DIMENSIONS:1500mmX1500mm",
      img: img3,
    },
    {
      step: "04",
      title: "It must have a top view only.",
      img: img6,
    },
    {
      step: "05",
      title: "1 : 1 scale drawing only",
      img: img5,
    },
  ];

  // Main file upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const allowedExtensions = [".dxf", ".dwg"];
      const fileExtension = selectedFile.name
        .slice(selectedFile.name.lastIndexOf("."))
        .toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        console.log("Accepted main file:", selectedFile);
      } else {
        alert("Only .dxf or .dwg files are allowed");
        if (mainFileInputRef.current) mainFileInputRef.current.value = "";
      }
    }
  };

  // Additional files upload handler
  const handleAdditionalFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(e.target.files || []);
    const allowedExtensions = [".dxf", ".dwg"];

    const filteredFiles = selectedFiles.filter((file) =>
      allowedExtensions.includes(
        file.name.slice(file.name.lastIndexOf(".")).toLowerCase()
      )
    );

    if (filteredFiles.length !== selectedFiles.length) {
      alert("Only .dxf or .dwg files are allowed");
    }

    setFiles((prev) => [...prev, ...filteredFiles]);

    // Reset input value so same file can be re-uploaded if needed
    if (additionalFilesInputRef.current) {
      additionalFilesInputRef.current.value = "";
    }
  };

  // Remove main file
  const removeFile = () => {
    setFile(null);
    if (mainFileInputRef.current) {
      mainFileInputRef.current.value = "";
    }
  };

  // Remove additional file by index
  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Open additional files file dialog
  const openFileDialog = () => {
    additionalFilesInputRef.current?.click();
  };

  // Handle number input changes
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

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("quoteModalShown");
    if (!hasSeenModal) {
      setOpenModal(true);
    }
  }, []);

  const handleModalClose = () => {
    localStorage.setItem("quoteModalShown", "true");
    setOpenModal(false);
  };

  return (
    <div className="mt-20">
      <QuoteModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
        onContinue={handleModalClose}
      />

      <div className="mt-8 relative">
        <Image
          className="w-full h-[400px] object-cover"
          src={img}
          height={1200}
          width={1200}
          alt="Materials Quote Banner"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          Materials Quote
        </p>
      </div>

      <div className="flex items-center justify-center py-10 gap-2 bg-white px-2 md:px-0">
        <p className="font-semibold text-[25px] md:text-[38px]">
          How does the quote generator work?{" "}
        </p>
        <p className="text-[#F97316] cursor-pointer">
          <IoMdInformationCircleOutline size={35} />
        </p>
      </div>

      <div className="bg-white mx-2 md:mx-0">
        <WorkProcess workSteps={workSteps} />
      </div>

      <div className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-2 md:px-0">
        {/* Left side - file upload and additional details */}
        <div>
          <div className="relative">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center border-2 py-20 border-dashed border-blue-300 rounded-xl p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition"
            >
              <HiOutlineUpload size={50} />
              <input
                id="file-upload"
                type="file"
                accept=".dxf,.dwg"
                onChange={handleFileChange}
                className="hidden"
                ref={mainFileInputRef}
              />

              {file ? (
                <p className="mt-4 text-[#F97316] text-center truncate">
                  {file.name}
                </p>
              ) : (
                "Upload File"
              )}
            </label>

            {file && (
              <button
                type="button"
                onClick={removeFile}
                className="text-red-500 hover:text-red-700 cursor-pointer absolute top-[-10px] right-[-10px] border p-2 border-red-500 rounded-full bg-white"
              >
                <IoMdClose size={20} />
              </button>
            )}
          </div>

          <div className="border rounded-lg p-4 shadow-sm relative bg-white mt-10">
            <h2 className="text-lg font-semibold mb-2">Additional Details</h2>

            {/* Uploaded additional files preview */}
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

            {/* Upload additional files input */}
            <div>
              <input
                type="file"
                ref={additionalFilesInputRef}
                multiple
                accept=".dxf,.dwg"
                onChange={handleAdditionalFilesChange}
                className="hidden"
              />
              <button
                onClick={openFileDialog}
                className="absolute top-0 right-0 p-2 mt-2 mr-2 text-gray-500 hover:text-black"
                aria-label="Upload additional files"
              >
                <FiPaperclip size={20} />
              </button>
              <Input placeholder="Additional Text..." className="border-none" allowClear />
            </div>
          </div>
        </div>

        {/* Right side - form options */}
        <div className="space-y-5">
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select the drawing scale 01 : </p>
            <p className="w-20">1 : 1 </p>
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Drawing Measurement Unit: </p>
            <Select
              style={{ width: 145 }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "yiminghe", label: "Yiminghe" },
              ]}
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select Rubber type: </p>
            <Select
              style={{ width: 145 }}
              options={[
                { value: "gomma_para1", label: "Gomma para1" },
                { value: "gomma_para", label: "Gomma para" },
              ]}
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Select Thickness: </p>
            <Select
              style={{ width: 145 }}
              options={[
                { value: "1mm", label: "1mm" },
                { value: "2mm", label: "2mm" },
              ]}
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-sm shadow-2xl">
            <p className="w-full">Number of Pieces: </p>
            <div className="flex items-center gap-2">
              <button
                onClick={decrement}
                className="border border-black rounded-[2px] cursor-pointer"
                aria-label="Decrease number of pieces"
              >
                <LuMinus size={20} />
              </button>
              <input
                value={numberOfPieces}
                onChange={handleInputChange}
                className="w-16 border border-black text-center rounded-[2px]"
                inputMode="numeric"
                aria-label="Number of pieces"
              />
              <button
                onClick={increment}
                className="border border-black rounded-[2px] cursor-pointer"
                aria-label="Increase number of pieces"
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center text-5xl font-extrabold gap-2">
            <FaDollarSign />
            <p>4.49</p>
          </div>

          <Link href="/track-order" passHref>
            <button className="bg-[#F97316] px-5 py-2 rounded-sm cursor-pointer flex items-center gap-2 text-white">
              <MdShoppingCart size={20} />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaterialsQuotePage;
