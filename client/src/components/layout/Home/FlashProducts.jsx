"use client"
import Product from '@/components/commonCompo/Product'
import api from '@/lib/api'
import React, { useEffect, useState } from 'react'

const FlashProducts = () => {
    const [flashProducts, setFlashProducts] = useState([])
    console.log(flashProducts)
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get('/products/category/womens-dresses?limit=4')
            setFlashProducts(res?.data?.products)
        }
        if (flashProducts.length === 0) {
            fetchData()
        }
    }, [flashProducts.length])

    return (
        <div>
            {
                flashProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default FlashProducts