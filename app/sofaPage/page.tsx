'use client';

import React, { useState } from 'react';
import Header from '../(components)/header/header';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SofaPage() {
  const route = useRouter();
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="w-full h-[100px] mt-[50px] flex justify-start items-center px-4 sm:px-8 lg:px-16">
        <div className="flex gap-3 ml-4 sm:ml-8 lg:ml-[100px]">
          <button onClick={() => route.push("/")} className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">Home</button>
          <Image src={"arrow 1.svg"} alt="arrow" width={20} height={20} />
        </div>
        <div className="flex gap-3 ml-4 sm:ml-8 lg:ml-[50px]">
          <button onClick={() => route.push("/shop")} className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">Shop</button>
          <Image src={"arrow 1.svg"} alt="arrow" width={20} height={20} />
        </div>
        <div className="border-r-[1px] bg-black h-[24px] ml-[10px]" />
        <div className="ml-[30px]">
          <p>Asgaard sofa</p>
        </div>
      </div>

  {/* Product Details Section */}
  <div className="w-full h-auto flex flex-col lg:flex-row mt-[50px] px-4 sm:px-8 lg:px-16">
    <div className="w-full max-w-[553px] mx-auto lg:ml-[100px]">
      <Image src={"Group 102.svg"} alt="" width={553} height={500} />
    </div>

    <div className="w-full max-w-[606px] mx-auto lg:ml-[100px] mt-[50px]">
      <p className="font-poppins font-normal text-[42px] leading-[63px]">Asgaard sofa</p>
      <p className="text-[#9F9F9F] mt-[20px]">Rs. 250,000.00</p>
      <div className="h-[20px] flex items-center mt-[20px]">
        <Image src={"Group 88.svg"} alt="" width={124} height={20} />
        <div className="border-r-[1px] bg-black ml-[10px]" />
        <p className="text-[#9F9F9F] font-poppins font-normal text-xs leading-5 ml-[20px]">5 Customer Reviews</p>
      </div>
      <p className="w-full sm:w-[424px] font-poppins font-normal text-xs leading-5 mt-[20px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
      </p>

      <div className="mt-[30px]">
        <p className="text-[#9F9F9F] font-poppins font-normal text-xs leading-5 ml-[20px]">Size</p>
        <div className="w-full sm:w-[123px] flex mt-[10px] gap-2 justify-start">
          <button className="w-[30px] h-[30px] hover:bg-[#FBEBB5] bg-[#dad6d6]">L</button>
          <button className="w-[30px] h-[30px] hover:bg-[#FBEBB5] bg-[#dad6d6]">XL</button>
          <button className="w-[30px] h-[30px] hover:bg-[#FBEBB5] bg-[#dad6d6]">XS</button>
        </div>
        
        <p className="text-[#9F9F9F] font-poppins font-normal text-xs leading-5 ml-[20px] mt-[30px]">Color</p>
        <div className="w-full sm:w-[123px] flex mt-[10px] gap-2 justify-start">
          <button className="w-[30px] h-[30px] bg-[#816DFA] rounded-full"></button>
          <button className="w-[30px] h-[30px] bg-[#000000] rounded-full"></button>
          <button className="w-[30px] h-[30px] bg-[#CDBA7B] rounded-full"></button>
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex gap-[20px] mt-[30px] justify-start">
        <div className="flex flex-row border-2 w-[100px] h-[50px] gap-2">
          <button className="ml-[15px]" onClick={() => setCount(count + 1)}>+</button>
          <h1 className="mt-[12px]">{count}</h1>
          <button className="mr-1" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        </div>

        <div className="w-full sm:w-[215px] border border-black rounded-md">
          <button className="w-full h-[50px]">Add To Cart</button>
        </div>
      </div>

      <hr className="w-full mt-[30px]" />

      {/* SKU, Category, Tags, Share */}
      <div className="w-full sm:w-[300px] h-[120px] mt-[30px]">
        {[
          ["SKU", "SS001"],
          ["Category", "Sofas"],
          ["Tags", "Sofa, Chair, Home, Shop"],
        ].map(([label, value], index) => (
          <div className="flex gap-5 mt-[10px]" key={index}>
            <p className="text-[#9F9F9F] font-poppins font-normal text-base leading-6 w-[75px]">{label}</p>
            <p className="text-[#9F9F9F] font-poppins font-normal text-base leading-6">:</p>
            <p className="text-[#9F9F9F] font-poppins font-normal text-base leading-6">{value}</p>
          </div>
        ))}

        <div className="flex gap-5 mt-[10px]">
          <p className="text-[#9F9F9F] font-poppins font-normal text-base leading-6 w-[75px]">Share</p>
          <p className="text-[#9F9F9F] font-poppins font-normal text-base leading-6">:</p>
          {["facebook", "linkedin", "twitter"].map((platform) => (
            <Image key={platform} src={`${platform}.svg`} alt={platform} width={25} height={25} />
          ))}
        </div>
      </div>
    </div>
  </div>

  <hr className="w-full mt-[50px]" />

  {/* Product Description and Additional Information */}
  <div className="w-full h-auto">
    <div className="w-[650px] h-[36px] flex gap-10 mt-[50px] ml-[460px]">
      <p className="font-poppins font-normal text-2xl leading-9">Description</p>
      <p className="font-poppins font-normal text-2xl leading-9 text-[#9F9F9F]">Additional Information</p>
      <p className="font-poppins font-normal text-2xl leading-9 text-[#9F9F9F]">Reviews-5</p>
    </div>

    <div className="w-full sm:w-[1026px] ml-[320px] mt-[50px]">
      <p className="font-poppins font-normal text-base leading-6 text-[#9F9F9F]">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
      <p className="font-poppins font-normal text-base leading-6 text-[#9F9F9F] mt-[20px]">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
      </p>
    </div>

    <div className="mt-[50px] mx-auto sm:ml-[100px]">
      <Image src={"Group 109.svg"} alt="" width={1249} height={348} />
    </div>
  </div>

  <hr className="w-full mt-[50px]" />

  {/* Related Products */}
  <section className="Top-Picks">
    <div className="w-full h-[700px]">
      <div className="w-[311px] h-[54px] mx-auto sm:ml-[600px] mt-[50px]">
        <p className="font-poppins font-medium text-4xl leading-[54px]">Related Products</p>
      </div>
      
      <div className="flex justify-center mt-[20px] gap-3">
        <Image src={"Group 18.svg"} alt="" width={287} height={397} />
        <Image src={"Group 15.svg"} alt="" width={287} height={397} />
        <Image src={"Group 16.svg"} alt="" width={287} height={397} />
        <Image src={"Group 17.svg"} alt="" width={287} height={397} />
      </div>

      <button onClick={() => route.push("/shop")} className="underline font-poppins font-medium text-2xl leading-9 mx-auto mt-[70px] ml-[500px]">View More</button>
    </div>
  </section>
</>


  )
}
