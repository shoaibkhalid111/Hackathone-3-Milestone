import React from 'react'
import Header from '../(components)/header/header'
import Image from 'next/image'
import Delivery from '../(components)/delivery/delivery'

export default function Cart() {
  return (
   
    <>
  <Header />

  
  <div className="w-full h-auto">
    <Image src={"Group 78 (3).svg"} alt="" width={1488} height={316} className="w-full h-auto" />
  </div>

  
  <div className="w-full h-auto flex items-center justify-center gap-4 mt-[80px]">

    
    <div className="w-[817px] h-[216px]">
      <Image src={"Group 144.svg"} alt="" width={817} height={216} />
    </div>

    
    <div className="w-[393px] h-[390px] bg-[#FFF9E5] mt-[150px] p-6">
      <p className="font-poppins font-semibold text-3xl leading-[48px] text-center">Cart Totals</p>

      
      <div className="flex justify-between items-center mt-[50px]">
        <p className="font-poppins font-medium text-base leading-6">Subtotal</p>
        <p className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">Rs. 250,000.00</p>
      </div>

      
      <div className="flex justify-between items-center mt-[30px]">
        <p className="font-poppins font-medium text-base leading-6">Total</p>
        <p className="font-poppins font-medium text-xl leading-8 text-[#B88E2F]">Rs. 250,000.00</p>
      </div>

      
      <button className="rounded-lg border-[1px] border-black w-full h-[50px] font-poppins font-normal text-base leading-6 mt-[40px]">
        Check Out
      </button>
    </div>
  </div>

 
  <Delivery />
</>

  )
}
