import logo from "@/assate/image/logo.png";
import Container from '@/components/commonCompo/Container';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Headset } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaStar, FaTruck, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { RxCounterClockwiseClock } from 'react-icons/rx';
import paymentImg from "@/assate/image/paymentImg.png";


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
        <footer className="mt-13.25 overflow-hidden">

            <Container>
                <div className="flex w-full justify-around gap-3 md:items-center md:flex-row flex-col items-start">
                    {
                        footerDetails.map(detail => {
                            const Icon = detail?.icon;

                            return (
                                <div
                                    key={detail?.id}
                                    className="flex items-center gap-3 md:mt-0 mt-5 px-3"
                                >
                                    <Icon className="text-orangec shrink-0" size={40} />

                                    <div>
                                        <h3 className="text-xl text-orangec font-medium font-poppins uppercase">
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

            {/* MAIN FOOTER */}
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-y-10 gap-x-6 font-poppins">

                    <div className="lg:col-span-3 md:order-1 order-4">
                        <div className="md:block hidden">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="logo"
                                className="w-24 md:w-32 object-contain"
                            />

                            <p className="text-base md:text-lg mt-6 md:mt-8 text-[#333333CC] leading-7">
                                Elevate your style with Rongtuli. Discover the latest in trendy apparel,
                                premium fabrics, and high-fashion editorial collections. Shop now for a sophisticated look.
                            </p>
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                            <Link href="#">
                                <FaFacebook
                                    size={38}
                                    className="text-[#0198E9]"
                                />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full p-2 bg-[#1DA1F2]"
                            >
                                <FaTwitter
                                    size={20}
                                    className="text-white"
                                />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full p-2 bg-[#0077B5]"
                            >
                                <FaLinkedinIn
                                    size={20}
                                    className="text-white"
                                />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full p-2 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                            >
                                <FaInstagram
                                    size={20}
                                    className="text-white"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 order-2">
                        <h4 className="mb-5 md:mb-6 text-lg md:text-xl font-medium uppercase text-[#333333]">
                            QUICK LINKS
                        </h4>

                        <ul className="space-y-2 md:space-y-3 text-sm md:text-lg text-[#333333]/80">
                            <li className="cursor-pointer hover:text-orangec">
                                About us
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Contact us
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Products
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Login
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Sign Up
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 order-3">
                        <h3 className="mb-5 md:mb-6 text-lg md:text-xl font-medium uppercase text-[#333333]">
                            CUSTOMER AREA
                        </h3>

                        <ul className="space-y-2 md:space-y-3 text-sm md:text-lg text-[#333333]/80">
                            <li className="cursor-pointer hover:text-orangec">
                                My Account
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Orders
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Terms
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Privacy Policy
                            </li>

                            <li className="cursor-pointer hover:text-orangec">
                                Shipping Information
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 md:order-4 order-1">
                        <h3 className="mb-5 md:mb-6 text-lg md:text-xl font-medium uppercase text-[#333333]">
                            CONTACT
                        </h3>

                        <p className="text-sm md:text-base leading-6 text-[#333333]/80">
                        We are here to help you with orders, support, and style guidance anytime.
                        </p>

                        <div className="mt-6 md:mt-7.75 flex items-center gap-4 md:gap-6.75">
                            <Headset
                                className="text-orangec shrink-0"
                                size={45}
                            />

                            <div>
                                <p className="text-base md:text-lg text-[#333333]">
                                    Have any question?
                                </p>

                                <h2 className="text-2xl md:text-[30px] font-bold leading-none text-orangec mt-1.5">
                                    01611374068
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Separator className="mt-10 md:mt-12.5" />

            <Container>
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left py-5">

                    <p className="text-sm md:text-base text-[#757575] font-poppins">
                        <span className="text-orangec font-bold">
                            Rongtuli
                        </span>{" "}
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>

                    <div className="md:flex flex-col sm:flex-row items-center gap-2 text-base md:text-xl font-medium text-orangec font-poppins hidden">
                        <span>Pay With</span>

                        <Image
                            src={paymentImg}
                            width={574}
                            height={34}
                            alt="payment methods"
                            className="w-44 sm:w-56 md:w-auto h-auto object-contain"
                        />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;