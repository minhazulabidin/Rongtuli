"use client";
import Container from "@/components/commonCompo/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import productsData from "../../../../data/productsData";
import Image from "next/image";

const Hero = () => {
  const [products, setProducts] = useState([]);

  return (
    <section className="mt-3.25">
      <Container>
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-7.5 md:h-140 grid-cols-1">
          <div className=" col-span-2 row-span-2 rounded-[10px]">
            <Swiper
              slidesPerView={1}
              modules={[Pagination]}
              loop={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              className="h-full"
            >
              {productsData.slice(0, 5).map((product) => (
                <SwiperSlide key={product.id} className="w-full">
                  <div className="flex h-full justify-between items-center md:pl-15 pl-5.25 bg-gray-200/20 rounded-[10px]">
                    <div className="md:space-y-6.75 space-y-3">
                      <h2 className="font-montserrat font-bold md:text-[45px] text-xl text-orangec">
                        {product.productName}
                      </h2>
                      <p className="md:w-104.5 w-full md:text-xl text-xs  font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{" "}
                      </p>
                      <button className="md:px-6.25 px-4 md:py-2.25 py-1.75 rounded md:text-base text-xs text-white cursor-pointer font-poppins bg-orangec/90 transform duration-300 hover:bg-orangec  ">
                        SHOP NOW
                      </button>
                    </div>
                    <div className="h-full w-full">
                      <Image
                        src={product.productImage}
                        width={10000}
                        height={10000}
                        className="w-full h-full rounded-r-[10px]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="border border-red-200 col-span-1 row-span-1 md:block hidden">
            Groceries collection
          </div>
          <div className="border border-red-200 col-span-1 row-span-1 md:block hidden">
            Health & Beauty collection
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
