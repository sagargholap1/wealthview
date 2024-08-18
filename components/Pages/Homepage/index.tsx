import React from "react";
import Hero from "./Hero/Hero";
import TaxLiability from "./TaxLiability/TaxLiability";
import Cards from "./Cards/Cards";
import Testimonials from "./Testimonials/Testimonials";
import Faqs from "./FAQs/Faqs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <TaxLiability/>
      <Cards/>
      <Testimonials/>
      <Faqs/>
    </>
  );
};

export default Homepage;
