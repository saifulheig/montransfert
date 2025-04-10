import Image from "next/image";

//import { Inconsolata} from "next/font/google";
//import { Roboto } from 'next/font/google';
import Head from "next/head";
import {  FaFacebookSquare } from "react-icons/fa";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })


// const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Maritime() {
  
  return (

   <div className="bg-white text-black">
    <Head>
<title>Maritime-Montransfert</title>
</Head>
     
        
         
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/cargo1.jpg" // Ensure the image is inside the 'public/images/' folder
          alt="Maritime Banner"
          fill
          className="object-cover"
          quality={90}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">Maritime</h1>
          {/* <p className="mt-4 text-lg">
          Naviguer vers l&apos;avenir du transport maritime avec précision et fiabilité.
          </p> */}
        </div>
      </div>

      {/* Transport Group */}
      <div className="mt-20 max-w-7xl mx-auto w-[90%]">
        <h2 className="text-4xl text-center font-semibold text-black mb-10">
          Transport Maritime et Groupage
        </h2>

        <div className="relative w-full h-[600px]">
          <Image
            src="/images/Transport-Maritime-1.png"
            alt="Transport 1"
            fill
            quality={100}
            className="object-cover rounded-lg"
          />
        {/*  <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-bold text-center">Transport Maritime et Groupage</h2>
            <p className="text-lg text-center">Lausanne-Dakar</p>
   
          </div>*/}
        </div>
      </div>

      {/* Contact Section */}
      <div className=" mt-6 text-center">
        <h2 className="text-4xl  font-semibold text-black mb-3">
          Montransfert Sàrl, 1066 Épalinges, Suisse
        </h2>
        <h2 className="text-lg  uppercase tracking-widest text-[#deba91] pb-2">
          Contactez-nous pour avoir plus de renseignements
        </h2>
        <a href="https://www.facebook.com/people/Transport-Maritime-et-Groupage-pour-le-S%C3%A9n%C3%A9gal-depuis-la-Suisse/61560718967371/" target="blank"><FaFacebookSquare className=" max-w-7xl mx-auto w-[90%] text-blue-900 text-4xl "></FaFacebookSquare></a>
      </div>

      {/* <hr className="border border-[#deba91]" /> */}
    </div>
    
   </div>
  );
}
