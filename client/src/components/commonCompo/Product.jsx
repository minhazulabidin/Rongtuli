'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import ReactStars from 'react-stars';

const Product = ({ item }) => {
  const [activeLHeart, setActiveLHeart] = useState(false);

  return (
    <div className="rounded-[10px] border border-[#E9E9E9] p-2.5">
      <div className="relative">
        <Image
          src={item?.thumbnail}
          alt={item?.title}
          width={1000}
          height={1000}
          className="h-auto w-full rounded-[10px] bg-[#E9E9E9] object-cover"
        />

        <FaHeart
          onClick={() => setActiveLHeart(!activeLHeart)}
          className={`absolute top-3 right-3.5 cursor-pointer text-xl text-[#99999966] ${
            activeLHeart ? 'text-[#FF5555]' : ''
          }`}
        />
      </div>

      <div className="mt-4.5 space-y-2.5 px-3.25">
        <div className="font-poppins flex items-center gap-1.25 text-xs">
          <ReactStars
            count={5}
            size={16}
            isHalf={true}
            activeColor="#ffd700"
            value={item?.rating}
            edit={false}
          />

          <span>({item?.rating})</span>
        </div>

        {/* TITLE LINK */}
        <Link href={`/${item?.category}/${item?.id}`}>
          <h2 className="font-poppins cursor-pointer text-base text-[#383838] hover:text-orange-500 md:text-lg">
            {item?.title}
          </h2>
        </Link>

        <div className="text-orangec flex items-center justify-between">
          <p className="font-poppins text-sm font-medium md:text-xl">
            {item?.price} TK
          </p>

          <BsBasket size={24} />
        </div>
      </div>
    </div>
  );
};

export default Product;