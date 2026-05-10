import CategoriesSection from '@/components/layout/Home/CategoriesSection';
import FeaturedProduct from '@/components/layout/Home/FeaturedProduct';
import FlashDeal from '@/components/layout/Home/FlashDeal';
import Hero from '@/components/layout/Home/Hero';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <FlashDeal />
      <FeaturedProduct />
    </div>
  );
};

export default page;
