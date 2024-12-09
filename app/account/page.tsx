import React from 'react'
import Header from '../(components)/header/header'
import Image from 'next/image'
import Delivery from '../(components)/delivery/delivery'

export default function Account() {
  return (
  
  <>
  <Header />

  {/* Hero Image Section */}
  <div className="w-full h-[316px]">
    <Image src={"Group 78 (2).svg"} alt="" layout="responsive" width={1488} height={316} />
  </div>

  {/* Log In and Register Section */}
  <div className="w-full mt-[100px] flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16">
    {/* Log In Section */}
    <div className="w-full lg:w-[608px] h-auto lg:h-[630px] mx-auto lg:ml-[130px]">
      <p className="font-poppins font-semibold text-4xl leading-[54px]">Log In</p>
      <div className="flex flex-col gap-1 mt-[70px]">
        <label htmlFor="name">Username or email address</label>
        <input
          type="text"
          id="name"
          placeholder=""
          className="w-full sm:w-[528px] h-[75px] border-2 rounded-md p-3"
        />
      </div>

      <div className="flex flex-col gap-1 mt-[70px]">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder=""
          className="w-full sm:w-[528px] h-[75px] border-2 rounded-md p-3"
        />
      </div>

      <div className="mt-[70px] flex gap-4">
        <input
          className="w-[30px] h-[27px] border-[1px] border-black cursor-pointer"
          type="checkbox"
        />
        <p className="font-poppins font-normal text-base leading-6">Remember me</p>
      </div>

      <div className="mt-[50px] flex gap-5 items-center">
        <button className="rounded-lg border-[1px] border-black w-[140px] h-[50px] font-poppins font-normal text-base leading-6">
          Log In
        </button>
        <p>Lost your password?</p>
      </div>
    </div>

    {/* Register Section */}
    <div className="w-full lg:w-[608px] h-auto lg:h-[630px] mx-auto lg:ml-[130px] mt-12 lg:mt-0">
      <p className="font-poppins font-semibold text-4xl leading-[54px]">Register</p>
      <div className="flex flex-col gap-1 mt-[70px]">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          placeholder=""
          className="w-full sm:w-[528px] h-[75px] border-2 rounded-md p-3"
        />
      </div>

      <p className="mt-[50px] w-full sm:w-[453px] h-[48px] font-poppins font-light text-base leading-6">
        A link to set a new password will be sent to your email address.
      </p>

      <p className="mt-[20px] w-full sm:w-[453px] h-[48px] font-poppins font-light text-base leading-6">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
      </p>
      <p className="w-full sm:w-[453px] h-[48px] font-poppins font-semibold text-base leading-6 mt-[20px]">
        privacy policy.
      </p>

      <div className="mt-[83px]">
        <button className="rounded-lg border-[1px] border-black w-full sm:w-[140px] h-[50px] font-poppins font-normal text-base leading-6">
          Register
        </button>
      </div>
    </div>
  </div>

  <Delivery />
</>

      
    
  )
}
