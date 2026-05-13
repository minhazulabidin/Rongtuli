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
    <div className="rounded-[10px] border border-[#E9E9E9] p-2.5 flex flex-col justify-between">
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
          className={`absolute top-3 right-3.5 cursor-pointer md:text-xl text-base text-[#99999966] ${activeLHeart ? 'text-[#FF5555]' : ''
            }`}
        />
      </div>

      <div className="mt-4.5 px-3.25 flex flex-col flex-1 justify-between">
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

        <Link href={`/${item?.category}/${item?.id}`}>
          <h2 className="font-poppins cursor-pointer md:text-base text-xm text-[#383838] hover:text-orange-500 md:text-lg duration-300 mb-2.5">
            {item?.title}
          </h2>
        </Link>

        <div className="text-orangec flex items-center justify-between">
          <p className="font-poppins md:text-sm text-xm font-medium md:text-xl">
            {item?.price} TK
          </p>

          <BsBasket className='md:text-[24px] text-base' />
        </div>
      </div>
    </div>
  );
};

export default Product;