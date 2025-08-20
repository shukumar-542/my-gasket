"use client"
import Image from 'next/image'
import React from 'react'
import { LuMinus } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { useAddToCartQuery, useRemoveAddToCardMutation } from '@/redux/Api/products';
import { imageUrl } from '@/redux/baseApi';
import { toast } from 'sonner';

const CartPage = () => {
  const { data: getAddToCart } = useAddToCartQuery(localStorage.getItem("session_id"))
  const [removeAddToCard] = useRemoveAddToCardMutation();

  // console.log(getAddToCart?.uploads)

  const handleRemoveProduct = (id: any) => {
    // Logic to remove product from cart  

    // console.log(id)

    removeAddToCard(id)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.data?.message)

      })
      .catch((error) => toast.error('something went wrong'));


  }
  return (
    <div className="mt-22 py-10 container mx-auto px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div className="bg-white border rounded-md p-2 ">
          <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>

          {getAddToCart?.uploads?.map((item: any, index: any) => (
            <div
              key={index}
              className="flex-row md:flex items-center gap-5 border rounded-md bg-[#F2F2F2] m-5 p-3"
            >
              <Image
                src={
                  item.material?.image
                    ? `${imageUrl}${item.material.image}`
                    : "/placeholder.png" // fallback image inside /public
                }
                height={400}
                width={350}
                alt={item.file_name || "No image available"}
                className="rounded-md"
              />

              {/* Details */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">File :</span>{" "}
                  {item.file_name}
                </p>

                <p>
                  <span className="font-semibold">Drawing Measurement Unit:</span>{" "}
                  {item.unit}
                </p>

                <p>
                  <span className="font-semibold">Selected Rubber :</span>{" "}
                  {item.tipo_gomma}
                </p>

                <p>
                  <span className="font-semibold">Thickness :</span>{" "}
                  {item.spessore}
                </p>

                <div className="flex gap-2 items-center">
                  <p>QTY</p>
                  <button
                    className="border border-black rounded-[2px] cursor-pointer"
                  // onClick={() => decrement(item.id)}
                  >
                    <LuMinus size={20} />
                  </button>
                  <input
                    value={item.quantity}
                    readOnly
                    className="w-16 border border-black text-center rounded-[2px]"
                  />
                  <button
                    className="border border-black rounded-[2px] cursor-pointer"
                  // onClick={() => increment(item.id)}
                  >
                    <FiPlus size={20} />
                  </button>
                </div>

                <p>
                  Unit Price:{" "}
                  <span className="font-semibold">€{item.unit_price}</span>
                </p>

                <div className="flex items-center gap-2">
                  <button onClick={() => handleRemoveProduct(item?.cart_item_id)} className="bg-[#FFEDD5] cursor-pointer border border-[#F59E0B] px-4 py-1 rounded-sm">
                    Remove Item
                  </button>
                  {/* <button className="bg-[#F59E0B] text-white px-4 py-1 rounded-sm">
                    Edit Item
                  </button> */}
                </div>
              </div>
            </div>
          ))}



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