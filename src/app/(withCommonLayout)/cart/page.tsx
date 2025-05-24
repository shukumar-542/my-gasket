import Image from 'next/image'
import React from 'react'
import product from "../../../assets/product2.png";
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';

const CartPage = () => {
  return (
    <div className="mt-22 py-10 container mx-auto px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div className="bg-white border rounded-md p-2 ">
          <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>
          <div className="flex-row md:flex   items-center gap-5 border rounded-md bg-[#F2F2F2] m-5 p-3">
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
                <button className="bg-[#FFEDD5] border border-[#F59E0B] px-4 py-1 rounded-sm">
                  Remove Item
                </button>
                <button className="bg-[#F59E0B] text-white  px-4 py-1 rounded-sm">
                  Edit Item
                </button>
              </div>
            </div>
          </div>
          <div className="flex-row md:flex   items-center gap-5 border rounded-md bg-[#F2F2F2] m-5 p-3">
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
                <button className="bg-[#FFEDD5] border border-[#F59E0B] px-4 py-1 rounded-sm">
                  Remove Item
                </button>
                <button className="bg-[#F59E0B] text-white  px-4 py-1 rounded-sm">
                  Edit Item
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-md border shadow-md px-10">
            <h1 className="text-center mt-5 text-xl font-semibold border-b pb-2">
              Order Summary
            </h1>
            <div className="p-8 border-b">
              <p className="my-3 flex items-center justify-between">
                <span className="font-semibold">Subtotal:</span>
                <span>€101.39</span>
              </p>
              <p className="my-3 flex items-center justify-between">
                <span className="font-semibold">Shipping:</span>
                <span>TBD</span>
              </p>
              <p className="my-3 flex items-center justify-between">
                <span className="font-semibold">Sales Tax:</span>
                <span>TBD</span>
              </p>
            </div>
            <p className="my-3 flex items-center justify-between">
              <span className="font-semibold text-xl">Estimated Total:</span>
              <span>€101.39</span>
            </p>
            {/* <div className="flex justify-center  py-5"> */}
            <Link href={"/checkout"}>
              <button className="bg-[#F97316] cursor-pointer px-5 py-2 rounded-sm text-white w-full my-5">
                Checkout
              </button>
            </Link>
            {/* </div> */}
            <p className="text-center  font-semibold mb-4">
              Need help? Call us at +39 351-901-5721
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage