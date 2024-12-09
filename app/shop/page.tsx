import React from 'react'
import Header from '../(components)/header/header'
import Image from 'next/image'
import Delivery from '../(components)/delivery/delivery'

export default function shop() {
  return (
    
    <>
  <Header />

  
  <div className="w-full h-auto">
    <Image src={"Group 78.svg"} alt="" width={1488} height={316} className="w-full h-auto" />
  </div>

  
  <div className="w-full h-[100px] bg-[#FAF4F4] flex mt-20 items-center px-4 md:px-8">
    
    
    <div className="w-auto h-[30px] flex gap-2 ml-4">
      <Image src={"Vector (8).svg"} alt="" width={25} height={25} />
      <p className="font-poppins font-normal text-xl leading-7">Filter</p>
    </div>

    
    <div className="ml-4 flex gap-2">
      <Image src={"ci_grid-big-round.svg"} alt="" width={28} height={28} />
      <Image src={"bi_view-list.svg"} alt="" width={28} height={28} />
    </div>

    <div className="border-l-[1px] bg-[#9F9F9F] ml-4 h-full"></div>

    
    <div className="font-poppins font-normal text-base leading-6 ml-4">
      <p>Showing 1-16 of 32 results</p>
    </div>

    
    <div className="ml-auto flex gap-2">
      <p className="font-poppins font-normal text-xl leading-7 mt-2">Show</p>
      <button className="w-[55px] h-[55px] bg-white text-[#9F9F9F]">16</button>
    </div>

    
    <div className="ml-4 flex gap-2">
      <p className="font-poppins font-normal text-xl leading-7 mt-2">Sort by</p>
      <button className="w-[188px] h-[55px] bg-white text-[#9F9F9F]">Default</button>
    </div>
  </div>

  
  <div className="w-full h-auto">
    <div className="w-full h-auto flex flex-wrap justify-center gap-6 px-4">
      <Image src={"Group 18.svg"} alt="" width={287} height={397} />
      <Image src={"Group 15.svg"} alt="" width={287} height={397} />
      <Image src={"Group 16.svg"} alt="" width={287} height={397} />
      <Image src={"Group 17.svg"} alt="" width={287} height={397} />
    </div>

    <div className="w-full flex flex-wrap justify-center gap-6 mt-8 px-4">
      <Image src={"Group 80.svg"} alt="" width={1230} height={397} />
      <Image src={"Group 81.svg"} alt="" width={1230} height={397} />
      <Image src={"Group 82.svg"} alt="" width={1230} height={397} />
    </div>

    
    <div className="mt-10 flex justify-center gap-6">
      <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">1</button>
      <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">2</button>
      <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">3</button>
      <button className="w-[98px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">Next</button>
    </div>
  </div>

 
  <Delivery />
</>

  )
}
