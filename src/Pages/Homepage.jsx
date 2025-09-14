import React from "react";
import { useProducts } from "../Contexts/ProductContext";
import Hero from "../Components/Hero";
import Cta from "../Components/Cta";
import ClassHero from "../Components/ClassHero";
import ProductsGrid from "../Components/ProductsGrid";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Hero />
      <Cta /> */}

      <ClassHero />
      <ProductsGrid />
      <Cta />
    </main>
  );
};

export default Homepage;
