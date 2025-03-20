import React from 'react'

interface ButtonProps {
    children : React.ReactNode,
    className? :  string
}

const Button : React.FC<ButtonProps> = ({children , className}) => {
  return (
    <div className={`${className} bg-[#F97316] text-white text-center rounded-sm py-2 mt-2`}>{children}</div>
  )
}

export default Button