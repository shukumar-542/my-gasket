import React from 'react'
import Button from '../Button/Button'

const HowItWorks = () => {
  return (
    <div className='container mx-auto pb-10 '>
        <h1 className='text-[20px] md:text-[48px]  font-extrabold text-center uppercase'>How It Works</h1>
        <p className='text-[16px] text-[#686868] text-center mx-2 md:mx-0'>We break down the process into simple steps to ensure seamless execution, from start to finish.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 mx-2 ms:mx-0 '>
            <div className='bg-white shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3  absolute -top-5 bg-white '>01</p>
                <p  className='text-[20px] font-bold mt-5'>Title 01</p>
                <p className='text-[16px] mt-2'>Our strategic partnerships are the foundation of our success, enabling us to combine expertise. </p>
                <Button className='mt-4 inline-block px-5'>Get Instant Quote</Button>
            </div>
            <div className='bg-white shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3  absolute -top-5 bg-white '>02</p>
                <p  className='text-[20px] font-bold mt-5'>Title 02</p>
                <p className='text-[16px] mt-2'>Our strategic partnerships are the foundation of our success, enabling us to combine expertise. </p>
            </div>
            <div className='bg-white shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3  absolute -top-5 bg-white '>03</p>
                <p  className='text-[20px] font-bold mt-5'>Title 03</p>
                <p className='text-[16px] mt-2'>Our strategic partnerships are the foundation of our success, enabling us to combine expertise. </p>
            </div>
            <div className='bg-white shadow-2xl rounded-sm p-5 relative'>
                <p className='border-2  inline-block p-2 rounded-full border-[#2563EB] px-3  absolute -top-5 bg-white '>04</p>
                <p  className='text-[20px] font-bold mt-5'>Title 04</p>
                <p className='text-[16px] mt-2'>Our strategic partnerships are the foundation of our success, enabling us to combine expertise. </p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks