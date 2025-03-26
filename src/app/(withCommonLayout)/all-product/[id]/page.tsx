import React from "react";
import hero from "../../../../assets/detailsHero.png";
import img from "../../../../assets/details1.png";
import Image from "next/image";
const ProductDetailsPage = () => {
  return (
    <div
      className="pt-[110px]"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundRepeat : 'no-repeat',
        backgroundPosition:'center',
        backgroundSize : '100%'
      }}
    >
      <div className="container mx-auto text-white flex items-center ">
        <div>
          <p className="text-[48px] font-extrabold uppercase">Gomma PARA</p>
          <p>
            Simplify your event planning with powerful, easy-to-use features
            designed to enhance guest experience and streamline management.
          </p>
        </div>
        <div>
            <Image src={img} height={600} width={600} alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
