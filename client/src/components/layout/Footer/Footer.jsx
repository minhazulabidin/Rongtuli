
import Container from '@/components/commonCompo/Container';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Headphones } from 'lucide-react';
import { FaStar, FaTruck } from 'react-icons/fa';
import { RxCounterClockwiseClock } from 'react-icons/rx';



const footerDetails = [
    {
        id: 1,
        "name": "Free Shipping",
        "description": "Order via Campaign",
        "icon": FaTruck
    },
    {
        id: 2,
        "name": "Best Price",
        "description": "Quality products",
        "icon": FaStar
    },
    {
        id: 3,
        "name": "Free Return",
        "description": "Within 7 days returns",
        "icon": RxCounterClockwiseClock
    },
    {
        id: 4,
        "name": "Secure Payment",
        "description": "100% secure payment",
        "icon": CreditCard
    }
]
const Footer = () => {
    return (
        <footer className="mt-13.25">
            <Container className="">
                <div className="flex w-full justify-around gap-3 md:items-center md:flex-row flex-col items-start">
                    {
                        footerDetails.map(detail => {
                            const Icon = detail?.icon;
                            return (
                                <div key={detail?.id} className="flex items-center gap-3 md:mt-0 mt-5 px-3">
                                    <Icon className="text-orangec" size={40} />
                                    <div>
                                        <h3 className="text-xl text-orangec font-medium font-poppins uppercase ">
                                            {detail?.name}
                                        </h3>
                                        <p className="text-base font-poppins text-[#757575]">
                                            {detail?.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
            <Separator className="my-12.5" />
            {/* Middle Footer */}
            <div className="border-b border-[#d9d9d9]">
                <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-10 px-8 py-10">
                    {/* Logo & About */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-[#3aa0e6]" />

                            <div>
                                <h2 className="text-[15px] font-bold leading-none text-[#3aa0e6]">
                                    project
                                </h2>

                                <h2 className="text-[15px] font-bold leading-none text-[#444]">
                                    nivyo
                                </h2>
                            </div>
                        </div>

                        <p className="mt-5 max-w-[260px] text-[13px] leading-6 text-[#8b8b8b]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b5998] text-white">
                                f
                            </div>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1da1f2] text-white">
                                t
                            </div>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0077b5] text-white">
                                in
                            </div>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4405f] text-white">
                                ◎
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-[14px] font-semibold uppercase text-[#444]">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-4 text-[13px] text-[#8b8b8b]">
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                About us
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Contact us
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Products
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Login
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Sign Up
                            </li>
                        </ul>
                    </div>

                    {/* Customer Area */}
                    <div>
                        <h3 className="mb-5 text-[14px] font-semibold uppercase text-[#444]">
                            CUSTOMER AREA
                        </h3>

                        <ul className="space-y-4 text-[13px] text-[#8b8b8b]">
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                My Account
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Orders
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Terms
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Privacy Policy
                            </li>
                            <li className="cursor-pointer hover:text-[#3aa0e6]">
                                Shipping Information
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-[14px] font-semibold uppercase text-[#444]">
                            CONTACT
                        </h3>

                        <p className="max-w-[230px] text-[13px] leading-6 text-[#8b8b8b]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <Headphones className="text-[#8b8b8b]" size={38} />

                            <div>
                                <p className="text-[13px] text-[#8b8b8b]">
                                    Have any question?
                                </p>

                                <h2 className="text-[30px] font-bold leading-none text-[#1d9bf0]">
                                    099 456 789
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div>
                <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
                    <p className="text-[12px] text-[#8b8b8b]">
                        Projectnivyo © 2021 All Rights Reserved
                    </p>

                    <div className="flex items-center gap-2 text-[12px] font-medium text-[#3aa0e6]">
                        <span>Pay With</span>

                        <div className="flex items-center gap-2 text-[#444]">
                            <span>VISA</span>
                            <span>MasterCard</span>
                            <span>AE</span>
                            <span>PayPal</span>
                            <span>DISCOVER</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;