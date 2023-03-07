import React, { useEffect, useState } from 'react';
import DetailProductCard from './DetailProductCard';

import ProductCard from './ProductCard';


const Products = () => {

    const [products, setProducts] = useState([])
//    console.log(products);


    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div className='py-12'>
                <h1 className=' font-extrabold text-purple-700 taxt-9xl'>This My Work</h1>

            </div>

            <div className='grid gap-6 ml-12  my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
                {/* {
                    products.map(product => <DetailProductCard
                       key={product.id}
                       product={product}
                    ></DetailProductCard>)
                } */}
            </div>

        </div>
    );
};

export default Products;