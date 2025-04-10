

import Image from "next/image";


const TransportSection = () => {
  return (
    <section className="py-16  bg-white max-w-7xl mx-auto w-[90%]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 1 */}
        <div className="relative w-full h-90">
          <Image 
          src="/images/port1.png"
            fill
            style={{ objectFit: 'cover' }}
            alt="Transport 1"
          />
           {/*<div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center text-white">
            <h2 className="text-3xl font-bold text-red-700">Aéroport transfert</h2>
           <p className="text-lg">Lausanne-Genève Aéroport</p>
            <p className="text-lg">Lausanne-Zurich Aéroport</p>
          </div>*/}
       
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-90">
          <Image 
           src="/images/port2.png"
            fill
            style={{ objectFit: 'cover' }}
            alt="Transport 2"

          />
           {/*<div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center text-white">
            <h2 className="text-2xl font-bold">Transport Maritime et Groupage</h2>
            <p className="text-lg">Lausanne-Dakar</p>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
