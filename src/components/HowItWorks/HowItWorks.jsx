import React from 'react'
import Button from '../Button/Button'
import step1 from "@/assets/step1.png"
import step2 from "@/assets/step2.png"
import step3 from "@/assets/step3.png"
import step4 from "@/assets/step4.png"
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className='container mx-auto pb-10 mt-10 '>
        <h1 className='text-[20px] md:text-[48px]  font-extrabold text-center uppercase'>How It Works</h1>
        <p className='text-[16px] text-[#686868] text-center mx-2 md:mx-0'>We break down the process into simple steps to ensure seamless execution, from start to finish.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 mx-2 ms:mx-0 '>
            <div className='bg-white flex flex-col justify-center items-center shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3  absolute left-5 -top-5 bg-white '>01</p>
                <p className='text-[16px] mt-2 text-center px-8 py-10'>Upload your drawing (we only accept DWG or DXF files) </p>
                <Image src={step1} height={200} width={200} alt='step1' />
                <Button className='mt-4 inline-block px-5'>Get Instant Quote</Button>
            </div>
            <div className='bg-white flex flex-col justify-center items-center shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3 left-5  absolute -top-5 bg-white '>02</p>
                <p className='text-[16px] mt-2 text-center px-8 py-10'>Upload your drawing (we only accept DWG or DXF files) </p>
                <Image src={step2} height={200} width={200} alt='step1' />
            </div>
            <div className='bg-white flex flex-col justify-center items-center shadow-2xl  rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3 left-5 absolute -top-5 bg-white '>03</p>
                <p className='text-[16px] mt-2 text-center px-8 py-10'>Upload your drawing (we only accept DWG or DXF files) </p>
                <Image src={step3} height={200} width={200} alt='step1' />
            </div>
            <div className='bg-white flex flex-col justify-center items-center shadow-2xl  rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3 left-5 absolute -top-5 bg-white '>04</p>
                <p className='text-[16px] mt-2 text-center px-8 py-10'>Upload your drawing (we only accept DWG or DXF files) </p>
                <Image src={step4} height={200} width={200} alt='step1' />
            </div>
           
        </div>
    </div>
  )
}

export default HowItWorks