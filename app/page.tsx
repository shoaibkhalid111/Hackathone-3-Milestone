'use client'
import Image from "next/image"
import { MainHeader } from "./(components)/header/header"
import { useRouter } from "next/navigation"


export default function Home ( ){
  const route = useRouter();
  return (
    <>
    <MainHeader/>
   
    <section className="Side-Table-Section">
  <div className="w-full h-auto bg-[#FAF4F4] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 md:px-8 lg:px-16 py-10 gap-10">
   
    <div className="w-full lg:w-[48%] h-auto flex flex-col items-center text-center lg:text-left">
      <Image
        src="Granite square side table 1.svg"
        alt="Granite square side table"
        width={500}
        height={300}
        className="w-full h-auto max-w-md"
      />
      <p className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mt-4">
        Side table
      </p>
      <button
        onClick={() => route.push("/shop")}
        className="underline font-poppins font-medium text-lg md:text-xl lg:text-2xl mt-2"
      >
        View More
      </button>
    </div>

    
    <div className="w-full lg:w-[48%] h-auto flex flex-col items-center text-center lg:text-left">
      <Image
        src="side sofa.svg"
        alt="Side sofa table"
        width={500}
        height={300}
        className="w-full h-auto max-w-md"
      />
      <p className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mt-4">
        Side table
      </p>
      <button
        onClick={() => route.push("/shop")}
        className="underline font-poppins font-medium text-lg md:text-xl lg:text-2xl mt-2"
      >
        View More
      </button>
    </div>
  </div>
</section>

 <section className="Top-Picks">
  <div className="w-full h-auto px-4 md:px-8 lg:px-16 py-10">
    
    <div className="text-center mb-6">
      <p className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl leading-tight">
        Top Picks For You
      </p>
    </div>

    
    <div className="text-center max-w-3xl mx-auto mb-8">
      <p className="font-poppins font-medium text-sm md:text-base leading-6">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
    </div>

    
    <div className="flex flex-wrap justify-center gap-4">
      <Image
        src={"Group 18.svg"}
        alt="Top Pick 1"
        width={287}
        height={397}
        className="w-40 md:w-60 lg:w-72 h-auto"
      />
      <Image
        src={"Group 15.svg"}
        alt="Top Pick 2"
        width={287}
        height={397}
        className="w-40 md:w-60 lg:w-72 h-auto"
      />
      <Image
        src={"Group 16.svg"}
        alt="Top Pick 3"
        width={287}
        height={397}
        className="w-40 md:w-60 lg:w-72 h-auto"
      />
      <Image
        src={"Group 17.svg"}
        alt="Top Pick 4"
        width={287}
        height={397}
        className="w-40 md:w-60 lg:w-72 h-auto"
      />
    </div>

    
    <div className="text-center mt-8">
      <button
        onClick={() => route.push("/shop")}
        className="underline font-poppins font-medium text-lg md:text-xl lg:text-2xl leading-9"
      >
        View More
      </button>
    </div>
  </div>
</section>

  <section className="Asgaard">
  <div className="w-full h-auto bg-[#FFF9E5] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 md:px-8 lg:px-16 py-10 gap-8">
   
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src={"Asgaard sofa 1.svg"}
        alt="Asgaard Sofa"
        width={900}
        height={780}
        className="w-full h-auto max-w-lg"
      />
    </div>

   
    <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left border border-black p-6">
      <p className="font-poppins font-medium text-xl md:text-2xl leading-9">
        New Arrivals
      </p>
      <p className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight my-4">
        Asgaard sofa
      </p>
      <div className="w-full border border-black mt-6">
        <button
          onClick={() => route.push("/sofaPage")}
          className="font-poppins font-normal text-lg md:text-xl leading-7 py-3 px-6 w-full"
        >
          Order Now
        </button>
      </div>
    </div>
  </div>
</section>

  <section className="Blog">
  <div className="w-full h-auto px-4 md:px-8 lg:px-16 py-10">
    
    <div className="text-center mb-6">
      <p className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl leading-tight">
        Our Blogs
      </p>
    </div>

    
    <div className="text-center max-w-3xl mx-auto mb-8">
      <p className="font-poppins font-medium text-sm md:text-base leading-6">
        Find a bright ideal to suit your taste with our great selection.
      </p>
    </div>

    
    <div className="flex flex-wrap justify-center gap-4">
      <Image
        src={"Group 50.svg"}
        alt="Blog 1"
        width={393}
        height={554}
        className="w-full max-w-xs md:max-w-sm h-auto"
      />
      <Image
        src={"Group 49.svg"}
        alt="Blog 2"
        width={393}
        height={554}
        className="w-full max-w-xs md:max-w-sm h-auto"
      />
      <Image
        src={"Group 48.svg"}
        alt="Blog 3"
        width={393}
        height={554}
        className="w-full max-w-xs md:max-w-sm h-auto"
      />
    </div>

    
    <div className="text-center mt-8">
      <button
        onClick={() => route.push("/blog")}
        className="underline font-poppins font-medium text-lg md:text-xl lg:text-2xl leading-9"
      >
        View All Posts
      </button>
    </div>
  </div>
</section>


<section className="insta">
  <div className="w-full h-auto">
    <Image
      src={"Group 47.svg"}
      alt="Instagram Banner"
      width={1488}
      height={450}
      className="w-full h-auto"
    />
  </div>
</section>

    </> 
  )
}
