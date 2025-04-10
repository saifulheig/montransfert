import Image from "next/image";

//import { Inconsolata} from "next/font/google";
import Link from "next/link";
//import { Roboto } from 'next/font/google';
import Head from "next/head";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })


// const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Reservation() {
      const faqs = [
            {
              name: "Toyota",
              question: "Toyota Auris Touring Hybrid",
              type:"Hybride",
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
              type:"4x4",
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
              type:"Électrique",
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
  return (
   <div className="bg-white text-black">
       <Head>
<title>Nos tarifs-Montransfert</title>
</Head>
      
  
          
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/price.jpg"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">Nos tarifs</h1>
          {/* <p className="mt-4 text-lg">
            Navigating the future of ocean transport with precision and reliability.
          </p> */}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-[90%] py-16  bg-white">
            {/* Section Title */}
            <h2 className="text-center w-[90%] mx-auto text-3xl font-semibold  mb-2">
            Limousine de luxe pour
            une satisfaction maximale. Profitez-en.
            </h2>
            <p className="text-center text-xl tracking-widest text-[#B59C78] mb-6">voitures exclusives</p>
      
            {/* Grid Layout */}
            
             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                  <Link key={index} href={`/tarif-reservation/${faq.name.toLowerCase()}`}>
                        <div  className="relative group overflow-hidden rounded-lg h-[400px]">
                  {/* Background Image */}
                  <Image
                    src={faq.image}
                    alt={faq.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
      
                  {/* Hover Overlay */}
                  {faq.title && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 text-white flex flex-col justify-center p-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
        <div className="transition-all duration-700 delay-200">
            <h1 className="text-white text-3xl font-bold mb-2">{faq.type}</h1>
        <span className="text-lg font-semibold text-[#deba91]"><span className=" align-super text-2xl text-[#deba91]">CHF</span> <span className=" font-bold text-4xl">{faq.title}</span><span className=" align-sub text-2xl"> /per {faq.time}</span></span>
        </div>
      </div>
      )}
                </div>

                  </Link>
                
              ))}
            </div>
      
            
          </div>
      
      

    <div className="relative max-w-7xl mx-auto w-[90%]  h-[500px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed rounded-lg" 
        style={{ backgroundImage: "url('/images/gallery3.jpg')" }} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold w-[70%] mx-auto">Économisez de l&apos;argent
        avec notre location</h2>
        <p className="mt-4 text-xl max-w-2xl font-semibold mx-auto text-[#deba91]">
        Tél: +41 79 576 39 79
        </p>
      </div>
    </div>
     
    </div>
   
   </div>
  );
}
