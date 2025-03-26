import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface IProduct {
    image:  StaticImageData | string;
    title: string;
  }
  
  interface ProductProps {
    product: IProduct;
  }

const Product: React.FC<ProductProps> = ({product}) => {
  return (
    <div className="relative cursor-pointer rounded-md overflow-hidden group">
      <Image
        className="w-full transition-transform duration-500 group-hover:scale-110 h-[410px]"
        height={400}
        width={400}
        src={product?.image}
        alt="img"
      />
      <div className="absolute inset-0 bg-black opacity-45"></div>
      <p className="absolute text-white top-1/2 left-[75px] text-[42px] drop-shadow-[2px_2px_15px_rgba(255,255,255,1)]">
        {product?.title}
      </p>
    </div>
  )
}

export default Product