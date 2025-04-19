"use client";
import { Input, Select } from "antd";
import React, { useState } from "react";
import img from "../../../assets/product2.png";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
const CheckOutPage = () => {
  const [businessType, setBusinessType] = useState("business");
  const handleChange = (value: string) => {
    setBusinessType(value);
  };

  console.log(businessType);
  return (
    <div className="container mx-auto px-2 md:px-0 pt-22">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        <div>
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-[#637381] mt-2">
            There are 3 product in your cart
          </p>
          <div className="mt-10">
            <Select
              onChange={handleChange}
              style={{ width: "100%", border: "none" }}
              defaultValue={"business"}
              className="custom-select-no-border"
              options={[
                { value: "business", label: "Business" },
                { value: "personal", label: "Personal" },
              ]}
            />
          </div>

          {businessType == "business" ? (
            <div>
              <p className="mt-5 mb-1">VAT Number</p>
              <Input
                rootClassName="custom-input"
                placeholder="Enter your VAT number"
              />
            </div>
          ) : (
            <div>
              <p className="mt-5 mb-1">Full Name</p>
              <Input
                rootClassName="custom-input"
                placeholder="Enter your Full Name"
              />
            </div>
          )}

          {
            businessType == "business" ?  <div>
            <p className="mt-5 mb-1">VAT Number</p>
            <Input
              rootClassName="custom-input"
              placeholder="Enter your VAT number"
            />
          </div> : <div>
            <p className="mt-5 mb-1">Social Security Number</p>
            <Input
              rootClassName="custom-input"
              placeholder="Enter your Social Security Number"
            />
          </div> 
          }

      
          <div>
            <p className="mt-5 mb-1">Email</p>
            <Input
              rootClassName="custom-input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p className="mt-5 mb-1">Phone</p>
            <Input
              rootClassName="custom-input"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <p className="mt-5 mb-1">Address</p>
            <Input
              rootClassName="custom-input"
              placeholder="Enter your Address"
            />
          </div>
          <div>
            <p className="mt-5 mb-1">Additional Note</p>
            <TextArea
              rows={4}
              rootClassName="custom-input"
              placeholder="Additional Text"
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Your Order</p>
          <div className="shadow-2xl rounded-md  mt-5">
            <div className="flex justify-between bg-[#E5E7EB] py-3 rounded-tl-md  rounded-tr-md text-xl font-semibold p-2">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <div className="flex justify-between items-center m-5 pb-5 border-b ">
              <div className="flex items-center gap-5">
                <Image
                  src={img}
                  height={100}
                  className="rounded-md"
                  width={100}
                  alt="img"
                />
                <div>
                  <p className="text-xl font-semibold">Rubber Para</p>
                  <p className="text-[#637381]">Quantity: 1</p>
                </div>
              </div>
              <p>€385</p>
            </div>
            <div className="flex justify-between items-center m-5 pb-5 border-b ">
              <div className="flex items-center gap-5">
                <Image
                  src={img}
                  height={100}
                  className="rounded-md"
                  width={100}
                  alt="img"
                />
                <div>
                  <p className="text-xl font-semibold">Rubber Para</p>
                  <p className="text-[#637381]">Quantity: 1</p>
                </div>
              </div>
              <p>€385</p>
            </div>
            <div className="flex justify-between items-center m-5 pb-5 border-b ">
              <div className="flex items-center gap-5">
                <Image
                  src={img}
                  height={100}
                  className="rounded-md"
                  width={100}
                  alt="img"
                />
                <div>
                  <p className="text-xl font-semibold">Rubber Para</p>
                  <p className="text-[#637381]">Quantity: 1</p>
                </div>
              </div>
              <p>€385</p>
            </div>
            <div className="flex justify-between bg-[#E5E7EB] pt-4 px-5  overflow-hidden  font-semibold p-2">
              <p>Subtotal</p>
              <p>€108</p>
            </div>
            <div className="flex justify-between bg-[#E5E7EB] pb-4 px-5 rounded-bl-md  rounded-br-md overflow-hidden  font-semibold p-2">
              <p>Shipping Cost (+)</p>
              <p>€10.85</p>
            </div>
          </div>

          {/* Payment card */}
          <div className="shadow-2xl rounded-md  mt-5">
            <div className="flex justify-between bg-[#E5E7EB] py-3 rounded-tl-md  rounded-tr-md text-xl font-semibold p-2">
              <p>Payment </p>
              <p>Subtotal</p>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer p-5">
              <input
                type="radio"
                name="paymentMethod"
                value="bankTransfer"
                className="form-radio text-blue-600 focus:ring-blue-500"
                // defaultChecked
              />
              <span className="text-gray-800">Bank Transfer</span>
            </label>
          </div>

          {/* Checkout button */}
          <button className="bg-[#F97316] w-full mt-5 rounded-sm text-white py-2 text-[20px] shadow-2xl">
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
