import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import hmv from "../../assets/Video/iphone (online-video-cutter.com).mp4";
import smv from "../../assets/Video/mob.mp4";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smv : hmv);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  const handleVideoSrcSet = () => {
    const isMobileView = window.innerWidth < 760;
    setVideoSrc(isMobileView ? smv : hmv);
    setIsMobile(isMobileView);
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    const textDelay = isMobile ? 4 : 12;
    const descriptionDelay = isMobile ? 8 : 6;

    gsap.to('#cta', { opacity: 1, y: -50, delay: isMobile ? 4 : 6 });
    gsap.to('#video-container', { x: 0, delay: isMobile ? 5 : 10 });
    gsap.to('#cta-text', { opacity: 1, y: -50, delay: textDelay });
    gsap.to('#cta-description', { opacity: 1, x: 0, y: -50, delay: descriptionDelay });
  }, [isMobile]);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-full w-full bg-black flex flex-col items-center justify-center">

        <div id="video-container" className="relative w-full h-auto">
          <video className="w-full h-auto" autoPlay muted playsInline {...(isMobile ? {} : { loop: false })}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div id="cta" className="flex flex-col rounded-lg bg-black items-center opacity-0 transition-opacity duration-700">
          <a href="#highlights" className="btn text-white font-bold">Get Your iPhone 16 Today!</a>
          <p className="font-normal text-xl text-white">Starting at just ₹3329/month or a one-time payment of ₹79,900.</p>
          <a href="#learn-more" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors mt-4">
            Discover More
          </a>
        </div>

        <div id="cta-text" className="flex flex-col items-center text-white opacity-0 translate-y-20 mt-8 md:mt-16">
          <div className="text-center px-4 md:px-10 md:w-3/5 w-full">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Introducing the iPhone 16</h1>
            <p className="text-lg mb-8">Unleash the power of advanced technology with the iPhone 16, designed to elevate your mobile experience.</p>
            <h2 className="text-xl md:text-3xl font-bold mb-4">Revolutionize Your Experience</h2>
            <p className="text-lg mb-6">Join the future of mobile innovation today!</p>
            <a href="#pricing" className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
              View Pricing Options
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
