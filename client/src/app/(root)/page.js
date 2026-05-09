import CategoriesSection from "@/components/layout/Home/CategoriesSection";
import FlashDeal from "@/components/layout/Home/FlashDeal";
import Hero from "@/components/layout/Home/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <FlashDeal />
    </div>
  );
};

export default page;
