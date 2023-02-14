import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {

  const [cart, setCart] = useState([]);

  console.log(cart);
  useEffect(() => {
    const CartValue = JSON.parse(localStorage.getItem("cart")  );
    setCart(CartValue);
    // setCart(JSON.parse(localStorage.getItem("cart") ));
  }, []);



  const handleIncrease = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDecrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success('Succesfully Removed ')
  };

  const handleClearAll = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.promise(
      {
        loading: 'Deleting...',
        success: <b>All Tamplet Deleted!</b>,
        error: <b>Could not Delete </b>
      }
    );
  };

  // const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const subtotal = cart.reduce((total, product) => total + (Number(product.price) || 0) * (Number(product.quantity) || 1), 0);


  return (
    <div>
      <h2 className='font-bold text-6xl text-primary mt-3
      '>This Your Shopping Cart 🤷‍♀️</h2>

      <div className='mx-36 my-28  '>

        <div className="overflow-x-auto w-full shadow-inner rounded-lg border border-double border-purple-800">
          <table className="table w-full">
            {/* //header */}
            <thead>
              <tr>
                <th>Title</th>
                <th>
                  <div className='flex align-item-center gap-5'>
                    <div>
                      <FaWindowMinimize />
                    </div>
                    <div>
                      <FaPlus />
                    </div>
                  </div>
                </th>
                <th>Price</th>
                <th>Tottal Price</th>
                <th>Remove</th>
              </tr>
            </thead>


            <tbody>
              {/* row */}
              {cart.map((product, index) => (
                <tr key={product.id}>

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleDecrease(index)}>-</button>
                    {product.quantity}
                    <button onClick={() => handleIncrease(index)}>+</button>
                  </td>
                  <td>{(product.price)}</td>
                  <td>
                    {product.price * product.quantity}
                    {/* {(Number(product.price)) * (Number(product.quantity))} */}
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(index)}>Remove</button>
                  </th>
                </tr>

              ))}
            </tbody>
            {/* footer */}
            <tfoot>
              <tr>
                <th>Title</th>
                <th> plus Minus</th>
                <th>Price</th>
                <th>Tottal Price</th>
                <th>Remove</th>
              </tr>
            </tfoot>

          </table>
        </div>

        <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-lg">
          <div className="collapse-title text-xl font-medium">
            <p className='text-primary'>Subtotal: {subtotal}</p>
          </div>
          <div className="collapse-content justify-around flex items-stretch ">
            <div>
              <button className='btn btn-outline btn-success'
                onClick={handleClearAll}>Clear All</button>
            </div>
            <div>
              <Link to="/payment"  className='btn btn-info'>CheakOut</Link>
              {/* <button to='/payment' className='btn btn-info'>Checkout</button> */}
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Cart;