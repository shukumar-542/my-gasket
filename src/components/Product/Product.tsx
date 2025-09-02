import { imageUrl } from "@/redux/baseApi";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IProduct {
  name: string
  image: StaticImageData | string;
  title: string;
  description?: string;
  temperature: string;
  id : string
}

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {



  return (
    <div className="group rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="overflow-hidden">
        <Image
          className="w-full h-[250px] object-cover transform transition-transform duration-700 group-hover:scale-110"
          height={200}
          width={200}
          src={`${imageUrl}/${product?.image}`}
          alt="img"
        />
      </div>
      <div className="bg-white p-2">
        <p className="text-xl font-bold">{product?.name}</p>
        <p className="border border-black  inline-block px-2 py-1 rounded-sm my-2">
          {product?.temperature
            ?.split("/")
            ?.map(temp => temp.trim() + "°")
            ?.join(" / ")}{" "} C
        </p>
        <p>{product?.description ? product?.description : "No descriptions"}</p> 
        <Link href={`/all-product/${product?.id}`}>
          <button className="bg-black text-white px-6 py-2 rounded-md my-2 cursor-pointer">
            See More
          </button>

        </Link>
      </div>
    </div>
  );
};

export default Product;
