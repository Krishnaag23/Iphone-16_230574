import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* Section Title Start */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Testimonials
                    </h2>
                    <p className="text-lg font-medium text-indigo-600 mb-2">
                        What Our Clients Say
                    </p>
                    <p className="text-base text-gray-700 max-w-3xl mx-auto">
                        Discover what our clients have to say about their experiences with us. Their feedback and testimonials are a testament to the quality and impact of our work.
                    </p>
                </div>
                {/* Section Title End */}
            </div>

            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -20,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="mx-auto mt-12 max-w-screen-xl px-4 md:px-8"
            >
                {/* Slider main container */}
                <div className="swiper testimonial-01 mb-20 pb-8">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonialData.map((review) => (
                            <SwiperSlide key={review.id}>
                                <SingleTestimonial review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonial;
