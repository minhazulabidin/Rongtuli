"use client";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'next/navigation'
import api from '@/lib/api';
import Product from '@/components/commonCompo/Product';
import { LiaAngleRightSolid, LiaAngleLeftSolid } from 'react-icons/lia';


function Items({ currentItems }) {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-6.25'>
            {currentItems &&
                currentItems.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
        </div>
    );
}

function AllPagination({ itemsPerPage }) {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let res;

                if (category === "products") {
                    res = await api.get('/products?limit=194');
                    setProducts(res?.data?.products);
                } else {
                    res = await api.get(`/products/category/${category}`);
                    setProducts(res?.data?.products);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                previousLabel=" < Previous"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={2}
                containerClassName="flex md:gap-6.25 gap-2.5 mt-10 justify-end font-poppins font-medium text-sm md:text-base text-[#757575]"
                pageLinkClassName="md:px-6.5 px-4.5 md:py-4 py-2 text-orangec hover:bg-orangec hover:text-white cursor-pointer duration-200 rounded-md border border-gray-200"
                previousLinkClassName="md:px-6.5 px-4.5 md:py-4 py-2 bg-white text-orangec hover:bg-orangec hover:text-white cursor-pointer duration-200 rounded-md border border-gray-200"
                nextLinkClassName="md:px-6.5 px-4.5 md:py-4 py-2 bg-white text-orangec hover:bg-orangec hover:text-white cursor-pointer duration-200 rounded-md border border-gray-200"
                activeLinkClassName='bg-orangec text-white'
            />
        </div>
    );
}

export default AllPagination;