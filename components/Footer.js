

//import { Mail, PhoneCall } from "lucide-react";
//import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
//import Image from "next/image";
import { useEffect, useState } from "react";
import {  FaArrowAltCircleUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
//import { MdAccessTime, MdLocationOn } from "react-icons/md";

//import {  MdLocationOn, MdAccessTime } from "react-icons/md";
//import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the scroll-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-white mt-16">
      {/* <hr className="border-[1px] border-[#deba91]"></hr> */}
      {/* Address Section */}
      
     <div className="max-w-7xl mx-auto w-[90%]">
     <div className="bg-white  py-6 flex flex-col items-center md:flex-row lg:justify-between mb-10 space-y-6 md:space-y-0 md:gap-10">
      {/* Location */}
      <div className="flex items-center gap-8 md:gap-5 text-gray-700">
          {/* <MdLocationOn className="text-5xl text-[#B59C78]" /> */}
          <Image src='/images/icon2.png' alt="Logo" width={35}
           height={35}  />
          <p className="text-xl font-medium">1066 Epalinges, Suisse</p>
        </div>

        {/* Phone & Email */}
        {/* <div className="mt-6 flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <PhoneCall className="text-[#deba91] text-4xl font-semibold" />
              <p className="text-gray-700 text-xl font-medium">Tel: +41 79 576 39 79</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#deba91] text-4xl" />
              <p className="text-gray-700 text-xl font-medium">Email: montransfert4@gmail.com</p>
            </div>
          </div> */}
          <div className=" flex items-center gap-5 md:gap-5">
            <div className="w-[40px] h-[40px] ">
             <Image src='/images/icon1.png' alt="Logo" width={45}
           height={45}  />
              
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 text-xl font-medium">Tel: +41 79 576 39 79</p>
              <p className="text-gray-700 text-xl font-medium">Email: montransfert4@gmail.com</p>
            </div>
          </div>
       

        {/* Open Hours */}
        <div className="flex items-center gap-8 md:gap-5 text-gray-700">
          {/* <MdAccessTime className="text-5xl text-[#B59C78]" /> */}
          <Image src='/images/icon3.png' alt="Logo" width={40}
           height={40}  />
          <p className="text-xl font-medium">Tous les jours, 7/7 - 24/24!</p>
        </div>

      
      </div>
     </div>
      {/* <footer className="bg-black py-6 px-6 text-white ">
<div className="max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">

  <p className="text-sm text-center">© 2025 Solar-ICT, All Rights Reserved</p>

</div>
</footer> */}
{/* <footer className="bg-black py-6 px-6 text-white">
  <div className="max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row justify-between ">
    
    <div className="text-center md:text-left mt-4 md:mt-0">
      <p className="text-sm w-full md:w-[50%]">Location de voiture simple, rapide et abordable. Contactez-nous !</p>
      <p className="text-sm">Tel: +41 79 576 39 79</p>
    </div>
    <p className="text-sm text-center mt-10">© 2025 Solar-ICT, All Rights Reserved</p>
  </div>
</footer> */}
<div className="bg-black mb-0">
<footer className="bg-black py-6 px-6 text-white mb-0">
  <div className="max-w-7xl w-[90%] mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
    
    <div className="text-center md:text-left mt-4 md:mt-0 ">
    <p className="text-[18px] lg:text-xl font-bold">Montransfert Sàrl</p>
      <p className="text-sm w-full ">Location de voiture simple, rapide et abordable.</p>
      
      
    </div>
    <div>
    <p className="text-sm lg:text-xl font-bold">Contactez-nous!</p>
    <p className="text-sm text-[#deba91]">Tel: +41 79 576 39 79</p>
    
    </div>
    <p className="text-sm text-center ">© 2025 Solar-ICT, All Rights Reserved</p>
  </div>
</footer>
</div>



<div className="fixed bottom-10 left-4 flex flex-col space-y-4">
<a
      href="https://wa.me/41795763979"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
    <a
      href="tel:+41795763979"
      className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-green-800 transition"
    >
      <FaPhoneAlt className="text-xl" />
    </a>

</div>
{isVisible && (

  
<button
onClick={scrollToTop}
className="fixed bottom-10 right-6 flex items-center gap-1 text-[#b59c78] text-[14px] font-medium 
          hover:scale-110 transition-transform duration-300"
>
<span className="tracking-widest">TOP</span>
<FaArrowAltCircleUp></FaArrowAltCircleUp>
</button>

)}

       
    
      
    
      
    </div>
    

      
    
  
  );
};

export default Footer;

