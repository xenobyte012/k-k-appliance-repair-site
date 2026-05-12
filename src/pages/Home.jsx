import React from 'react'
import HeroSection from '../sections/HeroSection';
import Navbar from '../components/Navbar';
// import Testimonials from "../sections/Testimonials";

import Footer from '../components/Footer'
import ServiceSection from '../sections/ServiceSection';
import ContactUs from '../sections/ContactUs';
import WhyChooseUs from '../sections/WhyChooseUs';
import WhatWeFix from '../sections/WhatWeFix';
import Gallary from '../sections/Gallary.jsx'
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <WhatWeFix />
      
      <ContactUs />
      <Gallary />
      <Footer />
    </div>
  );
}

