import Image from "next/image";
//import { Inconsolata} from "next/font/google";
//import { Roboto } from 'next/font/google';
import Head from "next/head";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })

// const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Rental() {
  return (
   <div className="bg-white text-black">
    <Head>
<title>Nous louons-Montransfert</title>
</Head>
    
    
    
      
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/Car-Rental.webp"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
          <h1 className="text-5xl font-bold">Nous louons</h1>
          {/* <p className="mt-4 text-lg">
          Louez une voiture ou une camionnette pour un voyage pratique et fiable d&apos;une destination à une autre.
          </p> */}
        </div>
      </div>

      {/* Rental Transport Section */}
      <div className="mt-20 container mx-auto ">
        <h2 className="text-4xl text-center font-semibold text-black mb-2">
        Une grande variété d&apos;options
        </h2>
        <h2 className="text-lg text-center uppercase tracking-widest text-[#deba91] mb-6">
        Les meilleures possibilités
        </h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto w-[90%]">
          {/* Hybrid Toyota Auris Touring Hybrid */}
        <div className="flex flex-col w-full md:w-1/2">
        <div className="relative w-full h-[300px] ">
          <Image
            src="/images/car.jpg"
            alt="Hybrid Toyota Auris Touring Hybrid"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className=" mt-6">
          <h2 className="text-2xl text-center font-semibold text-black">
            Hybrid Toyota Auris Touring Hybrid
          </h2>
          <h2 className="text-[16px] text-center uppercase tracking-widest text-[#deba91] pb-10">
          Contactez nous pour un devis gratuit
          </h2>
        </div>
        </div>

        {/* Van Rental */}
        <div className="flex flex-col w-full md:w-1/2">
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/van.jpg"
            alt="Van Rental"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl text-center font-semibold text-black">Camionnette</h2>
          <h2 className="text-[16px] text-center uppercase tracking-widest text-[#deba91] pb-10">
          Contactez nous pour un devis gratuit
          </h2>
        </div>
        </div>
        </div>
      </div>
    </div>
    
   </div>
  );
}
