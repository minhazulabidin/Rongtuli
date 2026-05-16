import Container from '@/components/commonCompo/Container'
import WishlistProduct from '@/components/layout/WishList/WishlistProduct'
import React from 'react'

const page = () => {
  return (
    <main>
        <Container>
           <div className="w-full md:mt-10 mt-5">
             <WishlistProduct />
           </div>
        </Container>
    </main>
  )
}

export default page