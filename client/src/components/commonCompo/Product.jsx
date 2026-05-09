import Image from 'next/image'
import React from 'react'
import ReactStars from "react-rating-stars-component";

const Product = ({ item }) => {
    return (
        <div className='border rounded-[10px] border-[#E9E9E9] p-2.5'>
            <Image src={item?.thumbnail} alt={item?.title} width={1000} height={1000} className='w-full h-auto object-cover rounded-[10px]' />
            <div>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
            </div>
        </div>
    )
}

export default Product