"use client";
import React from 'react'
import { useProductStore } from '@/ZustandStore/ShowProductNum';

const SortAndShow = () => {

    return (
        <div className="hidden items-center justify-between text-sm text-gray-600 mb-5.5! md:flex">
            {/* Left side */}
            <p className='text-lg font-poppins text-[#42424180] font-medium'>
                Showing <span className=" text-gray-900/80">12</span> of{" "}
                <span className=" text-gray-900/80">194</span> products
            </p>

            {/* Right side */}
            <div className="flex items-center gap-2 font-poppins">
                <span>Sort by:</span>

                <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400">
                    <option>Newest Items</option>
                    <option>Oldest Items</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndShow