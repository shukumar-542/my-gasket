import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiMinus, FiPlus } from "react-icons/fi";
const Faqs = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-[48px] font-extrabold text-center my-10">
        Most frequently asked questions
      </h1>

      <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-b-2">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <span className="text-[24px]">What materials do you use for manufacturing gaskets?</span>
          
        </AccordionTrigger>
        <AccordionContent>
          We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-2">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <span className="text-[24px]">What materials do you use for manufacturing gaskets?</span>
          
        </AccordionTrigger>
        <AccordionContent>
          We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-2">
        <AccordionTrigger className="flex justify-between items-center w-full">
          <span className="text-[24px]">What materials do you use for manufacturing gaskets?</span>
          
        </AccordionTrigger>
        <AccordionContent>
          We offer a wide range of materials for our gaskets, including rubber, silicone, cork, metal, PTFE, and various composites. The material choice depends on the application requirements such as temperature, pressure, and chemical exposure.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default Faqs;
