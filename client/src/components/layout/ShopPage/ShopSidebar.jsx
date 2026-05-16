"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
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

const ShopSidebar = ({className}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);

    return (
        <section className={`mt-10.75 font-poppins ${className}`}>

            {/* Categories */}
            <Accordion>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-[#3D3D3F]"> Related Categories</AccordionTrigger>
                    <AccordionContent className="space-y-2 pb-0">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer text-[17px] transition-all duration-200 ${selectedCategory === category
                                    ? "text-orangec font-medium"
                                    : "text-[#757575]"
                                    }`}
                            >
                                • {category}
                            </li>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Separator className="my-6.25" />

            {/* Price Filter */}
            <Accordion>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-[#3D3D3F]">Filter by Price</AccordionTrigger>
                    <AccordionContent className="">
                        <Slider
                            defaultValue={[0]}
                            max={2500}
                            step={1}
                            className="mx-auto w-full mt-4"
                        />

                        <p className="mt-4 text-base text-[#A7A7A7]">
                            Price: <span className="text-orangec">৳1000 - ৳2500</span>
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Separator className="my-6.25" />

            {/* Rating Filter */}
            <Accordion>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-[#3D3D3F]">Filter by Rating</AccordionTrigger>
                    <AccordionContent className="mt-4 space-y-3">
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
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default ShopSidebar;