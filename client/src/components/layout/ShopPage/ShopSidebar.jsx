"use client";

import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = [
    "Men’s Fashion",
    "Men’s Jacket",
    "Men’s T-Shirts",
    "Casual Shirts",
    "Summer T-Shirts",
];

const ratings = [1, 2, 3, 4, 5];

const ShopSidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState("Men’s Jacket");
    const [selectedRating, setSelectedRating] = useState(0);

    return (
        <section className="mt-10.75 font-poppins">

            {/* Categories */}
            <div className="">
                <h3 className="text-[20px] font-semibold text-[#333] mb-3">
                    Related Categories
                </h3>

                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`cursor-pointer text-[17px] transition-all duration-200 ${selectedCategory === category
                                ? "text-[#0095ff] font-medium"
                                : "text-[#666]"
                                }`}
                        >
                            • {category}
                        </li>
                    ))}
                </ul>
            </div>

            <Separator className="my-6.25" />

            {/* Price Filter */}
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-semibold text-[#333]">
                        Filter by Price
                    </h3>

                    <ChevronDown size={18} className="text-[#333]" />
                </div>

                <div className="mt-6">
                    <Slider
                        defaultValue={[0]}
                        max={2500}
                        step={1}
                        className="mx-auto w-full max-w-xs"
                    />

                    <p className="mt-4 text-[16px] text-[#666]">
                        Price: ৳1000 - ৳2500
                    </p>
                </div>
            </div>

            <Separator className="my-6.25"/>

            {/* Rating Filter */}
            <div className="">
                <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-semibold text-[#333]">
                        Filter by Rating
                    </h3>

                    <ChevronDown size={18} className="text-[#333]" />
                </div>

                <div className="mt-5 space-y-3">
                    {ratings.map((rating) => (
                        <label
                            key={rating}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedRating === rating}
                                onChange={() => setSelectedRating(rating)}
                                className="w-4 h-4 cursor-pointer accent-[#0095ff]"
                            />

                            <div className="flex items-center gap-1">
                                {Array.from({ length: rating }).map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className="text-[#f5a623]"
                                        size={16}
                                    />
                                ))}
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopSidebar;