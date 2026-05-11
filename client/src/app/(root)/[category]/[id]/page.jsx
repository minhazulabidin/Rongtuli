
import Container from '@/components/commonCompo/Container';
import { Separator } from '@/components/ui/separator';
import api from '@/lib/api';
import { FaHeart } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

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
                <div className='flex justify-between'>
                    <div>
                        swiper
                    </div>
                    <div>
                        <h2 className='font-poppins font-medium text-2xl leading-100 text-[#333333]'>{singleProduct?.title}</h2>
                        <div className='flex justify-between items-center gap-3.75'>
                            <div className="font-poppins flex items-center gap-1.25 text-xs">

                                <span>({singleProduct?.rating})</span>
                            </div>
                            <Separator orientation="vertical" />
                            <p className='flex items-center'><TiTick /> {singleProduct?.minimumOrderQuantity * 12}</p>
                            <Separator orientation="vertical" />
                            <p className='flex items-center space-x-2'> <FaHeart className={`cursor-pointer text-xl text-[#99999966]`}
                            /> Add to wishlist</p>
                        </div>
                        <div className='flex gap-6.25 items-center mt-4.5'>
                            <p className="text-4xl! font-semibold text-orangec font-poppins">
                                {finalPrice?.toFixed(2)} TK
                            </p>

                            <del className="font-poppins text-xl text-[#8D8D8D]">
                                {price?.toFixed(2)} TK
                            </del>

                            <p className="text-xm px-3 py-2 bg-linear-to-r from-[#FF7A00] to-[#FFB800] rounded  font-poppins">
                                {discount}%
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default page