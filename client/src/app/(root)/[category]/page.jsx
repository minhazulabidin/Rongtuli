import Container from '@/components/commonCompo/Container'
import AllPagination from '@/components/layout/ShopPage/AllPagination'

import React from 'react'

const page = () => {

  return (
    <main>
      <Container className="flex justify-between gap-13.25">
        <aside className='w-75'>

        </aside>
        <section className='flex-1 mt-16.25'>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-5.5!">
            {/* Left side */}
            <p className='text-lg font-poppins text-[#42424180] font-medium'>
              Showing <span className=" text-gray-900/80">20</span> of{" "}
              <span className=" text-gray-900/80">160</span> products
            </p>

            {/* Right side */}
            <div className="flex items-center gap-2 font-poppins">
              <span>Sort by:</span>

              <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400">
                <option>Newest Items</option>
                <option>Oldest Items</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <AllPagination itemsPerPage={12} />
          </div>
        </section>
      </Container>
    </main>
  )
}

export default page