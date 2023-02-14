import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const DetailProductCard = ({product}) => {

//    const [product, setProducts] = useState([]) // handleBuyNowClick
  const [products, setProduct] = useState([]) // useEffect

  const { id } = useParams();

  console.log(' product id', id);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  const { title, img, price, description } = products;

  const handleBuyNowClick = () => {

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]" );
    // setViewDetais(existingCart);

    const productIndex = existingCart.findIndex(item => item.id === product.id); ///
      // console.log(productIndex);

    if (productIndex === -1) {
      const updatedProduct = { ...product, quantity: 1 };//
      localStorage.setItem("cart", JSON.stringify([...existingCart, updatedProduct]));
      toast.success(' successfully added ')
    }
    else{ toast.error('You dont add a Tamplet multiplly ') }

  };


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-24 my-16 pb-7">
      <figure><img src={img} alt="product img" /></figure>
      <div className="card-body justify-start">
        <h2 className="card-title text-3xl text-opacity-100 text-primary"> {title}</h2>
        <p className='text-2xl font-bold text-primary-focus mt-20 text-start'>Price : $ {price}</p>
        <p className='text-justify font-bold text-info -mt-44'>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"   onClick={handleBuyNowClick} >Buy Now</button>
          {/* <Link className="btn btn-primary" to='/cart' onClick={handleBuyNowClick}>Buy Now</Link> */}
        </div>
      </div>
    </div>
  );
};

export default DetailProductCard;