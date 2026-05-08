import Container from '@/components/commonCompo/Container'
import React from 'react'
import { categoriesData } from '../../../../data/categoriesData'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const CategoriesSection = () => {

    return (
        <section className='mt-12.5'>
            <Container>
                <h2 className='text-6.5 font-poppins font-medium mb-8'>Category</h2>
                <div className='md:grid grid-cols-5 gap-3.25 hidden'>
                    {
                        categoriesData.map(category => (
                            <div key={category?.slug} className='bg-[#FFFFFF] px-4.5 py-5 flex justify-between drop-shadow-lg items-center rounded-[6px] cursor-pointer'>
                                <div className='flex items-center gap-2.5'>
                                    <Image src={category?.icon?.src} alt={category?.name} width={24} height={24} />
                                    <h3 className='text-base font-poppins text-[#394146]'>{category?.name}</h3>
                                </div>
                                <ChevronRight className='text-[#394146]' size={24} />
                            </div>
                        ))
                    }
                </div>
                <div className='grid grid-cols-2 gap-3.25 md:hidden'>
                    {
                        categoriesData.slice(0, 10).map(category => (
                            <div key={category?.slug} className='bg-[#FFFFFF] px-4.5 py-5 flex justify-between drop-shadow-lg items-center rounded-[6px] cursor-pointer'>
                                <div className='flex items-center gap-2.5'>
                                    <Image src={category?.icon?.src} alt={category?.name} width={24} height={24} />
                                    <h3 className='text-sm font-poppins text-[#394146]'>{category?.name}</h3>
                                </div>
                                <ChevronRight className='text-[#394146]' size={24} />
                            </div>
                        ))
                    }
                </div>
            </Container>

        </section>
    )
}

export default CategoriesSection