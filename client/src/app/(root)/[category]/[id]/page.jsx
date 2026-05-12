
import Container from '@/components/commonCompo/Container';
import ProductSlider from '@/components/commonCompo/ProductSlider';
import { Separator } from '@/components/ui/separator';
import api from '@/lib/api';
import { FaCheck, FaHeart } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const page = async ({ params }) => {
    const { id, category } = await params;
    const res = await api.get(`/products/${id}`);
    const singleProduct = await res?.data;

    console.log(category)
    const price = singleProduct?.price * 12;

    const discount = singleProduct?.discountPercentage;

    const discountAmount = (price * discount) / 100;

    const finalPrice = price - discountAmount;

    return (
        <main>
            <Container>
                <div>
                    breadcum
                </div>
                <div className='flex justify-between gap-27.25 overflow-hidden'>
                    <div className='basis-1/2'>
                        <ProductSlider images={singleProduct?.images} />
                    </div>
                    <div className='basis-1/2 flex flex-col'>
                        <h2 className='font-poppins font-medium text-[55px]  text-[#333333]'>{singleProduct?.title}</h2>
                        <div className='flex justify-between items-center gap-3.75 mt-5.75 font-poppins'>
                            <div className="font-poppins flex items-center gap-1.25 text-[18px]">
                                <span>({singleProduct?.rating}) <span className='text-[#BABABA] text-sm'>({singleProduct?.reviews.length})</span></span>
                            </div>
                            <Separator orientation="vertical" />
                            <p className='flex items-center text-lg gap-3 font-semibold tracking-wider'><FaCheck className='text-green-300! ' />{singleProduct?.minimumOrderQuantity * 12} Sold</p>
                            <Separator orientation="vertical" />
                            <p className='flex items-center space-x-2 text-lg font-poppins tracking-wider gap-3'> <FaHeart className={`cursor-pointer text-xl text-[#99999966]`}
                            /> Add to wishlist</p>
                        </div>
                        <div className='flex gap-6.25 items-center mt-4.5'>
                            <p className="text-4xl! font-semibold text-orangec font-poppins">
                                {finalPrice?.toFixed(2)} TK
                            </p>

                            <del className="font-poppins text-xl text-[#8D8D8D]!">
                                {price?.toFixed(2)} TK
                            </del>

                            <p className="text-xm px-3 py-2 bg-linear-to-r from-[#FF7A00] to-[#FFB800] rounded text-white font-poppins">
                                {discount}%
                            </p>
                        </div>
                        <div className='font-poppins mt-2.75 flex gap-5'>
                            <p>SKU: {singleProduct?.sku}</p>
                            {
                                singleProduct?.availabilityStatus === 'In Stock' ? (
                                    <p className='flex items-center gap-1.25 text-green-300!'><IoIosCheckmarkCircle /> {singleProduct?.availabilityStatus}</p>
                                ) : (
                                    <p className='flex items-center gap-1.25 !text-red-300'><FaCircleXmark /> {singleProduct?.availabilityStatus}</p>
                                )
                            }
                        </div>
                        <Separator className="mt-4.5"/>
                        <div className='mt-3.5'>
                            <p className='font-poppins text-xl tracking-wide'>{singleProduct?.description}</p>
                            <p>Size: </p>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default page