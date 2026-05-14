import Container from '@/components/commonCompo/Container'
import AllPagination from '@/components/layout/ShopPage/AllPagination'
import SortAndShow from '@/components/layout/ShopPage/SortAndShow';
  

import React from 'react'

const page = () => {


  return (
    <main>
      <Container className="flex justify-between gap-13.25">
        <aside className='w-75'>

        </aside>
        <section className='flex-1 mt-16.25'>
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