import Image from "next/image";

//import { Inconsolata} from "next/font/google";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import Progressbar from "@/components/Progreebar";
import Link from "next/link";
//import { Roboto } from 'next/font/google';
import Head from "next/head";
//import ProductDetails from "@/components/productDetails";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })

// const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function services() {

  const faqs = [
    {
      name: "Toyota",
      question: "Toyota Auris Touring Hybrid",
      time:"sem",
      answer:
        "La Toyota Auris Touring Hybrid est un break hybride pratique, économique et spacieux. Elle combine moteur thermique et électrique pour une conduite fluide, silencieuse et éco-responsable. Avec un design élégant, un habitacle confortable et des technologies avancées, c’est un choix idéal pour ceux recherchant performance et faible consommation.",
      details: [
        "Système multimédia avec Apple CarPlay et Android Auto",
        "Sécurité Toyota Safety Sense (prévention de collision, régulateur de vitesse adaptatif, etc.)",
        "Climatisation automatique",
        "Caméra de recul et capteurs de stationnement",
        "Accès sans clé et démarrage à distance",
        "Sièges et volant chauffants",
        "Faible consommation de carburant grâce à son moteur hybride"
      ],
      title: 270,
      image: "/images/faq1.jpeg",
    },
    {
      name: "Mercedes",
      question: "Mercedes Classe V",
      time:"hours",
      answer:
        "La Mercedes Classe V est un monospace premium qui associe design sophistiqué, espace généreux et technologies avancées. Conçue pour les familles, les voyages d’affaires ou le transport VIP, elle offre un confort exceptionnel et une conduite agréable.",
      details: [
        "Design & Confort : Extérieur raffiné, intérieur modulable (jusqu’à 8 places), sièges en cuir, toit panoramique",
        "Performance : Motorisations diesel, boîte auto 9G-TRONIC, suspensions optimisées",
        "Technologie & Sécurité : MBUX, écran tactile, régulateur adaptatif, caméra 360°, freinage d’urgence"
      ],
      title: 90,
      image: "/images/faq2.jpg",
    },
    {
      name: "Tesla",
      question: "Tesla Model Y",
      time:"hours",
      answer:
        "La Tesla Model Y est un SUV électrique polyvalent qui allie performance, autonomie et technologie de pointe. Conçue sur la même plateforme que la Model 3, elle offre un espace intérieur spacieux, un grand coffre et une conduite fluide grâce à son système de transmission intégrale et son accélération instantanée.",
      details: [
        "Technologie & Confort : Écran 15″, toit panoramique, sièges chauffants, audio premium",
        "Performance : Transmission intégrale, Autopilot, 0-100 km/h en 3,7s (Performance)",
        "Autonomie & Recharge : Jusqu’à 533 km, Superchargeurs Tesla, recharge rapide",
        "Connectivité : Appli mobile, mises à jour OTA, navigation intelligente",
        "Sécurité : Caméras 360°, Mode Sentinelle, freinage d’urgence"
      ],
      title: 60,
      image: "/images/faq3.jpg",
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
   <div className="bg-white">
    <Head>
<title>Nos services-Montransfert</title>
</Head>
    <div className="bg-white text-black">
      
         
          
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/slide1.jpg"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">Nos services</h1>
          {/* <p className="mt-4 text-lg">
          Voyagez en toute confiance avec nos solutions de location de voitures et camionnettes, offrant praticité et fiabilité pour vos déplacements.
          </p> */}
        </div>
      </div>
      {/* about company */}
      <div className=" max-w-7xl mx-auto w-[90%] py-20">
      {/*<h1 className="text-5xl font-bold text-center mb-10">Nos services</h1>*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/teslaY1.jpg" 
            alt="About Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-wide">
          Meilleurs services de transport
        </h2>
        {/* Subheading */}
        <h3 className="text-lg text-[#deba91] tracking-widest mb-6">
          Véhicules superbes
        </h3>
        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          Nous offrons divers services dans le domaine des transports, comme indiqué ci-dessous.
        </p>
        {/* Services List */}
        <ul className="text-left text-lg text-black space-y-3">
          {[
            "Service de taxi",
            "Véhicule sur réservation",
            "Transport Maritime",
            "Aéroport transfert",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#deba91]" /> {item}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
        {/* Left Side - Text Content */}
        <div className="  rounded-lg">
        <h2 className="text-4xl font-bold text-black tracking-wide">
        
        Nous nous soucions de <br /> votre confort et de votre sécurité
      </h2>
      {/* Subtitle */}
      <h3 className="text-lg text-[#deba91] tracking-widest mt-4">
        Meilleurs conducteurs
      </h3>
      {/* Paragraph */}
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Le meilleur conducteur allie expertise, sécurité et professionnalisme
        pour offrir une expérience de voyage agréable et fiable.
      </p>

      <Link href={"/apropos"}>
      <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group ">
  {/* "+" transforms into a circle */}
  <span className="relative z-10 flex items-center gap-2">
    {/* "+" by default, transforms into a circle on hover */}
    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
    <span className="absolute  opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
    <span className="text-lg">VOIR PLUS</span>
  </span>
</button>
      </Link>
         
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/Mercedes_ClassV22.jpg" // Update with the correct image path
            alt="Luxury Car"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
     {/* Services à la Demande & Disponibilité */}
<div className="mt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side - Image */}
    <div className="relative w-full h-[400px]">
      <Image
        src="/images/service2.jpg" // Mettez à jour avec l'image correcte
        alt="Services de Transport"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Right Side - Contenu Texte en Deux Colonnes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      
      {/* Colonne 1 - À la Demande */}
      <div>
        <h2 className="text-3xl font-bold text-black mb-4 tracking-wide">
          🚗 Services à la Demande  
        </h2>
        <ul className="text-lg text-gray-600 space-y-2">
          {[
            "Toutes distances 24h/24 & 7j/7",
            "Aéroport (Genève & Zurich)",
            "Gare",
            "Stations de ski",
            "Ports / Plages",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#deba91]" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Colonne 2 - Mise à Disposition */}
      <div>
        <h2 className="text-3xl font-bold text-black mb-4 tracking-wide">
          📦 Mise à Disposition  
        </h2>
        <ul className="text-lg text-gray-600 space-y-2">
          {[
            "Business, Séminaires, Événements et Congrès",
            "Mariage",
            "Tourisme",
            "Transport maritime de conteneur",
            "Groupage de colis",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#deba91]" /> {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</div>

    </div>
    <div className="">
      <Progressbar></Progressbar>
    </div>

    <div className="relative max-w-7xl mx-auto w-[90%]  h-[500px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('/images/gallery3.jpg')" }} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center  ">
        <h2 className="text-3xl md:text-5xl font-bold">Obtenez votre meilleur trajet!</h2>
         <div className="flex items-center  gap-6 justify-center mt-4">
                      <Image src='/images/icon1.png' alt="Logo" width={30}
                   height={30}  />
                        <p className=" text-lg  ">
                        Appelez-nous : +41 79 576 39 79  </p>
                      </div>
        
       
      </div>
    </div>
    {/* FAQ Section */}
    <div className="bg-white py-16  max-w-7xl mx-auto w-[90%]">
    <h2 className="text-center  text-3xl font-semibold  mb-2">
    Large sélection de véhicules
            </h2>
            <p className="text-center text-xl uppercase tracking-widest font-medium text-[#deba91] mb-6">Profitez du trajet</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button className="w-full text-left text-lg font-semibold flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                  <Link href={`/services/${faq.name.toLowerCase()}`}>{faq.question}</Link>
                  <span className="text-[#deba91] text-xl">{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="">
                    <p className="mt-2 text-gray-600 mb-5">{faq.answer}</p>
                    <span className="text-lg font-semibold text-[#deba91] "><span className=" align-super text-2xl text-[#deba91]">CHF</span> <span className=" font-bold text-4xl">{faq.title}</span><span className=" align-sub text-2xl"> /per {faq.time}</span></span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative w-full h-80">
            {activeIndex !== null && <Image src={faqs[activeIndex].image} objectFit="cover" alt="FAQ Answer Image" fill className="rounded-lg shadow-lg" />}
          </div>
        </div>
     
    </div>
   
   </div>
   </div>
   </div>
  );
}
