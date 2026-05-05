import Container from "@/components/commonCompo/Container";
import React from "react";
import logo from "@/assate/image/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between py-8.25 font-poppins">
        {/* Logo Section */}
        <div className="">
          <Image src={logo} alt="logo" className="w-30 h-15" />
        </div>

        {/* Search Section */}
        <div className="flex flex-1 max-w-2xl mx-8">
          <input
            type="search"
            placeholder="I'm looking for..."
            className="flex-1 p-3 text-lg border-gray-100 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 placeholder:font-light"
          />
          <button className="p-3 bg-orangec/80 rounded-r-md hover:bg-orangec/90 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-400">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* User Actions Section */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-blue-500">
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-lg font-normal text-gray-700">Login</span>
          </button>

          <button className="flex items-center gap-2 hover:text-blue-500">
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-lg font-normal text-gray-700">Wishlist</span>
          </button>

          <button className="flex items-center gap-2 hover:text-blue-500 relative">
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-lg font-normal text-gray-700">My cart</span>
            <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
              1
            </span>
          </button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
