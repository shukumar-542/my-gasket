import React from "react";
import heroImage from "../../assets/hero.jpeg";
const page = () => {
  return (
    <div
    className="min-h-[70vh] "
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat : 'no-repeat',
        
        width: "100%",
      }}
    >
      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores
      exercitationem similique ea, tempora debitis ipsam qui maxime deserunt
      quos cumque obcaecati perferendis repellat molestias laboriosam ullam,
      ducimus consectetur quasi. */}
    </div>
  );
};

export default page;
