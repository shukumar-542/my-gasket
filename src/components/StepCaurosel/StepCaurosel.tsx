"use client"
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import step1 from "@/assets/step1.png"
import step2 from "@/assets/step2.png"
import step3 from "@/assets/step3.png"
import step4 from "@/assets/step4.png"
import Image from 'next/image'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'
import QuoteModal from '../QuoteModal/QuoteModal'

export const StepCaurosel = () => {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className=' container mx-auto  '>
            <h1 className='text-[25px] md:text-[52px]  font-extrabold text-center uppercase'>{t("howItWorks")}</h1>
            <p className='text-[16px] text-[#686868] text-center mx-2 md:mx-0 mb-10'>{t("processDescription")}</p>
            <Carousel>
                <CarouselContent className="items-stretch">
                    <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/1 m-2">
                        <div
                            className="bg-white flex flex-col justify-between items-center shadow-2xl rounded-sm p-1 py-5 xl:p-5 relative h-full"
                            style={{
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <p className="text-[18px]  text-center px-8 ">
                                {t("uploadDrawing")}
                            </p>
                            <Image src={step1} height={1000} width={1000} alt="step1" />
                            <div
                                onClick={() => setOpenModal(true)}
                                className="cursor-pointer mt-2"
                            >
                                <Button className="px-6 text-[20px]">{t("getInstantQuote")}</Button>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/3  lg:basis-1/4 basis-1/1 m-2">
                        <div
                            className="bg-white flex flex-col justify-between items-center shadow-2xl rounded-sm p-1 py-5 xl:p-5 relative h-full"
                            style={{
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <p className="text-[18px] text-center px-8 ">
                                Upload your drawing (we only accept DWG or DXF files)
                            </p>
                            <Image src={step2} height={1000} width={1000} alt="step2" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3  lg:basis-1/4 basis-1/1 m-2">
                        <div
                            className="bg-white flex flex-col justify-between items-center shadow-2xl rounded-sm p-1 xl:p-5 relative h-full"
                            style={{
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <p className='text-[18px]  text-center px-8 '>Upload your drawing (we only accept DWG or DXF files) </p>
                            <Image src={step3} height={1000} width={1000} alt="step2" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-1/1  lg:basis-1/4 m-2">
                        <div
                            className="bg-white flex flex-col justify-between items-center shadow-2xl rounded-sm p-1 xl:p-5 relative h-full"
                            style={{
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <p className='text-[18px] text-center px-8 '>Upload your drawing (we only accept DWG or DXF files) </p>
                            <Image src={step4} height={1000} width={1000} alt="step2" />
                        </div>
                    </CarouselItem>

                    {/* baki 2 ta o same structure hobe */}
                </CarouselContent>

                {/* buttons container */}
                <div className="absolute -top-10 right-5 flex gap-2">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                </div>
            </Carousel>
            <QuoteModal
                openModal={openModal}
                setOpenModal={() => setOpenModal(false)}
            // onContinue={handleModalClose}
            />
        </div>
    )
}
