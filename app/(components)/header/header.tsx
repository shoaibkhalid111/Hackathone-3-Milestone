'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
   const route = useRouter();
  return (
    
    <>
  <div className="h-[100px] w-full px-4 md:px-8 lg:px-16 flex items-center justify-between">
    
    <div className="flex-1 flex justify-center md:justify-start">
      <ul className="flex gap-4 md:gap-8 lg:gap-10 font-poppins font-medium text-sm md:text-base leading-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>

    
    <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
      <button onClick={() => route.push("/account")} className="p-2">
        <Image src="account.svg" alt="Account" width={24} height={24} />
      </button>
      <button className="p-2">
        <Image src="search.svg" alt="Search" width={24} height={24} />
      </button>
      <button className="p-2">
        <Image src="heart.svg" alt="Favorites" width={24} height={24} />
      </button>
      <button onClick={() => route.push("/cart")} className="p-2">
        <Image src="cart.svg" alt="Cart" width={24} height={24} />
      </button>
    </div>
  </div>
</>

  )
}

export function MainHeader(){
  const route = useRouter();
    return (
        // <>
        // <div className='w-[1488px] h-[1000px]'>
        //  <div className='h-[100px] bg-[#FBEBB5] w-[1488px]'>
        //     <div className='gap-36 flex' >
        //         <div className='w-[430px] h-[24px] flex flex-row ml-[505px] '>
        //             <ul className='flex gap-[40px]  mt-[38px] font-poppins font-medium text-base leading-6'>
        //               <li><Link href="/">Home</Link></li>
        //               <li><Link href={"shop"}>Shop</Link></li>
        //               <li><Link href="/">About</Link></li>
        //               <li><Link href="contact">Contact</Link></li>
        //             </ul>
        //         </div>

        //         <div className='w-[247px] h-[28px] mt-[36px] flex gap-7'>
        //           <button onClick={() => route.push("/account")}>
        //             <Image src={"account.svg"} alt='' width={28} height={28}/>
        //             </button>
        //             <Image src={"search.svg"} alt='' width={28} height={28}/>
        //             <Image src={"heart.svg"} alt='' width={28} height={28}/>
        //             <button onClick={() => route.push("/cart")}>
        //             <Image src={"cart.svg"} alt='' width={28} height={28}/>
        //             </button>
        //         </div>
        //     </div>
        //  </div>

        //  <div className='w-[1488px] h-[900px] bg-[#FBEBB5] flex'>
        //   <div className='w-[500px] h-[276px] ml-[220px] mt-[270px]'>
        //     <p className='font-poppins font-medium text-7xl leading-[96px] '>Rocket single seater</p>
        //     <button  onClick={() => route.push("/shop")} className='underline w-[139px] h-[49px] mt-[20px] font-poppins font-medium text-2xl leading-9'>Shop Now</button>
        //   </div>
        //   <div >
        //     <Image src={"Rocket single seater 1.svg"} alt='' width={800} height={750}/>
        //   </div>
        //  </div>
        // </div> 
        // </>
        <>
  <div className="w-full h-auto">
    {/* Header Section */}
    <div className="h-[100px] bg-[#FBEBB5] w-full px-4 md:px-8 lg:px-16 flex items-center justify-between">
      {/* Navigation Links */}
      <div className="flex-1 flex justify-center md:justify-start">
        <ul className="flex gap-4 md:gap-8 lg:gap-10 font-poppins font-medium text-sm md:text-base leading-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
        <button onClick={() => route.push("/account")} className="p-2">
          <Image src="account.svg" alt="Account" width={28} height={28} />
        </button>
        <button className="p-2">
          <Image src="search.svg" alt="Search" width={28} height={28} />
        </button>
        <button className="p-2">
          <Image src="heart.svg" alt="Favorites" width={28} height={28} />
        </button>
        <button onClick={() => route.push("/cart")} className="p-2">
          <Image src="cart.svg" alt="Cart" width={28} height={28} />
        </button>
      </div>
    </div>

  
    <div className="w-full h-auto bg-[#FBEBB5] flex flex-col lg:flex-row items-center lg:justify-between px-4 md:px-8 lg:px-16 py-10">
      
      <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="font-poppins font-medium text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[96px]">
          Rocket single seater
        </h1>
        <button
          onClick={() => route.push("/shop")}
          className="underline font-poppins font-medium text-lg md:text-xl lg:text-2xl mt-5"
        >
          Shop Now
        </button>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src="Rocket single seater 1.svg" alt="Rocket single seater" width={800} height={750} />
      </div>
    </div>
  </div>
</>

    )
}
