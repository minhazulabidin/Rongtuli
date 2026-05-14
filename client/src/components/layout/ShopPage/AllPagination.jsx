"use client";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'next/navigation'
import api from '@/lib/api';
import Product from '@/components/commonCompo/Product';


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
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await api.get(`/products/category/${category}`)
            setProducts(res?.data?.products)
        }
        if (products.length === 0) {
            fetchProducts()
        }
    }, [products])

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className='flex'
                pageClassName=""
            />
        </>
    );
}

export default AllPagination;