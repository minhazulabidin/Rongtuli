"use client";
import Container from "@/components/commonCompo/Container";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import productsData from "../../../../data/productsData";
import Image from "next/image";
import groceryImg from "@/assate/image/grocery.png";
import beautyImg from "@/assate/image/beauty.png";

const Hero = () => {

  return (
    <section className="mt-3.25">
      <Container>
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-7.5 md:h-140 grid-cols-1">
          <div className=" col-span-2 row-span-2 rounded-[10px]">
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              loop={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="h-full"
            >
              {productsData.map((product) => (
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
                        alt={product.productName}
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
          <div className="col-span-1 row-span-1 md:block hidden rounded-[10px] relative">
            <Image alt="" src={groceryImg} className="rounded-[10px] w-full h-full" />
            <button className="whitespace-nowrap font-montserrat text-[#0198E9] text-xl font-semibold px-8 py-4 bg-[#FAFAFACC]/80 rounded-[5px] absolute bottom-[18.38px] left-1/2 -translate-x-1/2">Groceries collection</button>
          </div>
          <div className="col-span-1 row-span-1 md:block hidden  rounded-[10px] w-full h-full relative">
            <Image alt="" src={beautyImg} className="rounded-[10px]" />
            <button className="font-montserrat text-[#0198E9] text-xl font-semibold px-8 py-4 bg-[#FAFAFACC]/80 rounded-[5px] absolute bottom-[18.38px] left-1/2 -translate-x-1/2 whitespace-nowrap">Health & Beauty collection</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
