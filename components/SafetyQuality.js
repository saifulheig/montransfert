"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";

const SafetyQuality = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-16 max-w-7xl mx-auto w-[90%] bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-semibold text-black">Sécurité & Qualité</h2>
          <p className="text-sm tracking-widest text-[#deba91] mt-1">QUE LE MEILLEUR <span role="img" aria-label="emoji">😊</span></p>
          <p className="text-lg text-gray-700 mt-4">
            At Monttransfert Sàrl, Nous offrons des services fiables avec un haut niveau de sécurité et de qualité. Nous garantissons:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Excellence & Fiabilité</li>
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Conformité aux normes de sécurité</li>
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Satisfaction client garantie</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">Faites-nous confiance pour des services sûrs et efficaces ! 🚀</p>

          {/* See More Button */}
          <Link href={'/apropos'}>
            <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
                <span className="absolute opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
                <span className="text-lg">VOIR PLUS</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Right Content - Animated Progress Bars */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end mt-10 md:mt-0 space-y-8 md:space-y-0 md:space-x-20">
          
          <div className="flex flex-col items-center">
            <motion.div
              className="radial-progress text-[#deba91]"
              style={{
                "--value": startAnimation ? 90 : 0,
                "--size": "12rem",
                "--thickness": "6px",
              }}
              aria-valuenow={startAnimation ? 90 : 0}
              role="progressbar"
              initial={{ "--value": 0 }}
              animate={{ "--value": startAnimation ? 90 : 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {startAnimation ? "90%" : "0%"}
            </motion.div>
            <p className="mt-2 text-gray-700 text-lg">Écologique</p>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="radial-progress text-[#deba91]"
              style={{
                "--value": startAnimation ? 99 : 0,
                "--size": "12rem",
                "--thickness": "6px",
              }}
              aria-valuenow={startAnimation ? 99 : 0}
              role="progressbar"
              initial={{ "--value": 0 }}
              animate={{ "--value": startAnimation ? 99 : 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            >
              {startAnimation ? "99%" : "0%"}
            </motion.div>
            <p className="mt-2 text-gray-700 text-lg">Satisfaction client</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyQuality;
