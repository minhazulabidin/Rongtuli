"use client"
import Product from '@/components/commonCompo/Product';
import api from '@/lib/api';
import useWishlistStore from '@/ZustandStore/useWishlistStore';
import React, { useState, useEffect } from 'react'

const WishlistProduct = () => {
    const { wishlist } = useWishlistStore();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await Promise.all(
                    wishlist.map(id => api.get(`/products/${id}`))
                )
                setProducts(productData)
            } catch (err) {
                console.log(err)
            }
        }
        if (wishlist.length > 0) {
            fetchProduct()
        }
    }, [wishlist])
    return (
       <>
        {
            wishlist.length > 0?<div className="grid md:grid-cols-3 grid-cols-2 md:gap-6.25 gap-3.5">
            {
                products.map(item => (
                    <Product key={item?.data?.id} item={item?.data} />
                ))
            }
        </div> : <div className="flex justify-center w-full"><p className="py-52 font-poppins md:text-xl text-md text-orangec font-semibold">No product you added in wish list</p></div>
        }
       </>
    )
}

export default WishlistProduct