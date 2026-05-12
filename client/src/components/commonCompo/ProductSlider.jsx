'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules

const ProductSlider = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(images)
    if (!images || images.length === 0) return null;

    return (
        <div className="w-169.5 gap-4">

            <div className=''>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image src={image} alt={`Product image ${index + 1}`} width={1000} height={1000} className='bg-linear-to-b from-white via-[#f8f8f8] to-[#d9d9d9]' />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={image} alt={`Product image ${index + 1}`} className='bg-gradient-to-b from-[#ffffff] via-[#f5f5f5] to-[#d6d6d6]' width={1000} height={1000} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;