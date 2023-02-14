import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/herobanner.png';

const HeroBanner = () => {
  return (

    <div className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='w-full h-full pl-12 -mb-4 ml-11 sm:invisible lg:visible' src={img} alt="" />
        <div>
          <h1 className="text-5xl font-bold text-success py-10">education,
            resources &  courses for creatives</h1>

          <button className="btn btn-primary hover:bg-success">
            <Link to="/product">Shop Tamplet</Link>
         </button>
        </div>
      </div>
    </div>

  );
};

export default HeroBanner;
