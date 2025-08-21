"use client";
import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import img from "../../../assets/product2.png";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import { useAddToCartQuery, useChekoutProductMutation, useGetOrderSummeryQuery } from "@/redux/Api/products";
import { imageUrl } from "@/redux/baseApi";
import { toast } from "sonner";
const CheckOutPage = () => {
  const [businessType, setBusinessType] = useState("business");
  const { data: getAddToCart } = useAddToCartQuery(localStorage.getItem("session_id"))
  const { data: orderSummery } = useGetOrderSummeryQuery(localStorage.getItem("session_id"))
  const [checkoutProduct] = useChekoutProductMutation();

  // console.log(orderSummery)

  const [fullName, setFullName] = useState("");

  const handleChange = (value: string) => {
    setBusinessType(value);
  };


  const handleAddToCart = (values: any) => {

    console.log("name", values?.full_name)

    const data = {
      session_id: localStorage.getItem("session_id"),
      full_name: businessType === "personal" ? values?.full_name : "",
      social_security_number: businessType === "personal" ? values?.social_security_number : "",
      customer_type: businessType,
      vat_number: businessType === "business" ? values?.vat_number : "",
      email: values?.email,
      phone: values?.phone,
      address: values?.address,
      payment_method: "stripe"

    }

    checkoutProduct(data)
      .unwrap()
      .then((payload) => {

        toast.success(payload?.message)
        localStorage.removeItem("session_id")
        // window.location.href = "/"
        // Open Stripe checkout in a new tab
        if (payload?.stripe_checkout_url) {
          window.open(payload.stripe_checkout_url, "_blank");
        }

      })
      .catch((error) => {
        console.error("Error during checkout:", error);
        toast.error('Something went wrong!');
      });


  }




  return (
    <div className="container mx-auto px-2 md:px-0 pt-22">
      <Form onFinish={handleAddToCart}>

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
                <p className="mt-8 mb-1">VAT Number</p>
                <Form.Item name={"vat_number"}>
                  <Input
                    rootClassName="custom-input"

                    placeholder="Enter your VAT number"

                  />
                </Form.Item>

              </div>
            ) : (
              <>
                <div>
                  <p className="mt-5 mb-1">Full Name</p>
                  <Form.Item name={"full_name"}>
                    <Input
                      rootClassName="custom-input"
                      placeholder="Enter your Full Name"
                    />
                  </Form.Item>

                </div>
                <div>
                  <p className="mt-5 mb-1">Social Security Number</p>
                  <Form.Item name={"social_security_number"}>
                    <Input
                      rootClassName="custom-input"
                      placeholder="Enter your Social Security Number"
                    />
                  </Form.Item>

                </div>
              </>
            )}



            <div>
              <p className="mt-5 mb-1">Email</p>
              <Form.Item name={"email"}>
                <Input
                  rootClassName="custom-input"
                  placeholder="Enter your email"
                />
              </Form.Item>

            </div>
            <div>
              <p className="mt-5 mb-1">Phone</p>
              <Form.Item name={"phone"}>
                <Input
                  rootClassName="custom-input"
                  placeholder="Enter your phone number"
                />
              </Form.Item>

            </div>
            <div>
              <p className="mt-5 mb-1">Address</p>
              <Form.Item name={"address"}>
                <Input
                  rootClassName="custom-input"
                  placeholder="Enter your Address"
                />
              </Form.Item>

            </div>
            <div>
              <p className="mt-5 mb-1">Additional Note</p>
              <Form.Item name={"additional_note"}>
                <TextArea
                  rows={4}
                  rootClassName="custom-input"
                  placeholder="Additional Text"
                />
              </Form.Item>

            </div>

          </div>
          <div>
            <p className="text-xl font-bold">Your Order</p>
            <div className="shadow-2xl rounded-md  mt-5">
              <div className="flex justify-between bg-[#E5E7EB] py-3 rounded-tl-md  rounded-tr-md text-xl font-semibold p-2">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              {
                getAddToCart?.uploads?.map((item: any) => (
                  <div key={item.cart_item_id} className="flex justify-between items-center m-5 pb-5 border-b ">
                    <div className="flex items-center gap-5">
                      <Image
                        src={
                          item.material?.image
                            ? `${imageUrl}${item.material.image}`
                            : "/placeholder.png" // fallback image inside /public
                        }
                        height={100}
                        className="rounded-md h-20 w-28"
                        width={100}
                        alt="img"
                      />
                      <div>
                        <p className="text-xl font-semibold">{item.material?.name}</p>
                        <p className="text-[#637381]">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p>€ {item.costo_totale}</p>
                  </div>

                ))
              }



              <div className="flex justify-between bg-[#E5E7EB] pt-4 px-5  overflow-hidden  font-semibold p-2">
                <p>Subtotal</p>
                <p>€ {orderSummery?.subtotal}</p>
              </div>
              <div className="flex justify-between bg-[#E5E7EB] pb-4 px-5 rounded-bl-md  rounded-br-md overflow-hidden  font-semibold p-2">
                <p>Shipping Cost (+)</p>
                <p>€ {orderSummery?.shipping_cost}</p>
              </div>
            </div>

            {/* Payment card */}
            <div className="shadow-2xl rounded-md  mt-5">
              <div className="flex justify-between bg-[#E5E7EB] py-3 rounded-tl-md  rounded-tr-md text-xl font-semibold p-2">
                <p>Payment </p>
                <p>€ {orderSummery?.total_cost}</p>
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
            <button type="submit" className="bg-[#F97316] cursor-pointer w-full mt-5 rounded-sm text-white py-2 text-[20px] shadow-2xl">
              Place an Order
            </button>

          </div>
        </div>
      </Form>

    </div>
  );
};

export default CheckOutPage;
