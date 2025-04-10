import Image from "next/image";

//import { Inconsolata} from "next/font/google";
import { FaCheck } from "react-icons/fa";
//import { Roboto } from 'next/font/google';
import Head from "next/head";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })

// const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function About() {
  return (
   <div className="bg-white text-black">
    <Head>
<title>Nos Services-Montransfert</title>
</Head>
      
        
          
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/apropos.jpg"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">À propos de nous</h1>
          {/* <p className="mt-4 text-lg">
          Découvrez notre engagement à fournir des solutions de transport fiables et sans faille pour tous vos besoins de voyage.
          </p> */}
        </div>
      </div>
      <section className="py-12">
  <div className="max-w-7xl mx-auto w-[90%]">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-800">Nos Services</h2>
      <p className="mt-3 text-lg text-[#deba91] tracking-widest w-[40%] mx-auto">Découvrez pourquoi nos véhicules sont le choix idéal pour vos déplacements.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Clean and Comfortable */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">Propre et Confortable</h3>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Nos voitures sont soigneusement entretenues pour vous offrir un espace propre et confortable à chaque trajet.
          </li>
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Avec un intérieur impeccable et des sièges spacieux, elles garantissent une expérience de voyage agréable et relaxante.
          </li>
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Que ce soit pour un court déplacement ou un long voyage, chaque véhicule répond à vos attentes en matière de propreté et de confort.
          </li>
        </ul>
      </div>

      {/* Best Price Guaranteed */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">Le meilleur prix garanti</h3>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Nos voitures vous offrent le meilleur prix tout en garantissant confort et qualité.
          </li>
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Nous proposons des tarifs imbattables sans compromis sur l’entretien et la propreté de nos véhicules.
          </li>
          <li className="flex items-center">
            <FaCheck className="text-[#B59C78] mr-3" />
            Nous assurons des prix compétitifs pour répondre à vos attentes, que vous recherchiez une solution économique ou un voyage en toute sérénité.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* <div className=" py-12">
  <div className="max-w-7xl mx-auto w-[90%]">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-800">Nous apprécions nos clients</h2>
      <p className="mt-4 text-lg text-[#deba91] font-semibold">Nous souhaitons que vous viviez une expérience agréable avec nos services.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      Transport et Logistique
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">Transport et Logistique</h3>
        <p className="mt-4 text-gray-600">
          Nous offrons des véhicules propres et confortables pour vos déplacements. Nos voitures sont soigneusement entretenues pour vous offrir un espace propre et confortable à chaque trajet. Avec un intérieur impeccable et des sièges spacieux, elles garantissent une expérience de voyage agréable et relaxante. Que ce soit pour un court déplacement ou un long voyage, nous veillons à ce que chaque véhicule soit à la hauteur de vos attentes en matière de propreté et de confort.
        </p>
      </div>

       Propre et Confortable
      <div className="bg-white p-6 rounded-lg shadow-lg">
         <h3 className="text-2xl font-semibold text-gray-800 text-center">Propre et Confortable</h3>
         <p className="mt-4 text-gray-600">
           Nos voitures sont soigneusement entretenues pour vous offrir un espace propre et confortable à chaque trajet. Avec un intérieur impeccable et des sièges spacieux, elles garantissent une expérience de voyage agréable et relaxante. Que ce soit pour un court déplacement ou un long voyage, nous veillons à ce que chaque véhicule soit à la hauteur de vos attentes en matière de propreté et de confort.
        </p>
       </div>
     </div>

     Le meilleur prix garanti 
    <div className="mt-12 text-center bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800">Le meilleur prix garanti</h3>
      <p className="mt-4 text-lg text-gray-600">
        Nos voitures vous offrent le meilleur prix tout en garantissant confort et qualité. Nous nous engageons à proposer des tarifs imbattables sans compromis sur l’entretien et la propreté de nos véhicules. Que vous recherchiez une solution économique pour vos déplacements ou un voyage en toute sérénité, nous assurons des prix compétitifs pour répondre à vos attentes.
      </p>
    </div>
  </div>
</div> */}

      {/* about company */}
      <div className="max-w-7xl mx-auto w-[90%] py-16">
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
          <h1 className="lg:text-4xl text-2xl font-bold text-[#000029]">Nous nous soucions de
          votre confort et de votre sécurité</h1>
          <p className="mt-4 text-lg text-[#deba91]">
          Meilleurs conducteurs
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Nos meilleurs conducteurs vous assurent un trajet sécurisé, confortable et agréable. Professionnels et expérimentés, ils veillent à votre bien-être avec ponctualité et courtoisie. Voyagez en toute sérénité grâce à leur expertise et leur sens du service.
          </p>
        </div>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 gap-10 items-center mt-16">
        {/* Left Side - Text Content */}
        <div className="  rounded-lg">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black">
            Pour vos besoins quotidiens
          </h2>
          <p className="text-sm uppercase text-[#deba91] tracking-widest mt-2">
            Tout simplement le meilleur
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Passez un agréable voyage!
          </p>

          {/* Stats Section */}
          <div className="mt-6 flex space-x-10">
            <div>
              <h3 className="text-5xl font-bold text-[#deba91]">10<span className="text-3xl">+</span></h3>
              <p className="text-gray-600 text-lg">Années d&apos;expérience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#deba91]">15<span className="text-3xl">k</span></h3>
              <p className="text-gray-600 text-lg">Clients satisfaits</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[350px]">
          <Image
            src="/images/Mercedes_ClassV22.jpg" // Update with the correct image path
            alt="Luxury Car"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto w-[90%] h-[500px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('/images/gallery3.jpg')" }} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold">Services de transport fiables</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
        Nous offrons les meilleures et les plus efficaces solutions de transport, garantissant confort, sécurité et ponctualité.
        </p>
      </div>
    </div>
     
    </div>
 
   </div>
  );
}
