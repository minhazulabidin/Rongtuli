import Container from '@/components/commonCompo/Container';
import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import FeaturedProductsData from './FeaturedProductsData';

const FeaturedProduct = () => {
  return (
    <section className="mt-11.25">
      <Container>
        <div className="flex items-center justify-between md:mb-5 mb-4">
          <h2 className="text-6.5 font-poppins font-medium text-[#2E2E2E]">Featured Product</h2>
          <button className="font-poppins flex cursor-pointer items-center justify-between gap-4.5 px-3 py-2 text-base font-medium text-[#757575]">
            View more <HiArrowSmRight size={24} />
          </button>
        </div>
        <div>
          <FeaturedProductsData />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
