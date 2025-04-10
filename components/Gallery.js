import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Photo Gallery
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl cursor-pointer shadow-md"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
