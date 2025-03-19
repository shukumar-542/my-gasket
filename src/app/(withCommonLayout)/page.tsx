import React from "react";
import heroImage from "../../assets/hero.jpeg";
const page = () => {
  return (
    <div
    className="min-h-[70vh] "
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat : 'no-repeat',
        width: "100%",
      }}
    >
    
    </div>
  );
};

export default page;
