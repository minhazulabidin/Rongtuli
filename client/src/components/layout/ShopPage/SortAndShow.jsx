"use client";
import React, { useState } from 'react'
import { ListFilterPlus } from 'lucide-react';

const SortAndShow = () => {
    const [filterSheet, setFilterSheet] = useState(false)

    return (
        <div className="items-center justify-between text-sm text-gray-600 mb-5.5! flex">
            <div>
                <p className="font-poppins text-[#3D3D3F] flex items-center gap-2 font-medium"
                    onClick={() => setFilterSheet(true)}
                >
                    <ListFilterPlus />
                    FILTER
                </p>
            </div>
            {/* Left side */}
            <p className='md:block hidden text-lg font-poppins text-[#42424180] font-medium'>
                Showing <span className=" text-gray-900/80">12</span> of{" "}
                <span className=" text-gray-900/80">194</span> products
            </p>

            {/* Right side */}
            <div className="flex items-center gap-2 font-poppins">
                <span className="md:block hidden">Sort by:</span>

                <select className="border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 px-3.75 py-1.25">
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