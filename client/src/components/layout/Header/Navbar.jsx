import React from "react";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
    const categories = [
        "WOMEN'S FASHION",
        "MEN'S FASHION",
        "KID'S FASHION",
        "HOME & LIFESTYLE",
        "ARTS & CRAFTS",
        "COMPUTER & ELECTRONICS",
        "FOOD & GROCERY",
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative flex items-center">

                    <ul className="flex items-center gap-4.5 md:gap-14.25 py-4 overflow-x-auto no-scrollbar scroll-smooth w-full font-poppins text-sm md:text-base font-medium">
                        {categories.map((item, index) => (
                            <li
                                key={index}
                                className="whitespace-nowrap text-[12px] md:text-[14px] font-semibold text-gray-700 hover:text-black cursor-pointer transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden sticky right-0 bg-linear-to-l from-[#F9F9F9] via-[#F9F9F9] to-transparent pl-8 h-full flex items-center pointer-events-none">
                        <ChevronRight size={20} className="text-gray-500 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;