import React from 'react';
import dog from '../../assets/1.jpg';
import man from '../../assets/13.jpg';
import pray from '../../assets/8.jpg';
import sheal from '../../assets/6 (2).jpg';
import img1 from '../../assets/10 (3).jpg';
import img2 from '../../assets/18.jpg';
import img3 from '../../assets/7.jpg';
import img4 from '../../assets/17.jpg';
import img5 from '../../assets/16.jpg';
import img6 from '../../assets/14.jpg';

const ShowContent = () => {
  return (
    <div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg border-b-8 mt-6">
        <div className="collapse-title text-xl text-primary-focus font-medium">
          If You Wanna see my Work ?
        </div>
        <div className="collapse-content text-3xl font-bold text-info">
          <p> First Clicked this Image <br /> Then hover YOUR mouse <div className="swap-off">👳‍♂️</div> </p>
        </div>
      </div>

      <div className='py-10'>

        <div className='flex items-center justify-center' >
          <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
              <img src={img2} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={dog} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={man} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={pray} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={sheal} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={img1} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={img3} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={img4} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={img5} alt="" />
            </div>
            <div className="carousel-item h-full">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShowContent;