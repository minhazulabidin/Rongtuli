"use client";
import React from 'react'
import { ListFilterPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ShopSidebar from './ShopSidebar';

const SortAndShow = () => {

    return (
        <div className="items-center justify-between text-sm text-gray-600 mb-5.5! flex">
            <div>
                <Sheet>
                    <SheetTrigger className="font-poppins text-[#3D3D3F] flex items-center gap-2 font-medium"><ListFilterPlus /> FILTER</SheetTrigger>
                    <SheetContent side="top" className="h-screen overflow-y-auto scrollbar-thin pb-10">
                        <SheetHeader>
                            <SheetTitle className="font-poppins py-5">FILTER BY</SheetTitle>
                            <div><ShopSidebar asChild /></div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
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