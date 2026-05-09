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

            <Container className="">
                <div className="grid grid-cols-9 gap-10 font-poppins">
                    <div className="col-span-3">
                        <Image src={logo} width={100} height={100} alt="logo" className="w-24 md:w-32 object-contain" />

                        <p className="text-lg mt-8 text-[#333333CC] leading-7">
                            Elevate your style with Rongtuli. Discover the latest in trendy apparel, premium fabrics, and high-fashion editorial collections. Shop now for a sophisticated look.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <Link href="#">
                                <FaFacebook size={38} className="text-[#0198E9]" />
                            </Link>
                            <Link href="#" className="rounded-full p-2 bg-[#1DA1F2]">
                                <FaTwitter size={20} className="text-white" />
                            </Link>
                            <Link href="#" className="rounded-full p-2 bg-[#0077B5]">
                                <FaLinkedinIn size={20} className="text-white " />
                            </Link>
                            <Link href="#" className="rounded-full p-2 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                                <FaInstagram size={20} className="text-white " />
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h4 className="mb-6 text-xl font-medium uppercase text-[#333333]">
                            QUICK LINKS
                        </h4>

                        <ul className="space-y-3 md:text-lg text-base text-[#333333]/80">
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

                    <div className="col-span-2">
                        <h3 className="mb-6 text-xl font-medium uppercase text-[#333333]">
                            CUSTOMER AREA
                        </h3>

                        <ul className="space-y-3 md:text-lg text-base text-[#333333]/80">
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

                    <div className="col-span-2">
                        <h3 className="mb-6 text-xl font-medium uppercase text-[#333333]">
                            CONTACT
                        </h3>

                        <p className="text-base leading-6 text-[#333333]/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                        </p>

                        <div className="mt-7.75 flex items-center gap-6.75">
                            <Headset className="text-orangec" size={51} />
                            <div>
                                <p className="text-lg text-[#333333]">
                                    Have any question?
                                </p>

                                <h2 className="text-[30px] font-bold leading-none text-orangec mt-1.5">
                                    099 456 789
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Separator className="mt-12.5 mb-5" />

            <Container className="flex justify-between items-center">
                <p className="text-base text-[#757575] font-poppins">
                    Rongtuli © {new Date().getFullYear()} All Rights Reserved
                </p>

                <div className="flex items-center gap-2 text-xl font-medium text-orangec font-poppins">
                    <span>Pay With</span>
                    <Image src={paymentImg} width={574} height={34} alt="payment methods"/>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;