import Image from 'next/image'
import React from 'react'
import { BsBasket } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import ReactStars from 'react-stars'

const Product = ({ item }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='border rounded-[10px] border-[#E9E9E9] p-2.5 '>
            <div className="relative">
                <Image src={item?.thumbnail} alt={item?.title} width={1000} height={1000} className='w-full h-auto object-cover rounded-[10px] bg-[#E9E9E9]' />
                <FiHeart className="absolute top-3 right-3.5 text-[#99999966] text-xl cursor-pointer"/>
            </div>
            <div className="px-3.25 space-y-2.5">
               <div className="text-xs gap-1.25 font-poppins flex items-center">
                 <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                    value={item?.rating}
                    edit={false}
                />
                <span>({item?.rating})</span>
               </div>
                <h2 className="font-poppins md:text-lg text-base text-[#383838]">{item?.title}</h2>
                <div className="flex items-center justify-between text-orangec">
                    <p className="md:text-[24px] text-sm font-medium font-poppins">{item?.price} TK</p>
                    <BsBasket size={24} />
                </div>
            </div>
        </div>
    )
}

export default Product