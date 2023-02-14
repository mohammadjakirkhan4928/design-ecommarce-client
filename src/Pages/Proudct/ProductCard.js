import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { id, title, img, price } = product;
   
    const handleBuyNowClick = () => {

        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]" );
        console.log(existingCart);

        const productIndex = existingCart.findIndex(item => item.id === product.id);
          console.log(productIndex);

        if (productIndex === -1) {
          const updatedProduct = { ...product, quantity: 1 };
          localStorage.setItem("cart", JSON.stringify([...existingCart, updatedProduct]));
          toast.success(' successfully added ')
        }
        else{ toast.error('You dont add a Tamplet multiplly ') }

      };



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">
                        {title}
                    </h2>
                    <p className='font-bold text-pink-700'>${price}</p>
                    <div className="card-actions justify-center">
                        <Link className=" btn btn-outline" to={`/product/${product.id}`}>
                            View Details
                        </Link>
                        <div>
                        </div>
                        <div>
                           <button className="btn btn-primary" onClick={handleBuyNowClick}> Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;