import Container from '@/components/commonCompo/Container'
import AllPagination from '@/components/layout/ShopPage/AllPagination'
import ShopSidebar from '@/components/layout/ShopPage/ShopSidebar';
import SortAndShow from '@/components/layout/ShopPage/SortAndShow';
  

import React from 'react'

const page = () => {


  return (
    <main>
      <Container className="flex justify-between md:gap-13.25 gap-0">
        <aside className='md:w-75 w-0'>
          <ShopSidebar className="md:block hidden"/>
        </aside>
        <section className='flex-1 md:mt-16.25 mt-5'>
          <SortAndShow/>
          <div className='w-full'>
            <AllPagination itemsPerPage={12} />
          </div>
        </section>
      </Container>
    </main>
  )
}

export default page