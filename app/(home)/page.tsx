import About from "@/components/About";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Offers/>
      <About />
      <CustomerReviews/>
    </main>
  );
};

export default HomePage;
