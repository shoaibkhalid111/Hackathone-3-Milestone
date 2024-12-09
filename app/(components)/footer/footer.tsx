import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
   
    <>
  <div className="w-full h-auto px-4 md:px-8 lg:px-16 py-8 bg-white">
    <div className="max-w-6xl mx-auto h-auto">
     
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
       
        <div className="flex-1 text-center lg:text-left">
          <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        
        <div className="flex-1 text-center lg:text-left">
          <p className="font-poppins font-medium text-base text-[#9F9F9F]">Links</p>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/" className="font-poppins font-medium text-sm md:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="font-poppins font-medium text-sm md:text-base">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="font-poppins font-medium text-sm md:text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-poppins font-medium text-sm md:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex-1 text-center lg:text-left">
          <p className="font-poppins font-medium text-base text-[#9F9F9F]">Help</p>
          <ul className="mt-4 space-y-4">
            <li className="font-poppins font-medium text-sm md:text-base">Payment Options</li>
            <li className="font-poppins font-medium text-sm md:text-base">Returns</li>
            <li className="font-poppins font-medium text-sm md:text-base">Privacy Policy</li>
          </ul>
        </div>

        
        <div className="flex-1 text-center lg:text-left">
          <p className="font-poppins font-medium text-base text-[#9F9F9F]">Newsletter</p>
          <div className="flex mt-4 items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-400 w-full text-sm md:text-base outline-none px-2"
            />
            <button className="underline font-poppins font-medium text-sm md:text-base ml-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-8">
        <hr className="border-gray-300" />
        <p className="font-poppins font-normal text-sm md:text-base leading-6 mt-4 text-center">
          2022 Meubel House. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</>

  )
}
