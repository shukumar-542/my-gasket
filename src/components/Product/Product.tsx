import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IProduct {
  image: StaticImageData | string;
  title: string;
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
          src={product?.image}
          alt="img"
        />
      </div>
      <div className="bg-white p-2">
        <p className="text-xl font-bold">{product?.title}</p>
        <p className="bg-black text-white inline-block px-2 py-1 rounded-md my-2">
          - 40&deg; / +120&deg; C
        </p>
        <p>Elevata resisitenza agli agenti atmosterici</p>
        <Link href={`/all-product/id`}>
          <button className="bg-black text-white px-2 py-1 rounded-md my-2 cursor-pointer">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
