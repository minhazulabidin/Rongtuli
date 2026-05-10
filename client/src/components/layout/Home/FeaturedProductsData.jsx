'use client';
import Product from '@/components/commonCompo/Product';
import api from '@/lib/api';
import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FeaturedProductsData = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = [
          'mens-shirts',
          'mens-shoes',
          'womens-dresses',
          'womens-jewellery',
          'womens-shoes',
          'tops',
          'skin-care',
        ];

        const responses = await Promise.all(
          categories.map((category) =>
            api.get(`/products/category/${category}`)
          )
        );

        const allProducts = responses.flatMap(
          (res) => res?.data?.products
        );

        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6.25 md:grid-cols-4">
        {(showAll ? products : products.slice(0, 16)).map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>

      {products.length > 16 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orangec text-white md:px-6.5 px-4.75 py-2.5 rounded-[81px] font-poppins font-semibold md:text-base text-sm flex justify-center items-center cursor-pointer hover:bg-orangec/90 duration-300 hover:shadow-xl uppercase gap-1"
          >
            {showAll ? 'Show Less' : 'Show More'}

            {showAll ? (
              <FaAngleUp size={20} />
            ) : (
              <FaAngleDown size={20} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProductsData;