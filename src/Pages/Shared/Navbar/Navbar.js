import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import {FaUsersSlash } from "react-icons/fa";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    // Get cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    // Calculate cart items count
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(count);

    // Calculate cart subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartSubtotal(subtotal);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }

  const menuItems = <React.Fragment>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/product">Tamplet</Link></li>
    <li><Link to="/contact">Work With Me</Link></li>

  </React.Fragment>



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <li className="btn btn-ghost normal-case text-xl"> <Link to='/'>모하마드 자키르 칸</Link></li>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>


      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">{cartItemsCount}</span>
            </div>
          </label>


          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{cartItemsCount}</span>
              <span className="text-info">Subtotal:{cartSubtotal}</span>
              <div className="card-actions mr-6">
                <Link className="btn btn-primary" to="/cart">View cart</Link>
              </div>
            </div>
          </div>


        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {
                user ?
                  <img src={user.photoURL} alt='photoURL' />
                  :
                  <FaUsersSlash className='mt-3 ml-3  ' />
              }
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {user?.uid ?
              <>
                <li><button className='btn btn-primary text-white' onClick={handleLogOut}>Sign Out</button></li>
              </>
              :
              <li> <Link className='btn btn-primary text-white' to='/signup'>Resigter</Link> </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;