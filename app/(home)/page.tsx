'use client'
import { useEffect } from "react";

import About from "@/components/About";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Support from "@/components/Support";
import AOS from "aos";
import "aos/dist/aos.css";
import Access from "@/components/Access";


const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Hero />
      <Offers />
      <About />
      <CustomerReviews />
      <Support/>
      <Access/>
    </main>
  );
};

export default HomePage;
