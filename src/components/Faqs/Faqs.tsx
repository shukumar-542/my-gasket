"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq  {
  item : string,
  title : string,
  des : string
}

const Faqs = ({faqs} : {faqs : Faq[]}) => {

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <Accordion  type="single" collapsible>
      {
          faqs?.map((faq , i)=>{
            return(
              <AccordionItem key={i+1} value={`item-${i+1}`} className="border-b-2">
              <AccordionTrigger className="flex justify-between items-center w-full">
                <span className="text-[18px] md:text-[24px]">{faq?.title}</span>
                
              </AccordionTrigger>
              <AccordionContent className="text-[#334155] text-[16px] md:text-[18px]">
                {faq?.des}
              </AccordionContent>
            </AccordionItem>
            )
          })
        }
    </Accordion>
        
    </div>
  );
};

export default Faqs;
