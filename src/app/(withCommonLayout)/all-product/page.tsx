"use client"
import React from "react";
import product1 from "../../../assets/meterial.png";
import product2 from "../../../assets/product1.png";
import product3 from "../../../assets/product2.png";
import materials from "../../../assets/materials.png";
import Image from "next/image";
import Product from "@/components/Product/Product";
import { useGetProductsQuery } from "@/redux/Api/products";
const AllProductPage = () => {

  const {data : products, isLoading} = useGetProductsQuery({});

  console.log(products?.data?.materials)
  
  return (
    <div>
      <div className="mt-12 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={materials}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          MATERIALS WE OFFER
        </p>
      </div>

      {/* All product Page */}

      <div className="container mx-auto my-20">
        <p className="uppercase text-2xl font-bold mb-10">Type 1</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Product product={{ image: product1, title: "GOMMA PARA" }} />
          <Product product={{ image: product2, title: "GOMMA PARA" }} />
          <Product product={{ image: product3, title: "GOMMA PARA" }} />
          <Product product={{ image: product1, title: "GOMMA PARA" }} />
          <Product product={{ image: product3, title: "GOMMA PARA" }} />
          <Product product={{ image: product2, title: "GOMMA PARA" }} />
        </div>
        <p className="uppercase text-2xl font-bold my-10">Type 2</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Product product={{ image: product1, title: "GOMMA PARA" }} />
        </div>


        <p className="uppercase text-2xl font-bold my-10">Type 3</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Product product={{ image: product1, title: "GOMMA PARA" }} /> 
          <Product product={{ image: product2, title: "GOMMA PARA" }} />
          <Product product={{ image: product3, title: "GOMMA PARA" }} />
        </div>
        <p className="uppercase text-2xl font-bold my-10">Type 4</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Product product={{ image: product1, title: "GOMMA PARA" }} />
          <Product product={{ image: product2, title: "GOMMA PARA" }} />
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
