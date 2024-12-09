import React from 'react'

export default function Delivery() {
  return (
    
    <>
  <div className="w-full h-auto bg-[#FAF4F4] flex flex-col md:flex-row items-center gap-8 md:gap-4 justify-center py-8">
   
    <div className="text-center md:text-left w-full md:w-1/3 px-4">
      <p className="font-poppins font-medium text-xl md:text-3xl leading-8 md:leading-[48px]">
        Free Delivery
      </p>
      <p className="font-poppins font-normal text-sm md:text-xl leading-6 md:leading-7 text-[#9F9F9F]">
        For all orders over $50, consectetur adipim scing elit.
      </p>
    </div>

   
    <div className="text-center md:text-left w-full md:w-1/3 px-4">
      <p className="font-poppins font-medium text-xl md:text-3xl leading-8 md:leading-[48px]">
        90 Days Return
      </p>
      <p className="font-poppins font-normal text-sm md:text-xl leading-6 md:leading-7 text-[#9F9F9F]">
        If goods have problems, consectetur adipim scing elit.
      </p>
    </div>

    
    <div className="text-center md:text-left w-full md:w-1/3 px-4">
      <p className="font-poppins font-medium text-xl md:text-3xl leading-8 md:leading-[48px]">
        Secure Payment
      </p>
      <p className="font-poppins font-normal text-sm md:text-xl leading-6 md:leading-7 text-[#9F9F9F]">
        100% secure payment, consectetur adipim scing elit.
      </p>
    </div>
  </div>
</>

  )
}
