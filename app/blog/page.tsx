import Image from 'next/image'
import React from 'react'
import Header from '../(components)/header/header'
import Delivery from '../(components)/delivery/delivery'

export default function Blog() {
  return (
    
    <>
  <Header />

  
  <div className="w-full h-auto">
    <Image src={"Group 78 (4).svg"} alt="" width={1488} height={316} className="w-full h-auto" />
  </div>

  
  <div className="w-full h-auto flex mt-[100px] justify-between px-[20px]">

    
    <div className="w-full max-w-[820px]">
      <Image src={"Group 173.svg"} alt="" width={820} height={794} />
      <Image src={"Group 174.svg"} alt="" width={820} height={794} className="mt-[40px]" />
      <Image src={"Group 175.svg"} alt="" width={820} height={794} className="mt-[40px]" />
    </div>

   
    <div className="w-full max-w-[393px] mt-[40px]">
      
     
      <div className="rounded-md w-full h-[64px] border-[1px] border-black flex items-center justify-between px-4">
        <input type="text" className="w-[280px] h-[52px] text-base" placeholder="Search..." />
        <Image src={"search.svg"} alt="" width={24} height={24} />
      </div>

      
      <div className="mt-[40px]">
        <p className="font-poppins font-medium text-2xl leading-9">Categories</p>

        
        <div className="mt-[30px] space-y-[30px]">
          {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((category, index) => (
            <div key={category} className="flex justify-between">
              <p className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">{category}</p>
              <p className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">{[2, 8, 7, 1, 6][index]}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-[100px]">
        <Image src={"Group 184.svg"} alt="" width={393} height={650} />
      </div>
    </div>
  </div>

  
  <div className="mt-[70px] flex justify-center gap-6 mb-[20px]">
    <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">1</button>
    <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">2</button>
    <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">3</button>
    <button className="w-[98px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">Next</button>
  </div>

  <Delivery />
</>

  )
}
