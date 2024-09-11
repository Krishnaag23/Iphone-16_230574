import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useState } from "react";

import image1 from "../../assets/Image_Editor(1).png";
import image2 from "../../assets/Image_Editor.png";
import image3 from "../../assets/Image_Editor(2).png";

// Sample data for iPhones
const iphoneGalleryData = [
  {
    id: 1,
    image: image1,
    title: "iPhone 16 Pro Max",
    specs: "6.7-inch display, A17 Bionic chip, 512GB storage",
  },
  {
    id: 2,
    image: image2,
    title: "iPhone 16 Pro",
    specs: "6.1-inch display, A17 Bionic chip, 256GB storage",
  },
  {
    id: 3,
    image: image3,
    title: "iPhone 16",
    specs: "6.1-inch display, A16 Bionic chip, 128GB storage",
  },
  {
    id: 4,
    image: image1,
    title: "iPhone 16 Pro",
    specs: "6.1-inch display, A17 Bionic chip, 256GB storage",
  },
  {
    id: 5,
    image: image2,
    title: "iPhone 16 Pro",
    specs: "6.1-inch display, A17 Bionic chip, 256GB storage",
  },
  {
    id: 6,
    image: image3,
    title: "iPhone 16 Pro",
    specs: "6.1-inch display, A17 Bionic chip, 256GB storage",
  },
  
];

const IphoneGallery = () => {
  const [isZoomed, setIsZoomed] = useState(null);

  const handleMouseEnter = (index) => {
    setIsZoomed(index);
  };

  const handleMouseLeave = () => {
    setIsZoomed(null);
  };

  return (
    <section className="iphone-gallery-section bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8 xl:px-0">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">iPhone Gallery</h2>
          <p className="text-lg text-gray-600">
            Discover the latest iPhones with cutting-edge technology and sleek
            design.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 mb-10"
        >
          {/* Swiper Container */}
          <div className="swiper iphone-gallery mb-10 pb-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="relative"
            >
              {iphoneGalleryData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="iphone-card text-center relative overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-auto object-cover transition-transform duration-300 ${
                        isZoomed === index ? "scale-110" : ""
                      }`}
                    />
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                      {item.title}
                    </h3>
                    {item.specs && (
                      <p className="text-gray-600 text-sm mt-2">{item.specs}</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IphoneGallery;
