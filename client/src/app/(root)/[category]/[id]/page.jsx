
import { BreadcrumbCompo } from '@/components/commonCompo/Breadcrumb';
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

    const price = singleProduct?.price * 12;

    const discount = singleProduct?.discountPercentage;

    const discountAmount = (price * discount) / 100;

    const finalPrice = price - discountAmount;

    return (
        <main className='md:mt-14 mt-8'>
            <Container>
                <div className='mb-6'>
                    <BreadcrumbCompo productName={singleProduct?.title}/>
                </div>
                <div className='flex md:flex-row flex-col justify-between md:gap-27.25 gap-10 overflow-hidden'>
                    <div className='basis-1/2'>
                        <ProductSlider images={singleProduct?.images} />
                    </div>
                    <div className='basis-1/2 flex flex-col'>
                        <h2 className='font-poppins font-medium md:text-[55px] text-4xl text-[#333333]'>{singleProduct?.title}</h2>
                        <div className='flex justify-between items-center md:gap-3.75 mt-5.75 font-poppins'>
                            <div className="font-poppins flex items-center gap-1.25 md:text-xl text-xm">
                                <span>({singleProduct?.rating}) <span className='text-[#BABABA] text-sm'>({singleProduct?.reviews.length})</span></span>
                            </div>
                            <Separator orientation="vertical" />
                            <p className='flex items-center md:text-lg md:gap-3 gap-1 font-semibold tracking-wider'><FaCheck className='text-green-300! ' />{singleProduct?.minimumOrderQuantity * 12} Sold</p>
                            <Separator orientation="vertical" />
                            <p className='flex items-center md:space-x-2 space-x-1 md:text-lg font-poppins tracking-wider gap-3'> <FaHeart className={`cursor-pointer text-xl text-[#99999966]`}
                            /> Add to wishlist</p>
                        </div>
                        <div className='flex gap-6.25 items-center mt-4.5'>
                            <p className="md:text-4xl text-2xl font-semibold text-orangec font-poppins">
                                {finalPrice?.toFixed(2)} TK
                            </p>

                            <del className="font-poppins md:text-xl text-sm text-[#8D8D8D]!">
                                {price?.toFixed(2)} TK
                            </del>

                            <p className="md:text-xl text-[11px] md:px-3 px-2 md:py-2 py-1 bg-linear-to-r from-[#FF7A00] to-[#FFB800] rounded text-white font-poppins">
                                {discount}%
                            </p>
                        </div>
                        <div className='font-poppins md:text-base text-sm mt-2.75 flex gap-5'>
                            <p>SKU: {singleProduct?.sku}</p>
                            {
                                singleProduct?.availabilityStatus === 'In Stock' ? (
                                    <p className='flex items-center gap-1.25 text-green-300!'><IoIosCheckmarkCircle /> {singleProduct?.availabilityStatus}</p>
                                ) : (
                                    <p className='flex items-center gap-1.25 text-red-300!'><FaCircleXmark /> {singleProduct?.availabilityStatus}</p>
                                )
                            }
                        </div>
                        <Separator className="mt-4.5" />
                        <div className='mt-3.5'>
                            <p className='font-poppins md:text-xl text-base tracking-wide'>{singleProduct?.description}</p>
                            <p>Size: </p>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default page