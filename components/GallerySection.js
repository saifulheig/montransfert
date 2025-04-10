import Image from "next/image";



const images = [
      { src: "/images/forList.jpg", col: "col-span-4", row: "row-span-4" },
      { src: "/images/gallery1.jpg", col: "col-span-4", row: "row-span-8" },
      { src: "/images/gallery2.jpg", col: "col-span-4", row: "row-span-8" },
      { src: "/images/Mercedes_ClassV22.jpg", col: "col-span-4", row: "row-span-4" },
      { src: "/images/teslaY1.jpg", col: "col-span-4", row: "row-span-4" },
      { src: "/images/gallery3.jpg", col: "col-span-4", row: "row-span-4" },
      { src: "/images/ToyotaTaxi.jpeg", col: "col-span-4", row: "row-span-4" },
    ];

const GallerySection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto w-[90%] py-16">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-semibold text-[#B59C78] mb-6">
      Galerie
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-12 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.col} ${image.row} relative overflow-hidden rounded-lg group`}
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GallerySection;
