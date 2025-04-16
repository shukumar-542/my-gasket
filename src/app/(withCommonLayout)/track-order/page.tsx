"use client";
import React, { useState } from "react";
import product from "../../../assets/product2.png";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
const TrackOrderPage = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="mt-22 py-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-white border rounded-md p-2 ">
          <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>
          <div className="flex  items-center gap-5 border rounded-md bg-[#F2F2F2] m-5 p-3">
            <Image
              src={product}
              height={400}
              width={350}
              alt="img"
              className="rounded-md"
            />
            <div className="space-y-2">
              <p>
                <span className="font-semibold">File :</span> pino.dxf ,
                gama.dxf{" "}
              </p>
              <p>
                <span className="font-semibold">Drawing Measurement Unit:</span>{" "}
                Millimeters{" "}
              </p>
              <p>
                <span className="font-semibold">Selected Rubber :</span> Rubber
                Para{" "}
              </p>
              <p>
                <span className="font-semibold">Thickness :</span> 2 mm
              </p>
              <div className="flex gap-2 items-center">
                <p>QTY</p>
                <button
                  //   onClick={decrement}
                  className="border border-black rounded-[2px] cursor-pointer"
                >
                  <LuMinus size={20} />
                </button>
                <input
                  //   value={quantity}
                  //   onChange={}
                  className="w-16 border border-black text-center rounded-[2px]"
                />
                <button
                  //   onClick={increment}
                  className="border border-black rounded-[2px] cursor-pointer"
                >
                  <FiPlus size={20} />
                </button>
              </div>
              <p>
                {" "}
                Unit Price: <span className="font-semibold">€0.58</span>

                
              </p>
              <div className="flex items-center gap-2">
                    <button className="bg-[#FFEDD5] border border-[#F59E0B] px-4 py-1 rounded-sm">Remove Item</button>
                    <button className="bg-[#F59E0B] text-white  px-4 py-1 rounded-sm">Edit Item</button>
                </div>
            </div>
          </div>
          <div className="flex  items-center gap-5 border rounded-md bg-[#F2F2F2] m-5 p-3">
            <Image
              src={product}
              height={400}
              width={350}
              alt="img"
              className="rounded-md"
            />
            <div className="space-y-2">
              <p>
                <span className="font-semibold">File :</span> pino.dxf ,
                gama.dxf{" "}
              </p>
              <p>
                <span className="font-semibold">Drawing Measurement Unit:</span>{" "}
                Millimeters{" "}
              </p>
              <p>
                <span className="font-semibold">Selected Rubber :</span> Rubber
                Para{" "}
              </p>
              <p>
                <span className="font-semibold">Thickness :</span> 2 mm
              </p>
              <div className="flex gap-2 items-center">
                <p>QTY</p>
                <button
                  //   onClick={decrement}
                  className="border border-black rounded-[2px] cursor-pointer"
                >
                  <LuMinus size={20} />
                </button>
                <input
                  //   value={quantity}
                  //   onChange={}
                  className="w-16 border border-black text-center rounded-[2px]"
                />
                <button
                  //   onClick={increment}
                  className="border border-black rounded-[2px] cursor-pointer"
                >
                  <FiPlus size={20} />
                </button>
              </div>
              <p>
                {" "}
                Unit Price: <span className="font-semibold">€0.58</span>

                
              </p>
              <div className="flex items-center gap-2">
                    <button className="bg-[#FFEDD5] border border-[#F59E0B] px-4 py-1 rounded-sm">Remove Item</button>
                    <button className="bg-[#F59E0B] text-white  px-4 py-1 rounded-sm">Edit Item</button>
                </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
