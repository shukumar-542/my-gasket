"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const WhatOurCustomerSay = () => {
      const { t } = useTranslation()
    
    return (
        <h1 className="text-[25px] md:text-[52px] font-extrabold text-center my-10 uppercase">
            {t("whatCustomersSay")}
        </h1>
    )
}

export default WhatOurCustomerSay