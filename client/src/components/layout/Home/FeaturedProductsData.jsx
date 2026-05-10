import api from '@/lib/api';
import React, { useEffect, useState } from 'react';

const FeaturedProductsData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['smartphones', 'laptops', 'fragrances', 'groceries'];

        const responses = await Promise.all(
          categories.map((category) => api.get(`/products/category/${category}`))
        );
        const allProducts = responses.flatMap((res) => res?.data?.products);
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return <div>FeaturedProductsData</div>;
};

export default FeaturedProductsData;
