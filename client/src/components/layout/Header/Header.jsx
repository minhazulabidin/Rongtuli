import Container from "@/components/commonCompo/Container";
import React from "react";
import logo from "@/assate/image/logo.png";
import Image from "next/image";
import { Heart, Search, ShoppingBasket, User } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Container>
      <header className="flex flex-wrap items-center justify-between py-1 md:py-3 font-poppins">

        <div>
          <div className="order-1">
            <Image src={logo} width={100} height={100} alt="logo" className="w-24 md:w-32 object-contain" />
          </div>
        </div>

        <div className="order-3 w-full md:order-2 md:flex-1 md:max-w-2xl md:mx-8">
          <div className="flex">
            <input
              type="search"
              placeholder="I'm looking for..."
              className="flex-1 py-2.5 md:py-3.25 px-5 text-base md:text-lg bg-[#F1F1F1] border-gray-100 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400 placeholder:font-light"
            />
            <button className="p-3 bg-orangec/80 rounded-r-md hover:bg-orangec/90 focus:outline-none focus:ring-2 cursor-pointer focus:ring-orange-300 text-white">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 order-2 md:order-3">
          <button className="flex items-center cursor-pointer gap-1">
            <User size={24} className="md:w-7.5 md:h-7.5" />
            <span className="text-lg font-normal text-gray-700 hidden lg:block">Login</span>
          </button>

          <button className="flex items-center gap-1">
            <Heart size={24} className="md:w-7.5 md:h-7.5" />
            <span className="text-lg font-normal hidden lg:block text-gray-700">Wishlist</span>
          </button>

          <button className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <ShoppingBasket size={24} className="md:w-7.5 md:h-7.5" />
              <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-[10px] text-white bg-[#FF5D5D] rounded-full">
                1
              </span>
            </div>
            <span className="text-lg font-normal text-gray-700 hidden md:block">My cart</span>
          </button>
        </div>

        <div>
        </div>

      </header>
      <Navbar />
    </Container>
  );
};

export default Header;