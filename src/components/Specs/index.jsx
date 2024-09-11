import React, { useState } from "react";
import {
  FaMemory,
  FaCamera,
  FaBatteryFull,
  FaMobileAlt,
  FaWeightHanging,
} from "react-icons/fa";
import { MdOutlineScreenRotation } from "react-icons/md";
import { motion } from "framer-motion";

const IPhone16Specs = () => {
  const specs = [
    {
      icon: <FaMemory />,
      title: "Storage",
      detail: "128GB, 256GB, 512GB, 1TB",
    },
    {
      icon: <FaCamera />,
      title: "Camera",
      detail: "48MP Main, 12MP Ultra-Wide, 12MP Telephoto",
    },
    {
      icon: <FaBatteryFull />,
      title: "Battery Life",
      detail: "Up to 30 hours video playback",
    },
    {
      icon: <MdOutlineScreenRotation />,
      title: "Display",
      detail: "6.7‑inch OLED Super Retina XDR",
    },
    {
      icon: <FaMobileAlt />,
      title: "Connectivity",
      detail: "5G, Wi-Fi 6, Bluetooth 5.3",
    },
    {
      icon: <FaWeightHanging />,
      title: "Weight",
      detail: "240 grams",
    },
  ];

  // State to handle tooltip display
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-16 px-6 md:px-24 lg:px-32 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl text-black font-extrabold leading-tight">
          iPhone 16
        </h1>
        <p className="text-xl mt-4 text-black">
          The future of smartphones, meticulously designed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }} // Zoom on hover
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-2xl shadow-xl 
                       transform transition-transform duration-300 relative"
          >
            {/* Tooltip */}
            {hoveredIndex === index && (
              <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded">
                {spec.detail}
              </div>
            )}

            <div className="text-6xl text-blue-400 mb-6">{spec.icon}</div>
            <h2 className="text-2xl font-bold mb-3">{spec.title}</h2>
            <p className="text-lg">{spec.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-20 text-black text-center"
      >
        <h2 className="text-4xl font-semibold">
          Designed for elegance. Built for performance.
        </h2>
        <svg
          className="w-20 mx-auto mt-8 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l9-7-9-7-9 7 9 7z" />
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default IPhone16Specs;
