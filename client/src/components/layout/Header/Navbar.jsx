'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { menuData } from '../../../../data/megaMenuData';

const Navbar = () => {
 
    const [activeMenu, setActiveMenu] = useState("WOMEN'S FASHION");
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white relative" onMouseLeave={() => setIsMegaMenuOpen(false)}>
            <div className=" px-4">
                {/* NAVBAR */}
                <div className="relative flex items-center">
                    <ul className="flex items-center gap-4.5 md:gap-14.25 py-4 overflow-x-auto no-scrollbar scroll-smooth w-full font-poppins text-sm md:text-base font-medium">
                        {Object.keys(menuData).map((item, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => {
                                    setActiveMenu(item);
                                    setIsMegaMenuOpen(true);
                                }}
                                className={`whitespace-nowrap text-[12px] md:text-[14px] font-semibold cursor-pointer transition-all duration-300 text-center after:content-[''] after:block after:w-full after:h-0.5 after:rounded-full after:transition-transform after:duration-300 after:origin-center
                  
                  ${activeMenu === item && isMegaMenuOpen
                                        ? 'text-orangec after:bg-orangec after:scale-x-100'
                                        : 'text-gray-700 after:bg-orangec after:scale-x-0 hover:text-orangec hover:after:scale-x-100'
                                    }
                `}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden sticky right-0 bg-linear-to-l from-[#F9F9F9] via-[#F9F9F9] to-transparent pl-8 h-full flex items-center pointer-events-none">
                        <ChevronRight
                            size={20}
                            className="text-gray-500 animate-pulse"
                        />
                    </div>
                </div>
            </div>

            {
                isMegaMenuOpen && (<div className="absolute left-0 top-full w-full bg-white font-poppins shadow-lg border-t z-50">
                    <div className=" mx-auto md:px-[71px] px-10 py-7.5">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-[150px] gap-10">
                            {Object.entries(menuData[activeMenu]).map(
                                ([title, items], index) => (
                                    <div key={index}>
                                        <h3 className="font-medium text-[#3D3D3F] mb-3 text-sm md:text-base">
                                            {title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {items.map((subItem, i) => (
                                                <li
                                                    key={i}
                                                    className="md:text-sm text-xs text-[#757575] hover:text-orangec cursor-pointer duration-300"
                                                >
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Navbar;