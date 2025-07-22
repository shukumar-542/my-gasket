import Image, { StaticImageData } from "next/image";
import React from "react";

type FeatureCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  reverse?: boolean;
  borderColor: string;
};
const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  reverse = false,
  borderColor,
}) => {
  return (
    <div
      className={`md:flex items-center gap-20  ${
        reverse ? "flex-row-reverse" : "flex-row"
      }
      `}
    >
      <div className="w-full ">
        <Image
          src={image}
          height={600}
          width={600}
          className="w-full"
          alt="img"
        />
      </div>
      <div className="w-full">
        <p className="text-[32px] font-extrabold pb-5">{title}</p>
        <div
          className="border-3 max-w-[25%]  "
          style={{ borderColor, borderStyle: "solid" }}
        ></div>
        <p className="pt-5 text-[#475569] text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
