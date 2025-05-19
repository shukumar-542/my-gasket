import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
