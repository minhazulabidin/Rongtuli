import Container from '@/components/commonCompo/Container'
import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

const FlashDeal = () => {
    return (
        <section className='mt-11.25'>
            <Container>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#2E2E2E] text-6.5 font-medium font-poppins'>Flash Deal</h2>
                    <button className='font-poppins text-base font-medium text-[#757575] px-3 cursor-pointer py-2 flex justify-between items-center gap-4.5'>View more <HiArrowSmRight size={24} /></button>
                </div>
                <div>
                    
                </div>
            </Container>
        </section>
    )
}

export default FlashDeal