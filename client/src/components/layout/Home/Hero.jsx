import Container from '@/components/commonCompo/Container'
import React from 'react'

const Hero = () => {
    return (
        <section className='mt-3.25'>
            <Container>
                <div className='grid grid-cols-3 grid-rows-2 gap-7.5 h-140'>
                    <div className='border border-red-200 col-span-2 row-span-2'>
                        slider
                    </div>
                    <div className='border border-red-200 col-span-1 row-span-1'>
                        Groceries collection
                    </div>
                    <div className='border border-red-200 col-span-1 row-span-1'>
                        Health & Beauty collection
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero