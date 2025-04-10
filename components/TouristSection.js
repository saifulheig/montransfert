

import Image from "next/image";
//import { useState } from "react";


const touristPlaces = [
  {
    title: "Lausanne",
    img: '/images/tourist1.jpg', // Replace with actual image path
    description: "Capitale olympique, elle abrite le siège du Comité International Olympique et offre une qualité de vie exceptionnelle entre nature et innovation.",
  },
  {
    title: "Genève",
    img: '/images/tourist2.jpg', // Replace with actual image path
    description: "Genève, ville cosmopolite au bord du lac Léman, est connue pour son rôle diplomatique et humanitaire. Siège des Nations Unies et de nombreuses organisations internationales, elle allie élégance, histoire et modernité.",
  },
  {
    title: "Vevey",
    img: '/images/tourist3.jpg', // Replace with actual image path
    description:
      "Vevey, charmante ville sur les rives du lac Léman, est réputée pour son atmosphère paisible et son riche patrimoine culturel. Abritant Nestlé et la maison adoptive de Charlie Chaplin, elle offre un cadre idyllique niché entre vignobles et montagnes.",
  },
  {
    title: "Montreux",
    img: '/images/tourist4.jpg', // Replace with actual image path
    description: "Montreux, perle de la Riviera suisse, est célébrée pour son festival de jazz et son cadre enchanteur au bord du lac Léman. Entourée de montagnes et de vignobles, elle offre une atmosphère paisible et élégante.",
  },
];

const TouristSection = () => {
  return (
   <div className="bg-white"> 
       <div className="max-w-7xl mx-auto w-[90%] py-16  ">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-semibold text-[#B59C78] mb-6">
      Lieux touristiques
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {touristPlaces.map((place, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Background Image */}
            <Image
              src={place.img}
              alt={place.title}
              width={400}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            {place.description && (
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60  flex flex-col justify-center p-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
  <div className="transition-all duration-700 delay-200">
    <h3 className="text-xl font-bold drop-shadow-lg text-white">{place.title}</h3>
    <p className="text-sm mt-2 drop-shadow-md text-[#deba91]">{place.description}</p>
  </div>
</div>
)}
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="text-center mt-6 text-[#deba91] font-medium text-sm">
        LAUSANNE | GENEVA | VEVEY | MONTREUX
      </div>
    </div>
   </div>
  );
};

export default TouristSection;
