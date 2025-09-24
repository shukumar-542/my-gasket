"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Faq {
  item: string;
  title: string;
  des: string;
}

const Faqs = ({ faqs }: { faqs: Faq[] }) => {
  const { t } = useTranslation();
  return (
    <div className="xl:container mx-auto py-10 px-5">
      <h1 className="text-[25px] md:text-[52px] font-extrabold text-center py-10">
        {t("mostFrequentlyAskedQuestionsTitle")}
      </h1>
      <Accordion type="single" collapsible>
        {faqs?.map((faq, i) => {
          return (
            <AccordionItem
              key={i + 1}
              value={`item-${i + 1}`}
              className="last:border-b-1"
            >
              <AccordionTrigger className="flex justify-between items-center w-full">
                <span className="text-[18px] md:text-[24px]">{faq?.title}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#334155] text-[16px] md:text-[18px]">
                {faq?.des}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    
    </div>
  );
};

export default Faqs;
