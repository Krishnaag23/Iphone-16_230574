import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Testimonial from './components/Testimonial/Testimonial';
import FeaturesTab from './components/FeaturesTab';
import IphoneGallery from './components/ImageGallery';
import IPhone16Specs from './components/Specs';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';


function App() {
  return (
    
    <div>
      <Header/>
      <div id="hero">
  <Hero />
</div>
<div id="image-gallery" className="container mx-auto py-10">
  <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
  <IphoneGallery />
</div>
<div id="iphone-specs">
  <IPhone16Specs />
</div>
<div id="testimonials">
  <Testimonial />
</div>
<div id="features">
  <FeaturesTab />
</div>
<div id="contact-us">
  <ContactUs />
</div>
<Footer />
    </div>
  );
}

export default App;





    
 


