import React from 'react'
import Header from '../(components)/header/header'
import Image from 'next/image'
import Delivery from '../(components)/delivery/delivery'

export default function contact() {
  return (
   
    <>
  <Header />

  
  <div className="w-full h-auto">
    <Image src={"Group 78 (1).svg"} alt="" width={1488} height={316} className="w-full h-auto" />
  </div>

 
  <div className="w-full h-auto">
    
    
    <div className="w-full text-center mt-[100px]">
      <p className="font-poppins font-medium text-4xl leading-[54px]">Get In Touch With Us</p>
    </div>

    
    <div className="w-full text-center mt-[40px]">
      <p className="font-poppins font-medium text-base leading-6 text-[#9F9F9F]">
        For More Information About Our Product & Services. Please Feel Free To Drop Us
      </p>
      <p className="font-poppins font-medium text-base leading-6 text-[#9F9F9F] mt-[20px]">
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
    </div>

    
    <div className="flex flex-wrap justify-center mt-[100px]">

     
      <div className="w-full md:w-[393px] mt-[80px] mx-[20px]">
        <div className="flex gap-5 mt-[80px]">
          <Image src={"map.svg"} alt="" width={23} height={23} />
          <div className="w-[212px] mt-[40px]">
            <p className="font-poppins font-medium text-2xl leading-9">Address</p>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        <div className="flex gap-5 mt-[50px]">
          <Image src={"phone.svg"} alt="" width={23} height={23} />
          <div className="w-[212px] mt-[40px]">
            <p className="font-poppins font-medium text-2xl leading-9">Phone</p>
            <p>Mobile: +(84) 546-6789<br /> Hotline: +(84) 456-6789</p>
          </div>
        </div>

        <div className="flex gap-5 mt-[50px]">
          <Image src={"clock.svg"} alt="" width={23} height={23} />
          <div className="w-[212px] mt-[40px]">
            <p className="font-poppins font-medium text-2xl leading-9">Working Time</p>
            <p>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

     
      <div className="w-full md:w-[635px] mt-[50px] mx-[20px]">
       
        <div className="flex flex-col gap-1 mt-[50px]">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Abc" className="w-full h-[75px] border-2 rounded-md p-3" />
        </div>

      
        <div className="flex flex-col gap-1 mt-[50px]">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Abc@gmail" className="w-full h-[75px] border-2 rounded-md p-3" />
        </div>

       
        <div className="flex flex-col gap-1 mt-[50px]">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="This is optional" className="w-full h-[75px] border-2 rounded-md p-3" />
        </div>

       
        <div className="flex flex-col gap-1 mt-[50px]">
          <label htmlFor="msg">Message</label>
          <textarea className="border-2 rounded-md p-4 w-full" placeholder="Hi, I would like to ask about..." id="msg" rows={5}></textarea>
        </div>
      </div>

    </div>
  </div>

  
  <Delivery />
</>

  )
}
