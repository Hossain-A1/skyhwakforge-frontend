'use client'

import About from "@/components/About";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    </main>
  );
};

export default HomePage;
